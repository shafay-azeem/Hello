

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from "./Screens/SignInScreen";
import HomeScreen from "./Screens/HomeScreen";
import Balance from "./Screens/Balance";
import SearchPatient from "./Screens/SearchPatient";
import SelectPatient from "./Screens/SelectPatient";
import PatientHeader from "./Screens/AllHeaders/PatientHeader";

import RegistrationScreen from "./Screens/RegistrationScreen";
import PatientDemographics from "./Screens/PatientDemographics";
import UpcomingAppointmentSchedule from "./Screens/UpcomingAppointmentSchedule";
import SearchDoctor from "./Screens/SearchDoctor";




const Stack = createStackNavigator();

const App = () => {


  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SignInScreen"
      screenOptions={{headerShown:false}}>


      <Stack.Screen
        name="SearchPatient"
        component={SearchPatient}
      />

<Stack.Screen
        name="UpcomingAppointmentSchedule"
        component={UpcomingAppointmentSchedule}
      />

      
<Stack.Screen
        name="SearchDoctor"
        component={SearchDoctor}
      />


<Stack.Screen
        name="PatientDemographics"
        component={PatientDemographics}

      />
         <Stack.Screen
        name="SelectPatient"
        component={SelectPatient}

      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}

      />

<Stack.Screen
        name="PatientHeader"
        component={PatientHeader}

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
        name="RegistrationScreen"
        component={RegistrationScreen}

      />

</Stack.Navigator>
    </NavigationContainer>
  );
};





export default App;
