import {SafeAreaView, StyleSheet,ScrollView, Text,Button, View, TouchableOpacity,TextInput} from 'react-native';
import React, {Component, useState} from 'react';


import styles from './Styles/CompleteStyling';
import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import DrAppointmentList from './DrAppointmentList';
  



export default class UpcomingAppointmentSchedule extends Component {

    render(){
     return (
       <ScrollView style={{backgroundColor:"#38AB94"}}>
       <SafeAreaView style={{flex: 1}}>
       
             
             
          <View>
          <Header name="UPCOMING APPOINTMENT SCHEDULE" class= ""/>
       <UnitClerkHeader/>
       <PatientHeader/>

       <ScrollView style={[{marginTop:30},styles.containerForScrollView]}>
    <DrAppointmentList/>

    <DrAppointmentList/>
    <DrAppointmentList/>
    <DrAppointmentList/>
      </ScrollView>
 
         </View>

         <TouchableOpacity style={styles.buttonGeneral}
              onPress={() =>this.props.navigation.navigate("SearchDoctor")}
              > 
              <Text style={styles.Button_text_styling}>
            NEXT </Text>
            </TouchableOpacity>
        
           
             </SafeAreaView>
             </ScrollView>
      
     );
    }
 } 

 