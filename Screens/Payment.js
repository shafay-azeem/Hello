import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput,Image,Pressable,Modal,Alert} from 'react-native';
import styles from './Styles/CompleteStyling';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';
// import GradientButton from 'react-native-gradient-buttons';

import { Picker } from "@react-native-picker/picker";



const Payment = () => { 


   doctorName = "Dr Ahmed Khan";
   specality = "Medicine";
   doctorEmail = "abc@gmail.com"
   doctorPhone = "090078601"
   Fees = 500
   Location = "AKU, Karachi"
   InvoiceID = " BROG - TELE - 006007"
   InvoiceDate = "19/01/2001"
   HospitalName = " Agha Khan Hospital"
   patientName = "Jhon David"

   state={
    PickerSelectedVal : '',
   }
   
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <View style={styles.container}>
          <Header name="PAYMENT" class= ""/>
            <PatientHeader/>
      <View style = {styles.cardView90}>
          {/* <Text style = {styles.headingText}>Payment</Text> */}

          <View style ={{
            width: '90%', flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 30,height: '50%'}}>
          <View style = {{marginLeft: 30}}>
              <Text style = {[{alignSelf:'flex-start',fontSize:25,color:'black'}]}>Profile Image </Text>
              {/* <View style = {{borderRadius: 2, borderColor: 'black', height: 10, width: 20}}> */}
              <View style = {{    width: 35 ,height: 35,}}>
            <Image
              style={ { width: '100%',height: '100%',    alignSelf: 'center',justifyContent:'center',alignItems:'center',marginLeft:110}}
              source={require('../images/doctor.png')}
            />
            </View>
              {/* </View> */}
            </View>
          <View style = {{marginLeft: 30}}>
              <Text style = {[{alignSelf:'flex-start',fontSize:25,color:'black'}]}>Display Name </Text>
              <Text style = {[{alignSelf:'flex-start',marginTop:10,fontWeight:'bold',fontSize:18,color:'#38AB94'}]}>{this.doctorName} </Text>
            </View>
            <View style = {{marginLeft: 30}}>
              <Text style = {[{alignSelf:'flex-start',fontSize:25,color:'black'}]}>Email  </Text>
              <Text style = {[{alignSelf:'flex-start',marginTop:10,fontWeight:'bold',fontSize:18,color:'#38AB94'}]}>{this.doctorEmail} </Text>
            </View>
            <View style = {{marginLeft: 30}}>
              <Text style = {[{alignSelf:'flex-start',fontSize:25,color:'black'}]}>Specality</Text>
              <Text style = {[{alignSelf:'flex-start',marginTop:10,fontWeight:'bold',fontSize:18,color:'#38AB94'}]}>{this.specality} </Text>
            </View>
            <View style = {{marginLeft: 30}}>
              <Text style = {[{alignSelf:'flex-start',fontSize:25,color:'black'}]}>Fees </Text>
              <Text style = {[{alignSelf:'flex-start',marginTop:10,fontWeight:'bold',fontSize:18,color:'#38AB94'}]}>{this.Fees} </Text>
            </View>
            <View style = {{marginLeft: 30}}>
              <Text style = {[{alignSelf:'flex-start',fontSize:25,color:'black'}]}>Location </Text>
              <Text style = {[{alignSelf:'flex-start',marginTop:10,fontWeight:'bold',fontSize:18,color:'#38AB94'}]}>{this.Location} </Text>
            </View>
            </View>  

            <View style = {{height: '60%', width: '80%', flexDirection: 'row'}}>
              <View style = {{width: '50%', height: '80%' }}>
               


                <View style = {{flexDirection: 'row' ,marginTop: 20}}>
                <Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:20,color:'black'}]}>Invoice ID:</Text> 
                <Text style = {[{alignSelf:'flex-start',marginTop:12,fontWeight:'bold',fontSize:18,color:'#38AB94'}]}>{this.InvoiceID}</Text>
                </View>


                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:20,color:'black'}]}>Invoice Date: </Text>
                <Text style = {[{alignSelf:'flex-start',marginTop:12,fontWeight:'bold',fontSize:18,color:'#38AB94'}]}>{this.InvoiceDate}</Text>
                </View>

                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:20,color:'black'}]}>Issued by: </Text>
                <Text style = {[{alignSelf:'flex-start',marginTop:12,fontWeight:'bold',fontSize:18,color:'#38AB94'}]}>{this.HospitalName}</Text>

                </View>

                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:20,color:'black'}]}>Patient Name: </Text>
                <Text style = {[{alignSelf:'flex-start',marginTop:12,fontWeight:'bold',fontSize:18,color:'#38AB94'}]}>{this.patientName}</Text>

                </View>

                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:20,color:'black'}]}>Teleconsultation Payment: </Text>
                <Text style = {[{alignSelf:'flex-start',marginTop:12,fontWeight:'bold',fontSize:18,color:'#38AB94'}]}>PKR 1000</Text>

                </View>


              </View>

              <View style = {{width: '50%', height: '80%' }}>
              <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={{  fontWeight:'bold',margin:10}}>APPLY PROMOCODE</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="APPLY PROMOCODE" 
              />
            
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>


                <View style={{flexDirection:'row'}}> 
                <Text style={{color:'black',fontSize:25,marginTop:75}}>Payment Mode</Text>




<View style={{flex:1,marginTop:60}}>
          <Picker
           selectedValue={this.state.PickerSelectedVal}
           onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} 
           style={{fontWeight:'bold',textAlign:'right',color:'#38AB94', fontSize:25}}>

           <Picker.Item label="Cheque" value="Cheque" />
           <Picker.Item label="Cash" value="Cash" />
        
      

           </Picker> 
           </View>
  </View> 
 {/* </View> */}
 <View style={{flexDirection:'row' }}>
                <Text style = { [{flexDirection: 'row',alignSelf:'flex-start',marginTop:10,fontWeight:'bold',fontSize:25,color:'black'}]}>Amount Payable: </Text>
                <View style = {{flexDirection: 'row', width: 70,borderColor: 'orange' ,borderWidth:2, borderRadius: 15, alignItems: 'center'}}>
            <View style = {styles.dollarIcon}>
            <Image
              style={styles.tinyLogo}
              source={require('../images/dollar.png')}
            />
            </View>
            <Text style= {{textAlign: 'right',color: 'black'}}>1000</Text>
            
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
          
             </View>

      


    </View>
    );
      }

      export default Payment;
