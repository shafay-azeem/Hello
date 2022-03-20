import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput, FlatList,Image}  from 'react-native';
import styles from './Styles/CompleteStyling';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';

import { useNavigation } from '@react-navigation/native';



function Item({ item }) {
  const navigation = useNavigation();   
  
      return (
        <TouchableOpacity style={styles.listItem}
          onPress={() => navigation.navigate('SelectSlot')}
        >
            <View style={{width: '50%', height: '100%', justifyContent: 'center'}}>
            <Text >{item.date}</Text>
            <Text style={{fontSize: 18}}>{item.time}</Text>


            </View>

            <View style={{width: '50%', height: '100%', alignItems: 'flex-end', justifyContent: 'center'}}>
            <Text style={{color: '#575ce5',}}>Available: {item.availableSlots}</Text>
            {/* <Text style={{fontFamily: 'Rubik-Regular'}}>{item.availableSlots}</Text> */}
            </View>
        </TouchableOpacity>
      );
    }


export default class SelectSchedule extends Component {
   doctorName = "Dr. Ahmed Khan";
   specality = "Medicine";
   constructor(props){
   super(props);
   }

  render(){
    doctorName = "Dr Ahmed Khan";
    specality = "Medicine";
    this.state = {
        doctorAppointments:[
            {
                "key": "1",
                "availableSlots":"15",
                "date":"Mon, 06 Dec",
                "time":" 3:20 - 2:20 pm"
            },
            {
                "key": "2",
                "availableSlots":"25",
                "date":"Mon, 06 Dec",
                "time":" 3:20 - 2:20 pm"
            },
            {
              "key": "3",
              "availableSlots":"25",
              "date":"Mon, 06 Dec",
              "time":" 3:20 - 2:20 pm"
          },
          {
            "key": "4",
            "availableSlots":"25",
            "date":"Mon, 06 Dec",
            "time":" 3:20 - 2:20 pm"
        },
        {
          "key": "5",
          "availableSlots":"25",
          "date":"Mon, 06 Dec",
          "time":" 3:20 - 2:20 pm"
      },
      {
        "key": "6",
        "availableSlots":"25",
        "date":"Mon, 06 Dec",
        "time":" 3:20 - 2:20 pm"
    },
    {
      "key": "7",
      "availableSlots":"25",
      "date":"Mon, 06 Dec",
      "time":" 3:20 - 2:20 pm"
  },

            
        ],
    }
    return (
        <View style={styles.container}>
        <Header name="SELECT SCHEDULE"/>
        {/* <UnitClerkHeader/> */}
         <PatientHeader/>
         <View style= {{ height: 630, width: '70%', alignSelf: 'center',marginTop: 0,padding: 0, borderRadius: 30,}}>
           <View style = {{flexDirection: 'row', alignItems:'center', justifyContent:'center' }}>
             <View style={{alignSelf: 'center',height: 120, width: 150,borderRadius: 150/2,justifyContent: 'center', }}>
             <Image
              style={styles.bigLogo}
              source={require('../images/doctor.png')}
            />             
            </View>
            <View>
             <Text style= {styles.cardText30}>{this.doctorName}</Text>
             <Text style= {[styles.cardText, {alignSelf: 'flex-start'}]}>{this.specality}</Text>
             </View>
             </View>
        <FlatList
          style={{flex:1, marginTop: 0}}
          data={this.state.doctorAppointments}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.key}
        />
        </View>

        </View>
      
    );
  }
}