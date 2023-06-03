import { getData } from "config";
import firestore from '@react-native-firebase/firestore';

export const get_modules_lists = (subject_id) => async dispatch => {
    try {

        firestore()
            .collection('store')
            .doc(subject_id)
            .collection("modules")
            .get()
            .then(async querySnapshot => {
                // console.log('User ID: ', querySnapshot.id,);
                const modules_list = [];

                await querySnapshot.forEach(documentSnapshot => {
                    let data = documentSnapshot.data();
                    data.id = documentSnapshot.id;
                    modules_list.push(data);
                });
                dispatch({ type: 'MODULE_LIST_SUCCESS', payload: modules_list });
            });

        return null;

    } catch (err) {
        console.log(err)
    }
};

export const set_module_id = (module_id) => async dispatch => {
    dispatch({ type: 'SET_MODULE_ID', payload: module_id });
};

// import { getData } from "config";
// import firestore from '@react-native-firebase/firestore';

// export const get_modules_lists = () => async dispatch => {
//     try {
//         const muteArray = [];
//         firestore()
//             .collection('Store')
//             .get()
//             .then(querySnapshot => {
//                 console.log('Total users: ', querySnapshot.size);
//                 querySnapshot.forEach(documentSnapshot => {
//                     console.log('User ID: ', documentSnapshot.id,);
//                     muteArray.push(documentSnapshot.data());
//                 });
//             });

//         dispatch({ type: 'MODULE_LIST_SUCCESS', payload: muteArray });
//         return null;
//     } catch (err) {
//         console.log(err)
//     }
// };