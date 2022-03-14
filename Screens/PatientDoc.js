

import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput, StyleSheet, FlatList, Image}  from 'react-native';
import styles from './Styles/CompleteStyling';



export default class SelectDoc extends Component {
    doctorName = "Dr. Ahmed Khan";
    specality = "MBBS"; 


   constructor(props){
   super(props);
   }
   

  render(){


    this.state = {


    }
    return (
        <View style={styles.containerForSelectPatient} >
   
           
   <View style= {{flexDirection: "row", flex: 1}}>
                    <Text style={{margin:15,lineHeight: 20, flex:1,color: 'black'}}>{this.doctorName}{"\n"} {this.specality}</Text>
                    <Text style={{margin:15 ,lineHeight: 20,flex:1,textAlign:'right', color: 'black',alignItems:'flex-end'}}>Patient: Shafay{"\n"}Tue, 07 Dec - 02:30</Text>
                    
                  </View>

  

        

            
  


         </View>
    

     
      
    );
  }
}

