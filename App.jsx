// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthentificationScreen from './screens/AuthentificationScreen.jsx';
import WhoAreYou from './screens/WhoAreYou.jsx';
import SignupFirstIndiv from './screens/signupindiv/SignupFirstIndiv.jsx';
import SignupSecondIndiv from './screens/signupindiv/SignupSecondIndiv.jsx';
const Stack = createStackNavigator();
function NavStack() {
  return (
    <Stack.Navigator

    >
      <Stack.Screen
        name="authentificationScreen"
        component={AuthentificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="whoAreYou"
        component={WhoAreYou}
        options={{
          headerShown: false
       //   headerTitle: '', // set headerTitle to null to remove the title
        //  headerBackTitleVisible: false, // set headerBackTitleVisible to false to hide the back button label
       //   headerStatusBarHeight: 0, // remove the default margin between Stack.Screen and SafeAreaView
       //   headerStyle: {
         //   backgroundColor: '#0A3B2D', // set the background color of the header to blue
        //    borderBottomWidth: 0, // remove the default bottom border
        //  },
        }} />
        <Stack.Screen
        name="signupFirstIndiv"
        component={SignupFirstIndiv}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="signupSecondIndiv"
        component={SignupSecondIndiv}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}