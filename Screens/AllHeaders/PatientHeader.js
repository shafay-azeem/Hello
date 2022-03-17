
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image ,Button,Pressable,SafeAreaView,alignItems,justifyContent,alignSelf} from 'react-native';
import CheckBox from 'react-native-check-box';


import Patientinfo from '../DATA/patient.json';

export default class PatientHeader extends Component {
    // PatientName = "Shafay Azeem";
    // Age = "21 years";    
    //  Gender = 'Male';
    // PhoneNumber = '0345880'
    // MRNumber = '0908765'
 

      render(){
          return (
            <View style={{backgroundColor:'#FFFFFF',marginTop:10,padding:8}} >
            <View style= {{flexDirection: "row"}}>
            <View style = {{flexDirection: 'row',width: '5%' , alignItems: 'center',justifyContent: 'flex-start'}}>
            <View style={{ width: 50 ,height: 50,marginRight: 6}}>
                    { <Image
                    style={{   width: '100%',height: '100%',alignSelf: 'center'}}
                    source={require('../man.png')}
                    /> }
                  </View>
            </View>


            <View style = {{flexDirection: 'row',width: '45%' , alignItems: 'center',justifyContent: 'flex-start'}}>
            <Text style={{marginTop:10, lineHeight: 20,color: 'black',alignSelf: 'flex-start'}}>PatientName:{'\n'}Age:</Text>
            <Text style={{marginTop:11,color: 'black',lineHeight: 20, alignSelf: 'flex-start',fontWeight:'bold'}}>{Patientinfo.patientName}{'\n'}{Patientinfo.Age}</Text>
       
            </View>


<View style = {{flexDirection: 'row', width: '50%', alignItems: 'center',justifyContent: 'flex-end'}}>
            <Text style={{marginTop:10 ,lineHeight: 20, color: 'black',alignSelf:'flex-end'}}>MRNumber {"\n"}PhoneNumber: </Text>
              <Text style={{marginTop:11,color: 'black',lineHeight: 20, alignSelf: 'flex-start',fontWeight:'bold'}}>{Patientinfo.MRNumber}{'\n'}{Patientinfo.PhoneNumber}</Text>
            </View>
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