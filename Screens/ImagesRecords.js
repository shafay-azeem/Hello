import {SafeAreaView, StyleSheet,ScrollView, Image,Text,Button, View, TouchableOpacity,TextInput} from 'react-native';
import React, {Component, useState} from 'react';


import styles from './Styles/CompleteStyling';
import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';

export default class ImagesRecords extends Component {

    render(){
     return (
       <ScrollView style={{backgroundColor:"#38AB94"}}>
       <SafeAreaView style={{flex: 1}}>
       
             
             
          <View>
          <Header name="IMAGES AND RECORDS" class= ""/>
       <UnitClerkHeader/>
       <PatientHeader/>


        <View style={{flexDirection:'row',marginTop:30,marginRight:50,marginLeft:50, alignSelf:'center'}}>
            
             <View style={{height:200,width:"20%",backgroundColor:'#FFFFFF', marginRight:30 ,borderRadius:10}}> 
             <View style={{ width: 100 ,height:100,marginTop:50,marginBottom:50,alignSelf:'center'}}>
                     <Image
                    style={{   width: '100%',height: '100%'}}
                    source={require('../images/heart.png')}
                    /> 
                  </View>
            </View>
            
             <View style={{height:200,width:"20%",backgroundColor:'#FFFFFF' , marginRight:30 ,borderRadius:10 }}> 
             
             <View style={{ width: 100 ,height:100,marginTop:50,marginBottom:50,alignSelf:'center'}}>
                     <Image
                    style={{   width: '100%',height: '100%'}}
                    source={require('../images/medical-history.png')}
                    /> 
                  </View>
             </View>
             <View style={{height:200,width:"20%",backgroundColor:'#FFFFFF',borderRadius:10}}> 
             <View style={{ width: 100 ,height:100,marginTop:50,marginBottom:50,alignSelf:'center'}}>
                     <Image
                    style={{   width: '100%',height: '100%'}}
                    source={require('../images/medicine.png')}
                    /> 
                  </View></View>
         </View>


         <View style={{flexDirection:'row',marginTop:30,marginRight:50,marginBottom:50,marginLeft:50, alignSelf:'center'}}>
             <View style={{height:200,width:"20%",backgroundColor:'#FFFFFF', marginRight:30 ,borderRadius:10}}> 
             <View style={{ width: 100 ,height:100,marginTop:50,marginBottom:50,alignSelf:'center'}}>
                     <Image
                    style={{   width: '100%',height: '100%'}}
                    source={require('../images/x-ray.png')}
                    /> 
                  </View></View>
             <View style={{height:200,width:"20%",backgroundColor:'#FFFFFF' , marginRight:30 ,borderRadius:10 }}> 
             <View style={{ width: 100 ,height:100,marginTop:50,marginBottom:50,alignSelf:'center'}}>
                     <Image
                    style={{   width: '100%',height: '100%'}}
                    source={require('../images/dialogue.png')}
                    /> 
                  </View>
             </View>
             <View style={{height:200,width:"20%",backgroundColor:'#FFFFFF',borderRadius:10}}> 
             <View style={{ width: 100 ,height:100,alignSelf:'center',marginTop:50,marginBottom:50}}>
                     <Image
                    style={{   width: '100%',height: '100%'}}
                    source={require('../images/volumetric-flask.png')}
                    /> 
                  </View>
           </View>
         </View>

         <TouchableOpacity style={[styles.buttonGeneralInForm,{marginBottom:10}]}
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

 