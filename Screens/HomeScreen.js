import {SafeAreaView, StyleSheet,ScrollView, Text,Button, View, TouchableOpacity,TextInput} from 'react-native';
import React, {Component, useState} from 'react';


import Header from './AllHeaders/Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import AppointmentHeading from './AllHeaders/AppointmentHeading';
import PatientDoc from './PatientDoc';
import styles from './Styles/CompleteStyling';



export default class HomeScreen extends Component {
 
    render(){

     return (
       <ScrollView>
       <SafeAreaView style={{flex: 1}}>
       
             
             
          <View>
          <Header name="HOME SCREEN" class= ""/>
            <UnitClerkHeader/>
 

            <View style={styles.containerForButton}>
            <TouchableOpacity style={styles.button_Side_by_Side}
              onPress={() =>this.props.navigation.navigate("SignInScreen")}
              > 
              <Text style={styles.Button_text_styling}>
              REGISTRATION </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button_Side_by_Side}
              onPress={() =>this.props.navigation.navigate("SignInScreen")}
              > 
              <Text style={styles.Button_text_styling}>
              SEARCH </Text>
            </TouchableOpacity>
    </View>
    <AppointmentHeading name="UPCOMING APPOINTMENTS" class= "" />


    <PatientDoc/>
    <PatientDoc/>
    <PatientDoc/>
    <PatientDoc/>
    <PatientDoc/>

               <TouchableOpacity style={styles.buttonGeneral}
              onPress={() =>this.props.navigation.navigate("SignInScreen")}
              > 
              <Text  style={styles.Button_text_styling} >
              NEXT </Text>
            </TouchableOpacity>

 
         </View>
        
      
           
             </SafeAreaView>
             </ScrollView>
      
     );
    }
 } 
