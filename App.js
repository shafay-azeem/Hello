

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from "./Screens/SignInScreen";
import HomeScreen from "./Screens/HomeScreen";
import Balance from "./Screens/Balance";
import PatientRegistration from "./Screens/PatientRegistration";
import RegistrationScreen from "./Screens/RegistrationScreen";

const Stack = createStackNavigator();

const App = () => {


  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SignInScreen"
      screenOptions={{headerShown:false}}>


      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}

      />
      
      <Stack.Screen
        name="Balance"
        component={Balance}

      />

<Stack.Screen
        name="HomeScreen"
        component={HomeScreen}

      />

<Stack.Screen
        name="PatientRegistration"
        component={PatientRegistration}

      />
      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}

      />

</Stack.Navigator>
    </NavigationContainer>
  );
};





export default App;
