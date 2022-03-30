import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity,ScrollView,SafeAreaView} from 'react-native';
import styles from './Styles/CompleteStyling';


import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';

export default class SearchPatient extends Component {
  constructor(props){
    super(props)

   }
    state={
        Mr_Number:"",
        CNIC:"",
        QR_code:""
  }
   render(){
    return (
      <ScrollView style={{backgroundColor:'#38AB94'}}> 
      <SafeAreaView style={{flex: 1}}>
 
   
      <View style={{backgroundColor:'#38AB94'}}> 
           <Header style={{height:"20%"}} name="SEARCH PATIENT " class= ""/>
           <UnitClerkHeader/>


           </View>
           <View style={styles.containerWithinScrollView} >
           <Text style = {[styles.mediumText,{alignSelf:'center'}]}>SEARCH PATIENT BY</Text>
           <Text style={styles.EdittextHeading}>Mr Number </Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter your Mr Number" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({Mr_Number:text})}/>
         
           <Text style={styles.EdittextHeading}>CNIC</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter your CNIC" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({CNIC:text})}/>
          
           
           <Text style={styles.EdittextHeading}>QRcode</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter Patient 16 digit QR code" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({QR_code:text})}/>
         
             <TouchableOpacity style={styles.buttonForSearchPatient}
             onPress={() =>this.props.navigation.navigate("SelectPatient")}
             > 
             <Text style={styles.Button_text_styling}>
             SEARCH </Text>
           </TouchableOpacity>
      



          
        
           </View>
         
           </SafeAreaView>
           </ScrollView>
     );
     }
}
