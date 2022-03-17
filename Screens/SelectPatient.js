import {SafeAreaView, StyleSheet,ScrollView, Text,Button, View, TouchableOpacity,TextInput} from 'react-native';
import React, {Component, useState} from 'react';
import styles from './Styles/CompleteStyling';


import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import Patientinfo from './DATA/patient.json';
import PatientDoc from './PatientDoc';

export default class SelectPatient extends Component {

    render(){
     return (
       <ScrollView style={{backgroundColor:"#33A58F"}}>
       <SafeAreaView style={{flex: 1}}>
 
       <View>
            <Header style={{height:"20%"}} name="SELECT PATIENT" class= ""/>
            <UnitClerkHeader/>
            <ScrollView style={[{alignSelf:'center',marginTop:45},styles.containerForScrollView]}>
             <PatientDoc/>
             <PatientDoc/>
             <PatientDoc/>
             <PatientDoc/>

             </ScrollView>
            <TouchableOpacity style={styles.buttonGeneral}
              onPress={() =>this.props.navigation.navigate("HomeScreen")}
              > 
              <Text  style={styles.Button_text_styling} >
              BACK </Text>
             
            </TouchableOpacity>


            {/* <TouchableOpacity style={styles.buttonGeneral}
              onPress={() =>this.props.navigation.navigate("SixthPage")}
              > 
              <Text style={styles.Button_text_styling}>
              PROCEED </Text>
             
            </TouchableOpacity> */}
         
            </View>
            </SafeAreaView>
            </ScrollView>
      );
      }
 }

