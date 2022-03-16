import {SafeAreaView, StyleSheet,ScrollView, Text,Button, View, TouchableOpacity,TextInput} from 'react-native';
import React, {Component, useState} from 'react';


import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import AppointmentHeading from './AllHeaders/AppointmentHeading';
import PatientDoc from './PatientDoc';
import styles from './Styles/CompleteStyling';
import Balance from './Balance';



export default class HomeScreen extends Component {
 


    render(){

     return (
       <ScrollView style={styles.ContainerWhole} >
       <SafeAreaView style={{flex: 1}}>
       
             
             
          <View>
           <View style={{backgroundColor:'#38AB94'}}> 
          <Header name="HOME SCREEN" class= ""/>
            <UnitClerkHeader/>
 
            <Balance/>
            </View>
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
              BOOKING </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button_Side_by_Side}
              onPress={() =>this.props.navigation.navigate("SignInScreen")}
              > 
              <Text style={styles.Button_text_styling}>
              SEARCH </Text>
            </TouchableOpacity>
    </View>
    <AppointmentHeading name="UPCOMING APPOINTMENTS" class= "" />

{/* 
      <SafeAreaView>
      // <ScrollView> */}
    <ScrollView style={[styles.containerForScrollView]}> 
 
    <PatientDoc/>
    <PatientDoc/>
    <PatientDoc/>
    <PatientDoc/>
    
    </ScrollView>

  {/* </ScrollView>
     </SafeAreaView> */}
     
  
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
