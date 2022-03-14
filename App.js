

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from "./Screens/SignInScreen";
import HomeScreen from "./Screens/HomeScreen";

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
        name="HomeScreen"
        component={HomeScreen}

      />

</Stack.Navigator>
    </NavigationContainer>
  );
};





export default App;
