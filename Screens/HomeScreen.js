import {SafeAreaView, StyleSheet,ScrollView, Text,Button, View, TouchableOpacity,TextInput,Image,Modal} from 'react-native';
import React, {Component, useState} from 'react';


import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import AppointmentHeading from './AllHeaders/AppointmentHeading';
import PatientDoc from './PatientDoc';
import styles from './Styles/CompleteStyling';
import Balance from './Balance';
import drinfo from './DATA/data.json';
import Patientinfo from './DATA/patient.json';
import balanceinfo from './DATA/balance.json';
import doctorApp from './DATA/doctorApp.json';


export default class HomeScreen extends Component {
 
  state={
    PickerSelectedVal : '',
    modalVisible: false
   }
   
    
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }



    render(){
      const { modalVisible } = this.state;
     return (
       <View style={styles.ContainerWhole} >
       <SafeAreaView style={{flex: 1}}>
       <Modal  
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <View style = {{flexDirection: 'row', alignItems: 'center',justifyContent: 'center'}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontFamily:"Montserrat-Regular",fontSize:25}}>TODAY'S DATE: </Text>
            <Text style={{color:"#38AB94",alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold",fontSize:25}}>{doctorApp[0].date}</Text>
       
            </View>
            <Text style={[{ fontFamily:"Montserrat-Bold",
        marginTop:30,
        color:"#30A28C",fontSize:15}]}>ENTER OPENING BALANCE</Text>
            <TextInput  
              style={[styles.Edittext,{width:250}]}
              placeholder="Enter Opening Bal" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({OpeningBal:text})}/>
                <TouchableOpacity
                style={[styles.smallRoundedBlueRounded,{width:'60%',marginTop:10}]}
          
                onPress={() => this.setModalVisible(!modalVisible)}
              >
               <Text style={styles.Button_text_styling}>SUBMIT</Text>
                </TouchableOpacity>
              {/* <TouchableOpacity
                style={[styles.smallRoundedBlueRounded,{width:'60%',marginTop:10}]}
          
                onPress={() => this.setModalVisible(!modalVisible)}
              >
               <Text style={styles.Button_text_styling}>CANCEL</Text>
                </TouchableOpacity> */}
            </View>
          </View>
        </Modal>
  
       
             
             
          <View>
           <View style={{backgroundColor:'#38AB94'}}> 
          <Header name="HOME SCREEN" class= ""/>
            <UnitClerkHeader/>
 
            <View style= {styles.headerbalance}>
          
                <View style = {styles.OpeningBalView}>
                <TouchableOpacity
            onPress={() =>this.props.navigation.navigate("HomeScreen")}>
                    <View style={{flexDirection: 'column',justifyContent:'center',marginTop:7}}>
                    <View style={{alignSelf:'center',marginLeft:100}}>
           
                    <Text style={styles.TextForBalance}
                    onPress={() => this.setModalVisible(true)}>Opening Balance </Text>
                    </View>
                    
                    <View style={{marginLeft:100,alignItems:'center'}}>
                    <View style={{flexDirection: 'row'}}>
  
          
                     <TextInput  
           style={[styles.Edittext,{width:200}]}
              placeholder="Amount" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({Amount:text})}/>
             
                    </View>
                    </View>
                   
                    </View>
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection: 'row', width: '33%' , alignItems: 'center',justifyContent: 'center',marginLeft:50}}>
                <View style={{flexDirection: 'column',justifyContent:'center'}}>
                    <View style={{alignSelf:'center'}}>
                <Text style={styles.TextForBalance}>Balance</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <View style={{flexDirection: 'row'}}>
                    
                   <TextInput  
           style={[styles.Edittext,{width:200}]}
              placeholder="Amount" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({Amount:text})}/>
                    </View>
                    </View>
                    </View>
                </View>
                <View style = {{flexDirection: 'row', width: '33%' , alignItems: 'center',justifyContent: 'center',borderTopRightRadius:100,borderBottomRightRadius:100}}>
                <View style={{flexDirection: 'column',justifyContent:'center'}}>
                    <View style={{alignSelf:'center'}}>
                <Text style={styles.TextForBalance}>Closing Balance</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <View style={{flexDirection: 'row'}}>
                     {/* <View style={{ width: 40 ,height: 40,marginRight: 6}}>
                     <Image
                     style={{   width: '100%',height: '100%',alignSelf: 'center'}}
                     source={require('../images/dollar.png')}
                    
                     />
                   </View> */}
                   <TextInput  
           style={[styles.Edittext,{width:200}]}
              placeholder="Amount" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({Amount:text})}/>
                    </View>
                    </View>
                    </View>
                </View>
 
         </View>
            </View>
            <View style={styles.containerForButton}>
            <TouchableOpacity style={styles.button_Side_by_Side}
              onPress={() =>this.props.navigation.navigate("RegistrationScreen")}
              > 
              <Text style={styles.Button_text_styling}>
              REGISTRATION NEW PATIENT</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button_Side_by_Side}
              onPress={() =>this.props.navigation.navigate("CreateSlot")}
              > 
              <Text style={styles.Button_text_styling}>
              BOOKING MANAGEMENT</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button_Side_by_Side}
              onPress={() =>this.props.navigation.navigate("SearchPatient")}
              > 
              <Text style={styles.Button_text_styling}>
              SEARCH PATIENT</Text>
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

     
  
   
 
         </View>
         
             </SafeAreaView>
             </View>
      
     );
    }
 } 
