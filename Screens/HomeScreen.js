import {SafeAreaView, StyleSheet,ScrollView, Text,Button, View, TouchableOpacity,TextInput} from 'react-native';
import React, {Component, useState} from 'react';


import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import AppointmentHeading from './AllHeaders/AppointmentHeading';
import PatientDoc from './PatientDoc';
import styles from './Styles/CompleteStyling';
import Balance from './Balance';
import drinfo from './DATA/data.json';
import Patientinfo from './DATA/patient.json';



export default class HomeScreen extends Component {
 


    render(){

     return (
       <View style={styles.ContainerWhole} >
       <SafeAreaView style={{flex: 1}}>
       
             
             
          <View>
           <View style={{backgroundColor:'#38AB94'}}> 
          <Header name="HOME SCREEN" class= ""/>
            <UnitClerkHeader/>
 
            <Balance/>
            </View>
            <View style={styles.containerForButton}>
            <TouchableOpacity style={styles.button_Side_by_Side}
              onPress={() =>this.props.navigation.navigate("RegistrationScreen")}
              > 
              <Text style={styles.Button_text_styling}>
              REGISTRATION </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button_Side_by_Side}
              onPress={() =>this.props.navigation.navigate("SelectDoc")}
              > 
              <Text style={styles.Button_text_styling}>
              BOOKING </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button_Side_by_Side}
              onPress={() =>this.props.navigation.navigate("SearchPatient")}
              > 
              <Text style={styles.Button_text_styling}>
              SEARCH </Text>
            </TouchableOpacity>
    </View>
    {/* <AppointmentHeading name="UPCOMING APPOINTMENTS" class= "" /> */}

    <View style={{height: 400,marginTop:90,}} >
    <ScrollView style={[styles.containerForScrollView]}> 
    <ScrollView>
        <View style={styles.containerForSelectPatient} >
   
    <TouchableOpacity onPress={() =>this.props.navigation.navigate("PatientDemographics")}>       
   <View style= {{flexDirection: "row"}}>
                    
                    <View style = {{flexDirection: 'row',width: '50%' , alignItems: 'center',justifyContent: 'flex-start'}}>
                    <Text style={{ lineHeight: 20,color: 'black',alignSelf: 'flex-start',fontFamily:"Montserrat-Regular"}}>Dr.Name:{'\n'}Specality:</Text>
                    <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{drinfo.doctorName}{'\n'}{drinfo.specality}</Text>
               
                    </View>


<View style = {{flexDirection: 'row', width: '50%', alignItems: 'center',justifyContent: 'flex-end'}}>
                    <Text style={{lineHeight: 20, color: 'black',alignSelf:'flex-end',fontFamily:"Montserrat-Regular"}}>Patient: {"\n"}Date: </Text>
                      <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{Patientinfo.patientName}{'\n'}{Patientinfo.Date}</Text>
                    </View>
                  </View>
                  </TouchableOpacity>
  

        

            
  


         </View>
    

         </ScrollView>


         <ScrollView>
        <View style={styles.containerForSelectPatient} >
   
    <TouchableOpacity onPress={() =>this.props.navigation.navigate("PatientDemographics")}>       
   <View style= {{flexDirection: "row"}}>
                    
                    <View style = {{flexDirection: 'row',width: '50%' , alignItems: 'center',justifyContent: 'flex-start'}}>
                    <Text style={{ lineHeight: 20,color: 'black',alignSelf: 'flex-start',fontFamily:"Montserrat-Regular"}}>Dr.Name:{'\n'}Specality:</Text>
                    <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{drinfo.doctorName}{'\n'}{drinfo.specality}</Text>
               
                    </View>


<View style = {{flexDirection: 'row', width: '50%', alignItems: 'center',justifyContent: 'flex-end'}}>
                    <Text style={{lineHeight: 20, color: 'black',alignSelf:'flex-end',fontFamily:"Montserrat-Regular"}}>Patient: {"\n"}Date: </Text>
                      <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{Patientinfo.patientName}{'\n'}{Patientinfo.Date}</Text>
                    </View>
                  </View>
                  </TouchableOpacity>
  

        

            
  


         </View>
    

         </ScrollView>




         <ScrollView>
        <View style={styles.containerForSelectPatient} >
   
    <TouchableOpacity onPress={() =>this.props.navigation.navigate("PatientDemographics")}>       
   <View style= {{flexDirection: "row"}}>
                    
                    <View style = {{flexDirection: 'row',width: '50%' , alignItems: 'center',justifyContent: 'flex-start'}}>
                    <Text style={{ lineHeight: 20,color: 'black',alignSelf: 'flex-start',fontFamily:"Montserrat-Regular"}}>Dr.Name:{'\n'}Specality:</Text>
                    <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{drinfo.doctorName}{'\n'}{drinfo.specality}</Text>
               
