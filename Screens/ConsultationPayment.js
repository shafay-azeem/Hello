import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput,Image} from 'react-native';
// import DoctorDetailHeader from '../shared/doctorDetailHeader';
import styles from './Styles/CompleteStyling';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';
// import DropDownPicker from 'react-native-dropdown-picker';
import invoice from './DATA/Invoice.json';
import drinfo from './DATA/data.json';


export default class ConsultationPayment extends Component {
   doctorName = "Dr Ahmed Khan";
   specality = "Medicine";
   doctorEmail = "abc@gmail.com"
   doctorPhone = "090078601"
   Fees = 500
   Location = "AKU, Karachi"

  render(){
    let data = [{
        value: 'Banana',
      }, {
        value: 'Mango',
      }, {
        value: 'Pear',
      }];
    return (
      <View style={styles.container}>
          <Header name="CONSULTATION PAYMENT OPTION " class= ""/>
          <UnitClerkHeader/>
            <PatientHeader/>
     
  
            <View style = {styles.cardView90}>
         
            <View style={{width:'100%',padding:20,height:'30%'}} >
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

        
         
            
         
            <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:20}}>
              
            <View style = {{flexDirection: 'row',alignSelf:'center'}}>
                <View >
                <Text style={styles.EdittextHeading}>Transaction ID</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Transaction ID" 
              onChangeText={text => this.setState({Transaction_ID:text})}/>
                </View>
                <View style = {{marginLeft: 80}}>
                <Text style={styles.EdittextHeading}>Amount</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Amount" 
              onChangeText={text => this.setState({Amount:text})}/>

                </View>
                <View style = {{marginLeft: 80}}>
                <Text style={styles.EdittextHeading}>Payee's Name</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Payee's Name" 
              onChangeText={text => this.setState({Payees_Name:text})}/>

                </View>
                <View style = {{marginLeft: 80}}>
                     <Text style={styles.EdittextHeading}>Bank's Name</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Bank's Name" 
              onChangeText={text => this.setState({Bank_Name:text})}/>
                     

                </View>
                <View style = {{marginLeft: 80}}>
                <Text style={styles.EdittextHeading}>Card's Name</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Card's Name" 
              onChangeText={text => this.setState({Card_Name:text})}/>
                     

                </View>
            </View>

              
      </View>
      <TouchableOpacity style={styles.buttonGeneral}
              onPress={() =>this.props.navigation.navigate("PaymentSuccessfull")}
              > 
              <Text style={styles.Button_text_styling}>
              BOOK APPOINTMENT </Text>
            </TouchableOpacity>
            </View>
   
</View>
    );
  }
}
