import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddItem from "../containers/home_/addItem";
import AddPackage from "../containers/main/package/addPackage";
import { Host, Portal } from 'react-native-portalize';
import SelectPackage from "../containers/main/package/select_package";
import TabBar from "./navigation/TabBar";
import Profile from "../containers/account/profile";
import Graphs from "../containers/account/graphs";
import MemberInfo from "../containers/home_/members/member_info";
import PhysicalInfo from "../containers/home_/members/member_info/physical_info";
import ModulesList from "../containers/home/notes/subject_list/module_list";
import SubModulesList from "../containers/home/notes/subject_list/module_list/sub_module_list";
import AddSubModuleInfo from "../containers/home_/addforms/sub_module/AddSubModuleInfo";
import AddSubjectInfo from "../containers/home_/addforms/subject/AddSubjectInfo";
import AddModuleInfo from "../containers/home_/addforms/module/AddModuleInfo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Host>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false,
          headerTitleStyle: {
            color: '#61DAFB',
            fontFamily: 'Montserrat-ExtraBold',
            fontSize: 22,
          },
          headerStyle: {
            // backgroundColor: theme.Colors.COLOR_CARD,
          },
        }}>
          <Stack.Screen name="Home" component={TabBar} options={{ headerShown: false }} />

          <Stack.Screen
            name="ModulesList"
            component={ModulesList}
          />

          <Stack.Screen
            name="SubModulesList"
            component={SubModulesList}
          />

          <Stack.Screen name="AddSubModuleInfo" component={AddSubModuleInfo} />
          <Stack.Screen name="AddSubjectInfo" component={AddSubjectInfo} />
          <Stack.Screen name="AddModuleInfo" component={AddModuleInfo} />

          <Stack.Screen name="AddItem" component={AddItem} />
          <Stack.Screen name="AddPackage"
            component={AddPackage}
          />
          <Stack.Screen name="SelectPackage" component={SelectPackage} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Graphs" component={Graphs} />
          <Stack.Screen
            options={{
              title: 'Physical Information',
              headerShown: true,
              headerTitleStyle: {
                // color: '#00E3BA',
                fontFamily: 'Montserrat-SemiBold',
                fontSize: 18,
              },
            }}
            name="PhysicalInfo" component={PhysicalInfo} />
          <Stack.Screen options={{
            title: 'Member Information',
            headerShown: true,
            headerTitleStyle: {
              // color: '#00E3BA',
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 18,
            },
            // headerStyle: {
            //   backgroundColor: theme.Colors.COLOR_CARD,
            // },
          }} name="MemberInfo" component={MemberInfo} />
        </Stack.Navigator>
      </Host>
    </NavigationContainer>
  );
}