import {SafeAreaView, StyleSheet,ScrollView, Text,Button, View, TouchableOpacity,TextInput,Image} from 'react-native';
import React, {Component, useState} from 'react';


import styles from './Styles/CompleteStyling';
import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import DrAppointmentList from './DrAppointmentList';
import drinfo from './DATA/data.json';
import Patientinfo from './DATA/patient.json';

  



export default class UpcomingAppointmentSchedule extends Component {

    render(){
     return (
       <View style={styles.container}>
       <SafeAreaView style={{flex: 1}}>
       
             
          <View>
          <Header name="UPCOMING APPOINTMENT SCHEDULE" class= ""/>
       <UnitClerkHeader/>
       <PatientHeader/>

         </View>
         <View style={{height: 500,marginTop:20,}} >
    <ScrollView style={[styles.containerForScrollView]}> 
    <ScrollView>
        <View style={styles.containerForSelectPatient} >
   
   
   <View style= {{flexDirection: "row"}}>
   <View style = {{flexDirection: 'row',width: '8%' , alignItems: 'center',justifyContent: 'flex-start'}}>
             <View style={{ width: 40 ,height: 40}}>
                    { <Image
                    style={{   width: '100%',height: '100%',marginTop:6 }}
                    source={require('../images/doctor.png')}
                    /> }
                  </View> 
            </View>

                    
                    <View style = {{flexDirection: 'row', width: '42%' , alignItems: 'center',justifyContent: 'flex-start'}}>
                    <Text style={{ lineHeight: 20,color: 'black',alignSelf: 'flex-start',    fontFamily:"Montserrat-Regular",}}>Dr.Name:{'\n'}Specality:</Text>
                    <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start'    ,fontFamily:"Montserrat-Bold",}}>{drinfo.doctorName}{'\n'}{drinfo.specality}</Text>
        
                    </View>
                 

<View style = {{flexDirection: 'row', width: '50%', alignItems: 'center',justifyContent: 'flex-end'}}>
                    <Text style={{lineHeight: 20, color: 'black',alignSelf:'flex-end',    fontFamily:"Montserrat-Regular"}}>Location: {"\n"}Date: </Text>
                      <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',    fontFamily:"Montserrat-Bold"}}>{drinfo.Location}{'\n'}{drinfo.Date}</Text>
                    </View>
                  </View>



                  <View style= {{flexDirection: "row"}}>
                  
                  <View style= {{flexDirection: "row",width:'50%'}}>
                  <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Payment')}
                  
                >
                  <Text style={{ color:"black",marginTop:20,fontFamily:"Montserrat-Bold"}}>CONFIRMED</Text>
                </TouchableOpacity>
                </View>
                <View style= {{flexDirection: "row",width:'50%',alignSelf:'flex-end',justifyContent:'flex-end'}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Payment')}
                >
                  <Text style={{ textAlign:'right',color:"black",marginTop:20,fontFamily:"Montserrat-Bold"}}>VIEW DETAILS</Text>
                </TouchableOpacity>
                  </View>

                  </View>
            
  


         </View>

         </ScrollView>

         <ScrollView>
        <View style={styles.containerForSelectPatient} >
   
   
   <View style= {{flexDirection: "row"}}>
   <View style = {{flexDirection: 'row',width: '8%' , alignItems: 'center',justifyContent: 'flex-start'}}>
             <View style={{ width: 40 ,height: 40}}>
                    { <Image
                    style={{   width: '100%',height: '100%',marginTop:6 }}
                    source={require('../images/doctor.png')}
                    /> }
                  </View> 
            </View>

                    
                    <View style = {{flexDirection: 'row', width: '42%' , alignItems: 'center',justifyContent: 'flex-start'}}>
                    <Text style={{ lineHeight: 20,color: 'black',alignSelf: 'flex-start',    fontFamily:"Montserrat-Regular",}}>Dr.Name:{'\n'}Specality:</Text>
                    <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start'    ,fontFamily:"Montserrat-Bold",}}>{drinfo.doctorName}{'\n'}{drinfo.specality}</Text>
        
                    </View>
                 

<View style = {{flexDirection: 'row', width: '50%', alignItems: 'center',justifyContent: 'flex-end'}}>
                    <Text style={{lineHeight: 20, color: 'black',alignSelf:'flex-end',    fontFamily:"Montserrat-Regular"}}>Location: {"\n"}Date: </Text>
                      <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',    fontFamily:"Montserrat-Bold"}}>{drinfo.Location}{'\n'}{drinfo.Date}</Text>
                    </View>
                  </View>



                  <View style= {{flexDirection: "row"}}>
                  
                  <View style= {{flexDirection: "row",width:'50%'}}>
                  <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Payment')}
                  
                >
                  <Text style={{ color:"black",marginTop:20,fontFamily:"Montserrat-Bold"}}>CONFIRMED</Text>
                </TouchableOpacity>
                </View>
                <View style= {{flexDirection: "row",width:'50%',alignSelf:'flex-end',justifyContent:'flex-end'}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Payment')}
                >
                  <Text style={{ textAlign:'right',color:"black",marginTop:20,fontFamily:"Montserrat-Bold"}}>VIEW DETAILS</Text>
                </TouchableOpacity>
                  </View>

                  </View>
            
  


         </View>
    

         </ScrollView>


         <ScrollView>
        <View style={styles.containerForSelectPatient} >
   
   
   <View style= {{flexDirection: "row"}}>
   <View style = {{flexDirection: 'row',width: '8%' , alignItems: 'center',justifyContent: 'flex-start'}}>
             <View style={{ width: 40 ,height: 40}}>
                    { <Image
                    style={{   width: '100%',height: '100%',marginTop:6 }}
                    source={require('../images/doctor.png')}
                    /> }
                  </View> 
            </View>

                    
                    <View style = {{flexDirection: 'row', width: '42%' , alignItems: 'center',justifyContent: 'flex-start'}}>
                    <Text style={{ lineHeight: 20,color: 'black',alignSelf: 'flex-start',    fontFamily:"Montserrat-Regular",}}>Dr.Name:{'\n'}Specality:</Text>
                    <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start'    ,fontFamily:"Montserrat-Bold",}}>{drinfo.doctorName}{'\n'}{drinfo.specality}</Text>
        
                    </View>
                 

<View style = {{flexDirection: 'row', width: '50%', alignItems: 'center',justifyContent: 'flex-end'}}>
                    <Text style={{lineHeight: 20, color: 'black',alignSelf:'flex-end',    fontFamily:"Montserrat-Regular"}}>Location: {"\n"}Date: </Text>
                      <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',    fontFamily:"Montserrat-Bold"}}>{drinfo.Location}{'\n'}{drinfo.Date}</Text>
                    </View>
                  </View>



                  <View style= {{flexDirection: "row"}}>
                  
                  <View style= {{flexDirection: "row",width:'50%'}}>
                  <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Payment')}
                  
                >
                  <Text style={{ color:"black",marginTop:20,fontFamily:"Montserrat-Bold"}}>CONFIRMED</Text>
                </TouchableOpacity>
                </View>
                <View style= {{flexDirection: "row",width:'50%',alignSelf:'flex-end',justifyContent:'flex-end'}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Payment')}
                >
                  <Text style={{ textAlign:'right',color:"black",marginTop:20,fontFamily:"Montserrat-Bold"}}>VIEW DETAILS</Text>
                </TouchableOpacity>
                  </View>

                  </View>
            
  


         </View>
    

         </ScrollView>



         <ScrollView>
        <View style={styles.containerForSelectPatient} >
   
   
   <View style= {{flexDirection: "row"}}>
   <View style = {{flexDirection: 'row',width: '8%' , alignItems: 'center',justifyContent: 'flex-start'}}>
             <View style={{ width: 40 ,height: 40}}>
                    { <Image
                    style={{   width: '100%',height: '100%',marginTop:6 }}
                    source={require('../images/doctor.png')}
                    /> }
                  </View> 
            </View>

                    
                    <View style = {{flexDirection: 'row', width: '42%' , alignItems: 'center',justifyContent: 'flex-start'}}>
                    <Text style={{ lineHeight: 20,color: 'black',alignSelf: 'flex-start',    fontFamily:"Montserrat-Regular",}}>Dr.Name:{'\n'}Specality:</Text>
                    <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start'    ,fontFamily:"Montserrat-Bold",}}>{drinfo.doctorName}{'\n'}{drinfo.specality}</Text>
        
                    </View>
                 

<View style = {{flexDirection: 'row', width: '50%', alignItems: 'center',justifyContent: 'flex-end'}}>
                    <Text style={{lineHeight: 20, color: 'black',alignSelf:'flex-end',    fontFamily:"Montserrat-Regular"}}>Location: {"\n"}Date: </Text>
                      <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',    fontFamily:"Montserrat-Bold"}}>{drinfo.Location}{'\n'}{drinfo.Date}</Text>
                    </View>
                  </View>



                  <View style= {{flexDirection: "row"}}>
                  
                  <View style= {{flexDirection: "row",width:'50%'}}>
                  <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Payment')}
                  
                >
                  <Text style={{ color:"black",marginTop:20,fontFamily:"Montserrat-Bold"}}>CONFIRMED</Text>
                </TouchableOpacity>
                </View>
                <View style= {{flexDirection: "row",width:'50%',alignSelf:'flex-end',justifyContent:'flex-end'}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Payment')}
                >
                  <Text style={{ textAlign:'right',color:"black",marginTop:20,fontFamily:"Montserrat-Bold"}}>VIEW DETAILS</Text>
                </TouchableOpacity>
                  </View>

                  </View>
            
  


         </View>
    

         </ScrollView>



         <ScrollView>
        <View style={styles.containerForSelectPatient} >
   
   
   <View style= {{flexDirection: "row"}}>
   <View style = {{flexDirection: 'row',width: '8%' , alignItems: 'center',justifyContent: 'flex-start'}}>
             <View style={{ width: 40 ,height: 40}}>
                    { <Image
                    style={{   width: '100%',height: '100%',marginTop:6 }}
                    source={require('../images/doctor.png')}
                    /> }
                  </View> 
            </View>

                    
                    <View style = {{flexDirection: 'row', width: '42%' , alignItems: 'center',justifyContent: 'flex-start'}}>
                    <Text style={{ lineHeight: 20,color: 'black',alignSelf: 'flex-start',    fontFamily:"Montserrat-Regular",}}>Dr.Name:{'\n'}Specality:</Text>
                    <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start'    ,fontFamily:"Montserrat-Bold",}}>{drinfo.doctorName}{'\n'}{drinfo.specality}</Text>
        
                    </View>
                 

<View style = {{flexDirection: 'row', width: '50%', alignItems: 'center',justifyContent: 'flex-end'}}>
                    <Text style={{lineHeight: 20, color: 'black',alignSelf:'flex-end',    fontFamily:"Montserrat-Regular"}}>Location: {"\n"}Date: </Text>
                      <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',    fontFamily:"Montserrat-Bold"}}>{drinfo.Location}{'\n'}{drinfo.Date}</Text>
                    </View>
                  </View>



                  <View style= {{flexDirection: "row"}}>
                  
                  <View style= {{flexDirection: "row",width:'50%'}}>
                  <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Payment')}
                  
                >
                  <Text style={{color:"black",marginTop:20,fontFamily:"Montserrat-Bold"}}>CONFIRMED</Text>
                </TouchableOpacity>
                </View>
                <View style= {{flexDirection: "row",width:'50%',alignSelf:'flex-end',justifyContent:'flex-end'}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Payment')}
                >
                  <Text style={{ textAlign:'right',color:"black",marginTop:20,fontFamily:"Montserrat-Bold"}}>VIEW DETAILS</Text>
                </TouchableOpacity>
                  </View>

                  </View>
            
  


         </View>
    

         </ScrollView>


         <ScrollView>
        <View style={styles.containerForSelectPatient} >
   
   
   <View style= {{flexDirection: "row"}}>
   <View style = {{flexDirection: 'row',width: '8%' , alignItems: 'center',justifyContent: 'flex-start'}}>
             <View style={{ width: 40 ,height: 40}}>
                    { <Image
                    style={{   width: '100%',height: '100%',marginTop:6 }}
                    source={require('../images/doctor.png')}
                    /> }
                  </View> 
            </View>

                    
                    <View style = {{flexDirection: 'row', width: '42%' , alignItems: 'center',justifyContent: 'flex-start'}}>
                    <Text style={{ lineHeight: 20,color: 'black',alignSelf: 'flex-start',    fontFamily:"Montserrat-Regular",}}>Dr.Name:{'\n'}Specality:</Text>
                    <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start'    ,fontFamily:"Montserrat-Bold",}}>{drinfo.doctorName}{'\n'}{drinfo.specality}</Text>
        
                    </View>
                 

<View style = {{flexDirection: 'row', width: '50%', alignItems: 'center',justifyContent: 'flex-end'}}>
                    <Text style={{lineHeight: 20, color: 'black',alignSelf:'flex-end',    fontFamily:"Montserrat-Regular"}}>Location: {"\n"}Date: </Text>
                      <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',    fontFamily:"Montserrat-Bold"}}>{drinfo.Location}{'\n'}{drinfo.Date}</Text>
                    </View>
                  </View>



                  <View style= {{flexDirection: "row"}}>
                  
                  <View style= {{flexDirection: "row",width:'50%'}}>
                  <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Payment')}
                  
                >
                  <Text style={{ color:"black",marginTop:20,fontFamily:"Montserrat-Bold"}}>CONFIRMED</Text>
                </TouchableOpacity>
                </View>
                <View style= {{flexDirection: "row",width:'50%',alignSelf:'flex-end',justifyContent:'flex-end'}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Payment')}
                >
                  <Text style={{ textAlign:'right',color:"black",marginTop:20,fontFamily:"Montserrat-Bold"}}>VIEW DETAILS</Text>
                </TouchableOpacity>
                  </View>

                  </View>
            
  


         </View>
    

         </ScrollView>

    </ScrollView>
    </View>

     
  
   
 
     
    
           
             </SafeAreaView>
             </View>
      
     );
    }
 } 

 