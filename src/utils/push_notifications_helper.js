import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestUserPermission() {
    console.log('5505 calling in requestUserPermission');
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('5505 Authorization status:', authStatus);
        getFCMToken()
    }
}

export async function getFCMToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log('5505 OLD Token:', fcmToken);
    if (!fcmToken) {
        try {
            await messaging().registerDeviceForRemoteMessages();
            let fcm_token = await messaging().getToken();
            console.log('5505 New Token:', fcmToken);
            if (fcm_token) {
                await AsyncStorage.setItem('fcmToken', fcm_token);
            }
        } catch (err) {
            console.log('5505 error in Fcmtoken', err);
        }
    }
}

export const notificationsListener = async () => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    console.log('5505 calling in notificationsListener');
    await messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            '5505 Notification caused app to open from background state:',
            remoteMessage.notification,
        );

    });

    await messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    '5505 Notification caused app to open from quit state:',
                    remoteMessage.notification,
                );
            }
        });

    await messaging().onMessage(async remoteMessage => {
        console.log('5505 notifications on foreground state', remoteMessage);
    })
}