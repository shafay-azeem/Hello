import {SafeAreaView, StyleSheet,ScrollView, Text,Button, View, TouchableOpacity,TextInput} from 'react-native';
import React, {Component, useState} from 'react';


import styles from './Styles/CompleteStyling';
import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';

export default class PatientDemographics extends Component {

    render(){
     return (
       <ScrollView style={{backgroundColor:"#38AB94"}}>
       <SafeAreaView style={{flex: 1}}>
       
             
             
          <View>
          <Header name="PATIENT DEMOGRAPHICS" class= ""/>
       <UnitClerkHeader/>
       <PatientHeader/>

               <TouchableOpacity style={styles.buttonGeneral}
              onPress={() =>this.props.navigation.navigate("EightPage")}
              > 
              <Text style={styles.Button_text_styling}>
              BOOK APPOINTMENT </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonGeneral}
              onPress={() =>this.props.navigation.navigate("UpcomingAppointmentSchedule")}
              > 
              <Text style={styles.Button_text_styling}>
              UPCOMING APPOINTMENT </Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonGeneral}
              onPress={() =>this.props.navigation.navigate("EightPage")}
              > 
              <Text style={styles.Button_text_styling}>
              UPDATE PATIENT PROFILE </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonGeneral}
              onPress={() =>this.props.navigation.navigate("EightPage")}
              > 
              <Text style={styles.Button_text_styling}>
             IMAGES OR RECORD </Text>
            </TouchableOpacity>
            

 
         </View>
           
             </SafeAreaView>
             </ScrollView>
      
     );
    }
 } 

 