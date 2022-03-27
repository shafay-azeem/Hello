import {SafeAreaView, StyleSheet,ScrollView, Text,Button, View, TouchableOpacity,TextInput} from 'react-native';
import React, {Component, useState} from 'react';
import styles from './Styles/CompleteStyling';


import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import Patientinfo from './DATA/patient.json';
import drinfo from './DATA/data.json';


export default class SelectPatient extends Component {

    render(){
     return (
       <ScrollView style={{backgroundColor:"#33A58F"}}>
       <SafeAreaView style={{flex: 1}}>
 
       <View>
            <Header style={{height:"20%"}} name="SELECT PATIENT" class= ""/>
            <UnitClerkHeader/>
            <ScrollView style={[{alignSelf:'center',marginTop:45},styles.containerForScrollView]}>
            <ScrollView>
        <View style={styles.containerForSelectPatient} >
   
    <TouchableOpacity 
    onPress={() =>this.props.navigation.navigate("PatientDemographics")}>       
   <View style= {{flexDirection: "row"}}>
                    
                    <View style = {{flexDirection: 'row',width: '50%' , alignItems: 'center',justifyContent: 'flex-start'}}>
                    <Text style={{marginTop:10, lineHeight: 20,color: 'black',alignSelf: 'flex-start',fontFamily:"Montserrat-Regular"}}>Dr.Name:{'\n'}Specality:</Text>
                    <Text style={{marginTop:11,color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{drinfo.doctorName}{'\n'}{drinfo.specality}</Text>
               
                    </View>


<View style = {{flexDirection: 'row', width: '50%', alignItems: 'center',justifyContent: 'flex-end'}}>
                    <Text style={{marginTop:10 ,lineHeight: 20, color: 'black',alignSelf:'flex-end',fontFamily:"Montserrat-Regular"}}>Patient: {"\n"}Date: </Text>
                      <Text style={{marginTop:11,color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{Patientinfo.patientName}{'\n'}{Patientinfo.Date}</Text>
                    </View>
                  </View>
                  
                  </TouchableOpacity>
  

        

            
  


         </View>
    

         </ScrollView>

         <ScrollView>
        <View style={styles.containerForSelectPatient} >
   
    <TouchableOpacity 
    onPress={() =>this.props.navigation.navigate("PatientDemographics")}>       
   <View style= {{flexDirection: "row"}}>
                    
                    <View style = {{flexDirection: 'row',width: '50%' , alignItems: 'center',justifyContent: 'flex-start'}}>
                    <Text style={{marginTop:10, lineHeight: 20,color: 'black',alignSelf: 'flex-start',fontFamily:"Montserrat-Regular"}}>Dr.Name:{'\n'}Specality:</Text>
                    <Text style={{marginTop:11,color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{drinfo.doctorName}{'\n'}{drinfo.specality}</Text>
               
                    </View>


<View style = {{flexDirection: 'row', width: '50%', alignItems: 'center',justifyContent: 'flex-end'}}>
                    <Text style={{marginTop:10 ,lineHeight: 20, color: 'black',alignSelf:'flex-end',fontFamily:"Montserrat-Regular"}}>Patient: {"\n"}Date: </Text>
                      <Text style={{marginTop:11,color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{Patientinfo.patientName}{'\n'}{Patientinfo.Date}</Text>
                    </View>
                  </View>
                  
                  </TouchableOpacity>
  

        

            
  


         </View>
    

         </ScrollView>
         <ScrollView>
        <View style={styles.containerForSelectPatient} >
   
    <TouchableOpacity 
    onPress={() =>this.props.navigation.navigate("PatientDemographics")}>       
   <View style= {{flexDirection: "row"}}>
                    
                    <View style = {{flexDirection: 'row',width: '50%' , alignItems: 'center',justifyContent: 'flex-start'}}>
                    <Text style={{marginTop:10, lineHeight: 20,color: 'black',alignSelf: 'flex-start',fontFamily:"Montserrat-Regular"}}>Dr.Name:{'\n'}Specality:</Text>
                    <Text style={{marginTop:11,color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{drinfo.doctorName}{'\n'}{drinfo.specality}</Text>
               
                    </View>


<View style = {{flexDirection: 'row', width: '50%', alignItems: 'center',justifyContent: 'flex-end'}}>
                    <Text style={{marginTop:10 ,lineHeight: 20, color: 'black',alignSelf:'flex-end',fontFamily:"Montserrat-Regular"}}>Patient: {"\n"}Date: </Text>
                      <Text style={{marginTop:11,color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{Patientinfo.patientName}{'\n'}{Patientinfo.Date}</Text>
                    </View>
                  </View>
                  
                  </TouchableOpacity>
  

        

            
  


         </View>
    

         </ScrollView>
         <ScrollView>
        <View style={styles.containerForSelectPatient} >
   
    <TouchableOpacity 
    onPress={() =>this.props.navigation.navigate("PatientDemographics")}>       
   <View style= {{flexDirection: "row"}}>
                    
                    <View style = {{flexDirection: 'row',width: '50%' , alignItems: 'center',justifyContent: 'flex-start'}}>
                    <Text style={{marginTop:10, lineHeight: 20,color: 'black',alignSelf: 'flex-start',fontFamily:"Montserrat-Regular"}}>Dr.Name:{'\n'}Specality:</Text>
                    <Text style={{marginTop:11,color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{drinfo.doctorName}{'\n'}{drinfo.specality}</Text>
               
                    </View>


<View style = {{flexDirection: 'row', width: '50%', alignItems: 'center',justifyContent: 'flex-end'}}>
                    <Text style={{marginTop:10 ,lineHeight: 20, color: 'black',alignSelf:'flex-end',fontFamily:"Montserrat-Regular"}}>Patient: {"\n"}Date: </Text>
                      <Text style={{marginTop:11,color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{Patientinfo.patientName}{'\n'}{Patientinfo.Date}</Text>
                    </View>
                  </View>
                  
                  </TouchableOpacity>
  

        

            
  


         </View>
    

         </ScrollView>
         
             </ScrollView>
            {/* <TouchableOpacity style={styles.buttonGeneral}
              onPress={() =>this.props.navigation.navigate("PatientDemographics")}
              > 
              <Text  style={styles.Button_text_styling} >
              ENTER </Text>
             
            </TouchableOpacity> */}


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