                    </View>


<View style = {{flexDirection: 'row', width: '50%', alignItems: 'center',justifyContent: 'flex-end'}}>
                    <Text style={{lineHeight: 20, color: 'black',alignSelf:'flex-end',fontFamily:"Montserrat-Regular"}}>Patient: {"\n"}Date: </Text>
                      <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{Patientinfo.patientName}{'\n'}{Patientinfo.Date}</Text>
                    </View>
                  </View>
                  </TouchableOpacity>
  

        

            
  


         </View>
    

         </ScrollView>

         <ScrollView>
        <View style={styles.containerForSelectPatient} >
   
    <TouchableOpacity onPress={() =>this.props.navigation.navigate("PatientDemographics")}>       
   <View style= {{flexDirection: "row"}}>
                    
                    <View style = {{flexDirection: 'row',width: '50%' , alignItems: 'center',justifyContent: 'flex-start'}}>
                    <Text style={{lineHeight: 20,color: 'black',alignSelf: 'flex-start',fontFamily:"Montserrat-Regular"}}>Dr.Name:{'\n'}Specality:</Text>
                    <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{drinfo.doctorName}{'\n'}{drinfo.specality}</Text>
               
                    </View>


<View style = {{flexDirection: 'row', width: '50%', alignItems: 'center',justifyContent: 'flex-end'}}>
                    <Text style={{lineHeight: 20, color: 'black',alignSelf:'flex-end',fontFamily:"Montserrat-Regular"}}>Patient: {"\n"}Date: </Text>
                      <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{Patientinfo.patientName}{'\n'}{Patientinfo.Date}</Text>
                    </View>
                  </View>
                  </TouchableOpacity>
  

        

            
  


         </View>
    

         </ScrollView>

         <ScrollView>
        <View style={styles.containerForSelectPatient} >
   
    <TouchableOpacity onPress={() =>this.props.navigation.navigate("PatientDemographics")}>       
   <View style= {{flexDirection: "row"}}>
                    
                    <View style = {{flexDirection: 'row',width: '50%' , alignItems: 'center',justifyContent: 'flex-start'}}>
                    <Text style={{ lineHeight: 20,color: 'black',alignSelf: 'flex-start',fontFamily:"Montserrat-Regular"}}>Dr.Name:{'\n'}Specality:</Text>
                    <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{drinfo.doctorName}{'\n'}{drinfo.specality}</Text>
               
                    </View>


<View style = {{flexDirection: 'row', width: '50%', alignItems: 'center',justifyContent: 'flex-end'}}>
                    <Text style={{lineHeight: 20, color: 'black',alignSelf:'flex-end',fontFamily:"Montserrat-Regular"}}>Patient: {"\n"}Date: </Text>
                      <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{Patientinfo.patientName}{'\n'}{Patientinfo.Date}</Text>
                    </View>
                  </View>
                  </TouchableOpacity>
  

        

            
  


         </View>
    

         </ScrollView>


         <ScrollView>
        <View style={styles.containerForSelectPatient} >
   
    <TouchableOpacity>       
   <View style= {{flexDirection: "row"}}>
                    
                    <View style = {{flexDirection: 'row',width: '50%' , alignItems: 'center',justifyContent: 'flex-start'}}>
                    <Text style={{ lineHeight: 20,color: 'black',alignSelf: 'flex-start',fontFamily:"Montserrat-Regular"}}>Dr.Name:{'\n'}Specality:</Text>
                    <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{drinfo.doctorName}{'\n'}{drinfo.specality}</Text>
               
                    </View>


<View style = {{flexDirection: 'row', width: '50%', alignItems: 'center',justifyContent: 'flex-end'}}>
                    <Text style={{lineHeight: 20, color: 'black',alignSelf:'flex-end',fontFamily:"Montserrat-Regular"}}>Patient: {"\n"}Date: </Text>
                      <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{Patientinfo.patientName}{'\n'}{Patientinfo.Date}</Text>
                    </View>
                  </View>
                  </TouchableOpacity>
  

        

            
  


         </View>
    

         </ScrollView>

    </ScrollView>
    </View>

     
  
               {/* <TouchableOpacity style={styles.buttonGeneral}
              onPress={() =>this.props.navigation.navigate("RegistrationScreen")}
              > 
              <Text  style={styles.Button_text_styling} >
              NEXT </Text>
            </TouchableOpacity> */}

 
         </View>
         
             </SafeAreaView>
             </View>
      
     );
    }
 } 
