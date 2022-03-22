import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput,Image,Pressable,Modal,Alert,Button} from 'react-native';
import styles from './Styles/CompleteStyling';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';
import invoice from './DATA/Invoice.json';
import drinfo from './DATA/data.json';
import { Picker } from "@react-native-picker/picker";

export default class PaymentSuccessfull extends Component {
  


   state={
    PickerSelectedVal : '',
    isVisible: false, //state of modal default false  
   }
   
    


   render(){
    return (
      <View style={styles.container}>
          <Header name="PAYMENT" class= ""/>
          <UnitClerkHeader/>
            <PatientHeader/>
      <View style = {styles.cardView90}>
         
        <View style={{width:'100%'}}>
        <View style={{backgroundColor:'#FFFFFF',padding:20,height:'20%',marginBottom:40}} >
            <View style= {{flexDirection: "row",justifyContent:'center',padding:10}}>
   
          

            <View style = {{flexDirection: 'column' ,alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20,  textDecorationLine: 'underline'}}>Profile Image </Text>
 
            <View style={{ width: 40 ,height: 40}}>
                    { <Image
                    style={{   width: '100%',height: '100%',alignSelf: 'center'}}
                    source={require('../images/doctor.png')}
                    /> }
                  </View>
            </View>

            <View style = {{flexDirection: 'column' ,alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20,  textDecorationLine: 'underline'}}>DrName </Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontWeight:'bold',fontSize:20,color:'#38AB94',marginRight:20}}>{drinfo.doctorName}</Text>
       
            </View>
            <View style = {{flexDirection: 'column' ,alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20,  textDecorationLine: 'underline'}}>Speciality </Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontWeight:'bold',fontSize:20,color:'#38AB94',marginRight:20}}>{drinfo.specality}</Text>
       
            </View>
          
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20,  textDecorationLine: 'underline'}}>Email</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontWeight:'bold',fontSize:20,color:'#38AB94',marginRight:20}}>{drinfo.doctorEmail}</Text>
       
            </View>
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20,  textDecorationLine: 'underline'}}>PhoneNo</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontWeight:'bold',fontSize:20,color:'#38AB94',marginRight:20}}>{drinfo.doctorPhone}</Text>
       
            </View>
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20 , textDecorationLine: 'underline'}}>Fees</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontWeight:'bold',fontSize:20,color:'#38AB94',marginRight:20}}>{drinfo.Fees}</Text>
       
            </View>
        



          </View>
          </View>
    


  

            <View style = {{width: '80%', flexDirection: 'row',alignSelf:'center'}}>

           
               
  <View style={{width:'50%',justifyContent:'center',alignSelf:'center',alignItems:'flex-start'}}>

                <View style = {{flexDirection: 'row' ,marginTop: 20}}>
                <Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:20,color:'black'}]}>Invoice ID: </Text> 
                <Text style = {[{alignSelf:'flex-start',marginTop:12,fontWeight:'bold',fontSize:18,color:'#38AB94'}]}>{invoice['InvoiceID '] }</Text>
                </View>


                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:20,color:'black'}]}>Invoice Date: </Text>
                <Text style = {[{marginTop:12,fontWeight:'bold',fontSize:18,color:'#38AB94'}]}>{invoice['InvoiceDate'] }</Text>
                </View>

                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:20,color:'black'}]}>Issued by: </Text>
                <Text style = {[{marginTop:12,fontWeight:'bold',fontSize:18,color:'#38AB94'}]}>{invoice['IssuedBy '] }</Text>

                </View>

                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:20,color:'black'}]}>Patient Name: </Text>
                <Text style = {[{marginTop:12,fontWeight:'bold',fontSize:18,color:'#38AB94'}]}>{invoice.patientName }</Text>

                </View>

                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:20,color:'black'}]}>Teleconsultation Payment: </Text>
                <Text style = {[{marginTop:12,fontWeight:'bold',fontSize:18,color:'#38AB94'}]}>{invoice.TeleconsultationPayment }</Text>

                </View>

                </View>

              <View style = {{width: '50%',justifyContent:'center'}}>

              


 <View style={{flexDirection:'row'}}>
                <Text style = { [{flexDirection: 'row',alignSelf:'flex-end',fontWeight:'bold',fontSize:25,color:'black'}]}>Amount Payable: </Text>
                <View style = {{flexDirection: 'row',borderColor: 'orange' ,borderWidth:2, borderRadius: 15, alignItems: 'center'}}>
            <View style = {styles.dollarIcon}>
            <Image
              style={styles.tinyLogo}
              source={require('../images/dollar.png')}
            />
            </View>
            <Text style= {{textAlign: 'right',color: 'black'}}>{invoice.TeleconsultationPayment }</Text>
            
            </View>
            
            </View>

                


              </View>
      </View>
           
    
      <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('ConsultationPayment')}
                  style={styles.smallRoundedBlueRounded}
                >
                  <Text style={styles.Button_text_styling}>PAY</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('ConsultationPayment')}
                  style={styles.smallRoundedBlueRounded}
                >
                  <Text style={styles.Button_text_styling}>PAY</Text>
                </TouchableOpacity>
      
                </View>
                   </View>

    </View>
    );
      }
    }

