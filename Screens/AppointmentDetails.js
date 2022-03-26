import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput, FlatList, Image}  from 'react-native';
import styles from './Styles/CompleteStyling';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import doctorApp from './DATA/doctorApp.json';
import paymentStatus from './DATA/paymentStatus.json';



function Item({ item }) {
    // const navigation = useNavigation();   
  
      return (
        <ScrollView>
          <SafeAreaView>
        <View style={styles.listItem}>
            <View style={{width: '100%', height: '100%'}}>
            <Text style={{ textAlign: 'center',fontFamily:"Montserrat-Regular"}}>{item.date}</Text>
            <Text style={{ textAlign: 'center',fontFamily:"Montserrat-Regular"}}>{item.time}</Text>


            </View>  
        
        </View>
        </SafeAreaView>
        </ScrollView>
      );
    }


export default class AppointmentDetails extends Component {
   doctorName = "Dr Ahmed Khan";
   specality = "Medicine";    
   AppointmentDate = 'Tuesday, 07 September 2021';
   AppointmentTime = '05:30pm - 06:00pm'

   constructor(props){
   super(props);
   }
   state={
    Username:"",
    password:""
}


  render(){
    doctorName = "Dr Ahmed Khan";
    specality = "Medicine";

    return (
        <View style={styles.container}>
        <Header name="APPOINTMENT DETAILS"/>
        <UnitClerkHeader/>
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
               <Text style = {styles.centeredText}>Date: {doctorApp[0].date}</Text>
               <Text style = {styles.centeredText}>Time: {doctorApp[0].time}</Text>
             </View>

             

    
    
             <TouchableOpacity style={styles.buttonGeneral}
              onPress={() =>this.props.navigation.navigate("Payment")}
              > 
              <Text style={styles.Button_text_styling}>
              PAY NOW</Text>
            </TouchableOpacity>
                   
     

          


              </View>
        </View>
  
        </View>
      
    );
  }
}

