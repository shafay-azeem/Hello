import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput, FlatList, Image}  from 'react-native';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';

import styles from './Styles/CompleteStyling';
// import GradientButton from 'react-native-gradient-buttons';
import { useNavigation } from '@react-navigation/native';
// import { COLORS } from '../styles/colors';



function Item({ item }) {
    const navigation = useNavigation();   
  
      return (
        <TouchableOpacity style={styles.listItemBox}
        onPress={() => navigation.navigate('SelectSchedule')}
        >
          <View style={{flex:1}}>
            
      <View style = {{flexDirection: 'row', width: 70, height: 25,borderColor: 'orange' ,borderWidth:2, borderRadius: 25, alignSelf: 'flex-end', alignItems: 'center'}}>
            <View style = {styles.dollarIcon}>
            <Image
              style={styles.tinyLogo}
              source={require('../images/dollar.png')}
            />
            </View>
            <Text style= {{textAlign: 'right',color: 'black'}}>1000</Text>
            
            
            
            </View>
          <View style = {styles.roundIcon}>
            <Image
              style={styles.tinyLogo}
              source={require('../images/doctor.png')}
            />

         

          </View>

            <Text style={{ textAlign: 'left', fontSize: 25, color: '#575ce5', textAlign: 'center'}}>Dr. {item.name}</Text>

            
            <View style = {{padding: 5, width: '100%', height: '100%'}}>
            <Text style={{ textAlign: 'center', fontSize: 17,  color: 'grey'}}>{item.profession}</Text>
            
            {/* <View style = {{flexDirection: 'row', width: 70, height: 25,borderColor: 'orange' ,borderWidth:2, borderRadius: 25, alignSelf: 'center', alignItems: 'center'}}>
            <View style = {styles.dollarIcon}>
            <Image
              style={styles.tinyLogo}
              source={require('../images/dollar.png')}
            />
            </View>
            <Text style= {{textAlign: 'right',color: 'black', fontFamily: 'Rubik-Regular'}}>1000</Text>
            
            
            
            </View> */}
        
        <View style= {{flex: 1,justifyContent: 'flex-end', marginBottom: 80 }}> 
        <View style= {{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', }}>
            <View style={styles.circleView}>
                <Text style = {styles.enabled}>M</Text>
              </View>
              <View style={styles.circleViewDisable}>
              <Text style = {styles.disabled}>T</Text>

              </View>
              <View style={styles.circleView}>
              <Text style = {styles.enabled}>W</Text>

              </View>
              <View style={styles.circleView}>
              <Text style = {styles.enabled}>T</Text>
              </View>

              <View style={styles.circleViewDisable}>
              <Text style = {styles.disabled}>F</Text>

              </View>

              <View style={styles.circleViewDisable}>
              <Text style = {styles.disabled}>S</Text>

              </View>

              <View style={styles.circleViewDisable}>
              <Text style = {styles.disabled}>S</Text>

              </View>

              </View>
              </View>


              </View>
          </View>
          <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}
        >
          
        </TouchableOpacity>
        </TouchableOpacity>
      );
    }


export default class SelectDoc extends Component {
   doctorName = "Dr Ahmed Khan";
   specality = "Medicine";
   constructor(props){
   super(props);
   }
   numColumns = 4

  render(){
    const formatData = (data, numColumns) => {
      const numberOfFullRows = Math.floor(data.length / numColumns);
    
      let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
      while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
      }
    
      return data;
    };
    doctorName = "Dr Ahmed Khan";
    specality = "Medicine";
    this.state = {
        doctor:[
            {
                "name": "Hamza Ali K",
                "email": "saad@gmail.com",
                "age" : "34 Years",
                "profession":"Orthopedics",
                "location":"AKU",
                "date":"Mon, 06 Dec - 2:20 pm"
            },
            {
                "name": "Saad Ali",
                "email": "saadd@gmail.com",
                "age" : "34 Years",
                "profession":"Orthopedics",
                "location":"AKU",
                "date":"Mon, 06 Dec - 2:20 pm"

            },
            {
              "name": "Hamza Ali",
              "email": "saadd@gmail.com",
              "age" : "34 Years",
              "profession":"Orthopedics",
              "location":"AKU",
              "date":"Mon, 06 Dec - 2:20 pm"

          },
          {
            "name": "Laib Ali",
            "email": "saadd@gmail.com",
            "age" : "34 Years",
            "profession":"Orthopedics",
            "location":"AKU",
            "date":"Mon, 06 Dec - 2:20 pm"

        },
        {
          "name": "Khan Ali",
          "email": "saadd@gmail.com",
          "age" : "34 Years",
          "profession":"Orthopedics",
          "location":"AKU",
          "date":"Mon, 06 Dec - 2:20 pm"

      },            {
        "name": "Usman Ali",
        "email": "saadd@gmail.com",
        "age" : "34 Years",
        "profession":"Orthopedics",
        "location":"AKU",
        "date":"Mon, 06 Dec - 2:20 pm"

    },
    {
      "name": "Fizan Ali",
      "email": "saadd@gmail.com",
      "age" : "34 Years",
      "profession":"Orthopedics",
      "location":"AKU",
      "date":"Mon, 06 Dec - 2:20 pm"

  },
  {
    "name": "Shafay Azeem",
    "email": "saadd@gmail.com",
    "age" : "34 Years",
    "profession":"Orthopedics",
    "location":"AKU",
    "date":"Mon, 06 Dec - 2:20 pm"

},
            
        ],
    }
    return (
        <View style={[{backgroundColor:"#38AB94"}]}>
          <Header name="SELECT DOCTOR" class= ""/>
          
            <PatientHeader/>
            <UnitClerkHeader/>
         <View style= {{ height: '100%', width: '100%', alignSelf: 'center'}}>
        <FlatList
          style={{flex:1, marginTop: 30, margin: 40}}
          data={ formatData(this.state.doctor, this.numColumns)}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.email}
          numColumns = {this.numColumns}
        />


        </View>

        </View>
      
    );
  }
}