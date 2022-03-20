import {SafeAreaView, StyleSheet,ScrollView, Image,Text,Button, View, TouchableOpacity,TextInput} from 'react-native';
import React, {Component, useState} from 'react';


import styles from './Styles/CompleteStyling';
import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';

export default class MoreImagesAndRecord extends Component {

    render(){
     return (
       <ScrollView style={{backgroundColor:"#38AB94"}}>
       <SafeAreaView style={{flex: 1}}>
       
             
             
          <View>
          <Header name="IMAGES AND RECORDS" class= ""/>
       <UnitClerkHeader/>
       <PatientHeader/>


        <View style={{flexDirection:'row',margin:50, alignSelf:'center'}}>
            
             <View style={{height:200,width:"25%",backgroundColor:'#FFFFFF', marginRight:30 ,borderRadius:10}}> 
             <View style={{ width: 150 ,height:150,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                     <Image
                    style={{   width: '100%',height: '100%', alignSelf:'center',marginTop:50}}
                    source={require('../images/man.png')}
                    /> 
                  </View>
            </View>
            
             <View style={{height:200,width:"25%",backgroundColor:'#FFFFFF' , marginRight:30 ,borderRadius:10 }}> 
             
             <View style={{ width: 150 ,height:150,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                     <Image
                    style={{   width: '100%',height: '100%', alignSelf:'center',marginTop:50}}
                    source={require('../images/woman.png')}
                    /> 
                  </View>
             </View>
            
         </View>


       
       
         <TouchableOpacity style={styles.buttonGeneral}
              onPress={() =>this.props.navigation.navigate("MoreImagesAndRecord")}
              > 
              <Text style={styles.Button_text_styling}>
              NEXT </Text>
            </TouchableOpacity>
         </View>
           
             </SafeAreaView>
             </ScrollView>
      
     );
    }
 } 

 