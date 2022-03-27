import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput,Image,Pressable,Modal,Alert,Button} from 'react-native';
import styles from './Styles/CompleteStyling';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';
import invoice from './DATA/Invoice.json';
import drinfo from './DATA/data.json';
import { Picker } from "@react-native-picker/picker";

export default class Payment extends Component {
  


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
      <View style={styles.container}>
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
            <Text style={{  fontWeight:'bold', marginTop:10}}>ENTER PROMOCODE</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="ENTER PROMOCODE" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({ENTER_PROMOCODE:text})}/>
                <TouchableOpacity
                style={[styles.smallRoundedBlueRounded,{width:'60%',marginTop:10}]}
          
                onPress={() => this.setModalVisible(!modalVisible)}
              >
               <Text style={styles.Button_text_styling}>DONE</Text>
                </TouchableOpacity>
              <TouchableOpacity
                style={[styles.smallRoundedBlueRounded,{width:'60%',marginTop:10}]}
          
                onPress={() => this.setModalVisible(!modalVisible)}
              >
               <Text style={styles.Button_text_styling}>CANCEL</Text>
                </TouchableOpacity>
            </View>
          </View>
        </Modal>
  


          <Header name="PAYMENT" class= ""/>
          <UnitClerkHeader/>
            <PatientHeader/>
      <View style = {styles.cardView90}>
         
        <View style={{width:'100%'}}>
        <View style={{backgroundColor:'#FFFFFF',padding:20,height:'20%'}} >
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
            <Text numberOfLines={1} style={{color: 'black', alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold",fontSize:20,color:'#38AB94',marginRight:20}}>{drinfo.doctorName}</Text>
       
            </View>
            <View style = {{flexDirection: 'column' ,alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20,  textDecorationLine: 'underline',fontFamily:"Montserrat-Regular"}}>Speciality </Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold",fontSize:20,color:'#38AB94',marginRight:20}}>{drinfo.specality}</Text>
       
            </View>
          
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20,  textDecorationLine: 'underline',fontFamily:"Montserrat-Regular"}}>Email</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold",fontSize:20,color:'#38AB94',marginRight:20}}>{drinfo.doctorEmail}</Text>
       
            </View>
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20,  textDecorationLine: 'underline',fontFamily:"Montserrat-Regular"}}>PhoneNo</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold",fontSize:20,color:'#38AB94',marginRight:20}}>{drinfo.doctorPhone}</Text>
       
            </View>
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20 , textDecorationLine: 'underline',fontFamily:"Montserrat-Regular"}}>Fees</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold",fontSize:20,color:'#38AB94',marginRight:20}}>{drinfo.Fees}</Text>
       
            </View>
         







          </View>
          </View>
    


  

            <View style = {{height: '60%', width: '80%', flexDirection: 'row',alignSelf:'center',marginTop:20}}>

            
              <View style = {{width: '50%' ,flex:1,justifyContent:'center'}}>
               


                <View style = {{flexDirection: 'row' ,marginTop: 20}}>
                <Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:20,color:'black',fontFamily:"Montserrat-Regular"}]}>Invoice ID: </Text> 
                <Text style = {[{alignSelf:'flex-start',marginTop:12,fontFamily:"Montserrat-SemiBold",fontSize:18,color:'#38AB94'}]}>{invoice['InvoiceID '] }</Text>
                </View>


                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:20,color:'black',fontFamily:"Montserrat-Regular"}]}>Invoice Date: </Text>
                <Text style = {[{alignSelf:'flex-start',marginTop:12,fontFamily:"Montserrat-SemiBold",fontSize:18,color:'#38AB94'}]}>{invoice['InvoiceDate'] }</Text>
                </View>

                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:20,color:'black',fontFamily:"Montserrat-Regular"}]}>Issued by: </Text>
                <Text style = {[{alignSelf:'flex-start',marginTop:12,fontFamily:"Montserrat-SemiBold",fontSize:18,color:'#38AB94'}]}>{invoice['IssuedBy '] }</Text>

                </View>

                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:20,color:'black',fontFamily:"Montserrat-Regular"}]}>Patient Name: </Text>
                <Text style = {[{alignSelf:'flex-start',marginTop:12,fontFamily:"Montserrat-SemiBold",fontSize:18,color:'#38AB94'}]}>{invoice.patientName }</Text>

                </View>

                <View style = {{flexDirection: 'row'}}>
                <Text style = {[{alignSelf:'flex-start',marginTop:10,fontSize:20,color:'black',fontFamily:"Montserrat-Regular"}]}>Teleconsultation Payment: </Text>
                <Text style = {[{alignSelf:'flex-start',marginTop:12,fontFamily:"Montserrat-SemiBold",fontSize:18,color:'#38AB94'}]}>{invoice.TeleconsultationPayment }</Text>

                </View>


              </View>

              <View style = {{width: '50%' ,flex:1}}>

                
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Payment')}
                  style={[styles.smallRoundedBlueRounded,{width:'60%',marginTop:10}]}
                >
                   <Text style={styles.Button_text_styling}
                    onPress={() => this.setModalVisible(true)}
                            >APPLY VOUCHER</Text>
                </TouchableOpacity>

 


                <View style={{flexDirection:'row'}}> 
                <Text style={{color:'black',fontSize:25,marginTop:30,fontFamily:"Montserrat-Regular"}}>Payment Mode</Text>




<View style={{flex:1,marginTop:20}}>
<View   style={{   borderColor: "#30A28C",
        backgroundColor:'#F7F7F7',     
           borderWidth: 1,  borderRadius: 15,  marginHorizontal:20,   marginTop:2, height:50}}> 
          <Picker
           selectedValue={this.state.PickerSelectedVal}
           onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} 
           style={{fontWeight:'bold',textAlign:'right',color:'#38AB94', fontSize:25}}>

           <Picker.Item color='#30A28C' label="Cheque" value="Cheque" />
           <Picker.Item color='#30A28C' label="Cash" value="Cash" />
        
      

           </Picker> 
           </View>
                
     </View>
  </View> 
 {/* </View> */}
 <View style={{flexDirection:'row' }}>
                <Text style = { [{flexDirection: 'row',alignSelf:'flex-start',marginTop:15,fontFamily:"Montserrat-Regular",fontSize:25,color:'black'}]}>Amount Payable: </Text>
                <View style = {{flexDirection: 'row', width: 70,borderColor: 'orange' ,borderWidth:2, borderRadius: 15, alignItems: 'center',marginTop:15}}>
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
    }

