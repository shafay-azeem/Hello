

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
import ImagesRecords from "./Screens/ImagesRecords";
import MoreImagesAndRecord from "./Screens/MoreImagesAndRecord";
import UpdatePatientProfile from "./Screens/UpdatePatientProfile";

import SelectDoc from "./Screens/SelectDoc";
import SelectSlot from "./Screens/SelectSlot";

import AppointmentConfirmation from "./Screens/AppointmentConfirmation";
import SelectSchedule from "./Screens/SelectSchedule";
import Payment from "./Screens/Payment";

import modal from "./Screens/modal";

import ConsultationPayment from "./Screens/ConsultationPayment";

import PaymentSuccessfull from "./Screens/PaymentSuccessful";
import AppointmentDetails from "./Screens/AppointmentDetails";


import UpdatePatient from "./Screens/UpdatePatient";
import CreateSlot from "./Screens/CreateSlots";
import OpeningBal from "./Screens/Openingbal";



import ConsultationPaymentcheque from "./Screens/ConsultationPaymentcheque";


const Stack = createStackNavigator();

const App = () => {


  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SignInScreen"
      screenOptions={{headerShown:false}}>

<Stack.Screen
        name="OpeningBal"
        component={OpeningBal}
      />

<Stack.Screen
        name="CreateSlot"
        component={CreateSlot}
      />
      <Stack.Screen
        name="ConsultationPaymentcheque"
        component={ConsultationPaymentcheque}
      />

<Stack.Screen
        name="ConsultationPayment"
        component={ConsultationPayment}
      />
            <Stack.Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
      />
                <Stack.Screen
        name="UpdatePatient"
        component={UpdatePatient}
      />


      
{/* <Stack.Screen
        name="ExampleTwo"
        component={ExampleTwo}
      /> */}

<Stack.Screen
        name="PaymentSuccessfull"
        component={PaymentSuccessfull}
      />

<Stack.Screen
        name="SearchPatient"
        component={SearchPatient}
      />

<Stack.Screen
        name="modal"
        component={modal}
      />

      

      
<Stack.Screen
        name="Payment"
        component={Payment}
      />
    <Stack.Screen
        name="AppointmentConfirmation"
        component={AppointmentConfirmation}
      />
      
<Stack.Screen
        name="SelectSchedule"
        component={SelectSchedule}
      />

<Stack.Screen
        name="SelectDoc"
        component={SelectDoc}
      />

<Stack.Screen
        name="SelectSlot"
        component={SelectSlot}
      />

<Stack.Screen
        name="UpdatePatientProfile"
        component={UpdatePatientProfile}
      />


      
<Stack.Screen
        name="ImagesRecords"
        component={ImagesRecords}
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

<Stack.Screen
        name="MoreImagesAndRecord"
        component={MoreImagesAndRecord}

      />

</Stack.Navigator>
    </NavigationContainer>
  );
};





export default App;
