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
          <Header name="PAYMENT SUCCESSFULL" class= ""/>
          <UnitClerkHeader/>
            <PatientHeader/>
      <View style = {styles.cardView90}>
         
        <View style={{width:'100%'}}>
        <View style={{backgroundColor:'#FFFFFF',padding:20,height:'20%',marginBottom:40}} >
            <View style= {{flexDirection: "row",justifyContent:'center',padding:10}}>
   
          

            <View style = {{flexDirection: 'column' ,alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20,  textDecorationLine: 'underline',fontFamily:"Montserrat-Regular"}}>Profile Image </Text>
 
            <View style={{ width: 40 ,height: 40}}>
                    { <Image
                    style={{   width: '100%',height: '100%',alignSelf: 'center'}}
                    source={require('../images/doctor.png')}
                    /> }
                  </View>
            </View>

            <View style = {{flexDirection: 'column' ,alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20,  textDecorationLine: 'underline',fontFamily:"Montserrat-Regular"}}>DrName </Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontSize:20,color:'#38AB94',marginRight:20,fontFamily:"Montserrat-SemiBold"}}>{drinfo.doctorName}</Text>
       
            </View>
            <View style = {{flexDirection: 'column' ,alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20,  textDecorationLine: 'underline',fontFamily:"Montserrat-Regular"}}>Speciality </Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontSize:20,color:'#38AB94',marginRight:20,fontFamily:"Montserrat-SemiBold"}}>{drinfo.specality}</Text>
       
            </View>
          
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20,  textDecorationLine: 'underline',fontFamily:"Montserrat-Regular"}}>Email</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontSize:20,color:'#38AB94',marginRight:20,fontFamily:"Montserrat-SemiBold"}}>{drinfo.doctorEmail}</Text>
       
            </View>
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20,  textDecorationLine: 'underline',fontFamily:"Montserrat-Regular"}}>PhoneNo</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontSize:20,color:'#38AB94',marginRight:20,fontFamily:"Montserrat-SemiBold"}}>{drinfo.doctorPhone}</Text>
       
            </View>
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20 , textDecorationLine: 'underline',fontFamily:"Montserrat-Regular"}}>Fees</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontSize:20,color:'#38AB94',marginRight:20,fontFamily:"Montserrat-SemiBold"}}>{drinfo.Fees}</Text>
       
            </View>
        



          </View>
          </View>
    


  

            <View style = {{width: '80%', flexDirection: 'row',alignSelf:'center'}}>

           
               
  <View style={{width:'50%',justifyContent:'center',alignSelf:'center',alignItems:'flex-start'}}>

                <View style = {{flexDirection: 'row' ,marginTop: 20}}>
                <Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:20,color:'black',fontFamily:"Montserrat-Regular"}]}>Invoice ID: </Text> 
                <Text style = {[{alignSelf:'flex-start',marginTop:12,fontSize:18,color:'#38AB94',fontFamily:"Montserrat-SemiBold"}]}>{invoice['InvoiceID '] }</Text>
                </View>


                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:20,color:'black',fontFamily:"Montserrat-Regular"}]}>Invoice Date: </Text>
                <Text style = {[{marginTop:12,fontSize:18,color:'#38AB94',fontFamily:"Montserrat-SemiBold"}]}>{invoice['InvoiceDate'] }</Text>
                </View>

                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:20,color:'black',fontFamily:"Montserrat-Regular"}]}>Issued by: </Text>
                <Text style = {[{marginTop:12,fontSize:18,color:'#38AB94',fontFamily:"Montserrat-SemiBold"}]}>{invoice['IssuedBy '] }</Text>

                </View>

                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:20,color:'black',fontFamily:"Montserrat-Regular"}]}>Patient Name: </Text>
                <Text style = {[{marginTop:12,fontSize:18,color:'#38AB94',fontFamily:"Montserrat-SemiBold"}]}>{invoice.patientName }</Text>

                </View>

                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{marginTop:10,fontSize:20,color:'black',fontFamily:"Montserrat-Regular"}]}>Teleconsultation Payment: </Text>
                <Text style = {[{marginTop:12,fontSize:18,color:'#38AB94',fontFamily:"Montserrat-SemiBold"}]}>{invoice.TeleconsultationPayment }</Text>

                </View>

                </View>

              <View style = {{width: '50%',justifyContent:'center'}}>

              


 <View style={{flexDirection:'row'}}>
                <Text style = { [{flexDirection: 'row',alignSelf:'flex-end',fontFamily:"Montserrat-Regular",fontSize:25,color:'black'}]}>Amount Payable: </Text>
                <View style = {{flexDirection: 'row',borderColor: 'orange' ,borderWidth:2, borderRadius: 15, alignItems: 'center',}}>
            <View style = {styles.dollarIcon}>
            <Image
              style={styles.tinyLogo}
              source={require('../images/dollar.png')}
            />
            </View>
            <Text style= {{textAlign: 'right',color: 'black',fontFamily:"Montserrat-SemiBold",padding:5,fontSize:15}}>{invoice.TeleconsultationPayment }</Text>
            
            </View>
            
            </View>

                


              </View>
      </View>
           
    

                </View>

                <TouchableOpacity style={[styles.buttonGeneral,{marginTop:30}]}
              onPress={() =>this.props.navigation.navigate("PatientDemographics")}
              > 
              <Text style={styles.Button_text_styling}>
              PRINTED INVOICE</Text>
            </TouchableOpacity>
                   </View>

    </View>
    );
      }
    }

