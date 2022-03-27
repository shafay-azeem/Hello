import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity,ScrollView,SafeAreaView} from 'react-native';
import styles from './Styles/CompleteStyling';


import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';

export default class SearchDoctor extends Component {
  constructor(props){
    super(props)

   }
    state={
        Location:"",
        Speciality:"",
        Specify_Doctor:""
  }
   render(){
    return (
      <ScrollView style={{backgroundColor:'#38AB94'}}> 
      <SafeAreaView style={{flex: 1}}>
 
   
      <View style={{backgroundColor:'#38AB94'}}> 
           <Header style={{height:"20%"}} name="SEARCH DOCTOR " class= ""/>
           <UnitClerkHeader/>
           <PatientHeader/>
           </View>
           <View style={styles.containerWithinScrollView} >
           <Text style={styles.EdittextHeading}>Location </Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter your Location " 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({Location:text})}/>
         
           <Text style={styles.EdittextHeading}>Speciality</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter your Speciality" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({Speciality:text})}/>
          
           
           <Text style={styles.EdittextHeading}>Specify Doctor</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Specify Doctor" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({Specify_Doctor:text})}/>
         
             <TouchableOpacity style={styles.buttonForSearchPatient}
             onPress={() =>this.props.navigation.navigate("SelectDoc")}
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
