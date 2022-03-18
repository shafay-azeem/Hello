

import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput, StyleSheet, FlatList, Image,Button}  from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './Styles/CompleteStyling';
import drinfo from './DATA/data.json';
import Patientinfo from './DATA/patient.json';



export default class DrAppointmentList extends Component {
    doctorName = "Dr. Ahmed Khan";
    specality = "MBBS"; 


  //  constructor(props){
  //  super(props);
  //  }


   

  render(){


    return (
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
                    <Text style={{marginTop:10, lineHeight: 20,color: 'black',alignSelf: 'flex-start'}}>Dr.Name:{'\n'}Specality:</Text>
                    <Text style={{marginTop:11,color: 'black',lineHeight: 20, alignSelf: 'flex-start',fontWeight:'bold'}}>{drinfo.doctorName}{'\n'}{drinfo.specality}</Text>
        
                    </View>
                 

<View style = {{flexDirection: 'row', width: '50%', alignItems: 'center',justifyContent: 'flex-end'}}>
                    <Text style={{marginTop:10 ,lineHeight: 20, color: 'black',alignSelf:'flex-end'}}>Location: {"\n"}Date: </Text>
                      <Text style={{marginTop:11,color: 'black',lineHeight: 20, alignSelf: 'flex-start',fontWeight:'bold'}}>{drinfo.Location}{'\n'}{drinfo.Date}</Text>
                    </View>
                  </View>



                  <View style= {{flexDirection: "row"}}>
                  
                  <View style= {{flexDirection: "row",width:'50%'}}>
                  <TouchableOpacity
                //   onPress={() => this.props.navigation.navigate('Payment')}
                  
                >
                  <Text style={{ color: 'black',marginTop:20,fontWeight:'bold'}}>CONFIRMED</Text>
                </TouchableOpacity>
                </View>
                <View style= {{flexDirection: "row",width:'50%'}}>
                <TouchableOpacity
                //   onPress={() => this.props.navigation.navigate('Payment')}
                >
                  <Text style={{marginLeft:250,alignSelf:'flex-end',flex :1 ,alignItems:'flex-end', textAlign:'right',justifyContent:'flex-end', color: 'black',marginTop:20,fontWeight:'bold'}}>VIEW DETAILS</Text>
                </TouchableOpacity>
                  </View>

                  </View>

            
  


         </View>
    

         </ScrollView>
      
    );
  }
}

