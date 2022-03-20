import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput, FlatList, Image}  from 'react-native';
import styles from './Styles/CompleteStyling';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';



function Item({ item }) {
    // const navigation = useNavigation();   
  
      return (
        <View style={styles.listItem}>
            <View style={{width: '100%', height: '100%'}}>
            <Text style={{fontWeight:"bold", textAlign: 'center'}}>{item.date}</Text>
            <Text style={{fontWeight:"bold", textAlign: 'center'}}>{item.time}</Text>


            </View>  
        
        </View>
      );
    }


export default class AppointmentConfirmation extends Component {
   doctorName = "Dr Ahmed Khan";
   specality = "Medicine";    
   AppointmentDate = 'Tuesday, 07 September 2021';
   AppointmentTime = '05:30pm - 06:00pm'

   constructor(props){
   super(props);
   }
   

  render(){
    doctorName = "Dr Ahmed Khan";
    specality = "Medicine";

    this.state = {
        doctorAppointments:[
            {
                "key": "1",
                "availableSlots":"15",
                "date":"Mon, 06 Dec",
                "time":" 3:20 - 2:20 pm"
            },

            
        ],
    }
    return (
        <View style={styles.container}>
        <Header name="APPOINTMENT CONFIRMATION"/>
         <PatientHeader/>
         <View style = {styles.cardView90}>
           

         <View style= {{backgroundColor: '', height: '100%', width: '70%', alignSelf: 'center',marginTop: 20}}>
             {/* <View style={{alignSelf: 'center', backgroundColor: 'grey', borderRadius: 20, height: '23%', width: '20%'}}>
                <Text> </Text>
             </View> */}
                        <View style = {{flexDirection: 'row', alignItems:'center', justifyContent:'center' }}>
             <View style={{alignSelf: 'center',height: 120, width: 150,borderRadius: 150/2,justifyContent: 'center', }}>
             <Image
              style={styles.bigLogo}
              source={require('../images/doctor.png')}
            />             
            </View>
            <View>
             <Text style= {styles.cardText30}>{this.doctorName}</Text>
             <Text style= {[styles.cardText, {alignSelf: 'flex-start'}]}>{this.specality}</Text>
             </View>
             </View>
            
             <View style = {styles.subCardView}>
               <Text style = {styles.centeredText}>Date: {this.AppointmentDate}</Text>
               <Text style = {styles.centeredText}>Time: {this.AppointmentTime}</Text>
             </View>

             <Text style= {styles.centeredText}>I hearby confirm that I have read and understood everything return in the consent form</Text>

   
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Payment')}
                  style={[styles.smallRoundedBlueRounded, {marginTop: 40},{widht: 40}]}
                >
                  <Text style={[styles.centeredText, {color: 'white'}]}>Confirm Appointment</Text>
                </TouchableOpacity>

                   
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Payment')}
                  style={[styles.smallRoundedBlueRounded, {marginTop: 20},{widht: 40}]}
                >
                  <Text style={[styles.centeredText, {color: 'white'}]}>Cancel Appointment</Text>
                </TouchableOpacity>


              </View>
        </View>

        </View>
      
    );
  }
}