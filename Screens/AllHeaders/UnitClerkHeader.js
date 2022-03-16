
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image ,Button,Pressable,SafeAreaView,alignItems,justifyContent,alignSelf} from 'react-native';
import CheckBox from 'react-native-check-box';

export default class DoctorPatientDetails extends Component {
     UnitClerk = "Unit Clerk";
    // specality = "Nurse";
    //{"\n"}Specality: {this.specality}
      render(){
          return (
             <View style={{backgroundColor:'#FAFAFA'}} >
                  <View style= {{flexDirection: "row", flex: 1}}>
                    <Text style={{ color: 'black'}}>{this.UnitClerk}</Text>
                    <Text style={{flex:1,textAlign:'right', color: 'black',alignSelf: 'flex-end',justifyContent:'flex-end',alignItems:'flex-end'}}>Location: AKU{"\n"}Tue, 07 Dec - 02:30</Text>
                    
                  </View>
          </View>
          );
        }
      }




const styles = StyleSheet.create({
    header: {
        width:"100%",
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#252726",

    },
    headerText: {
        fontSize: 20,
        fontWeight:'bold',
       color:'#FFFFFF',
    }
})