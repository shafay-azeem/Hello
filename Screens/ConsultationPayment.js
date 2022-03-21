import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput,Image} from 'react-native';
// import DoctorDetailHeader from '../shared/doctorDetailHeader';
import styles from './Styles/CompleteStyling';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';
// import DropDownPicker from 'react-native-dropdown-picker';




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
            <PatientHeader/>
      <View style = {styles.cardView90}>

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
            
            <View style = {{width: '20%',height: '10%', marginBottom: 30}}>
            
            </View>
            <View style = {{height: '50%', width: '100%', flexDirection: 'row', justifyContent: 'center', }}>
              
            <View style = {{flexDirection: 'row'}}>
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
   
      <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('PaymentSuccessfull')}
                  style={styles.smallRoundedBlueRounded}
                >
                  <Text style={styles.Button_text_styling}>PAY</Text>
                </TouchableOpacity>
    </View>
</View>
    );
  }
}
