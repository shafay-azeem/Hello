import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput, FlatList, Image,SafeAreaView}  from 'react-native';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import AppointmentHeading from './AllHeaders/AppointmentHeading';
import Header from './Header';

import styles from './Styles/CompleteStyling';
// import GradientButton from 'react-native-gradient-buttons';
import { useNavigation } from '@react-navigation/native';
// import { COLORS } from '../styles/colors';
import doctorApp from './DATA/doctorApp.json';
import { ScrollView } from 'react-native-gesture-handler';

import drinfo from './DATA/data.json';
import Patientinfo from './DATA/patient.json';
import patientDoc from './DATA/patientDoc.json';
import AppointmentConfirmation from './AppointmentConfirmation';

function Item({ item }) {
    const navigation = useNavigation();   
  
      return (

        <TouchableOpacity style={styles.listItemBox}
        onPress={() => navigation.navigate('PatientDemographics')}
        >
          <View style={{flex:1}}>
            
     <View style={{flexDirection:"row"}}>
          <View style = {styles.roundIcon}>
            <Image
              style={[styles.tinyLogo,]}
              source={require('../images/doctor.png')}
            />
         

         
         
          </View>
          
                    
                    <View style = {{flexDirection: 'row', alignItems: 'center',justifyContent: 'center',alignSelf:'center'}}>
                    <Text style={{ lineHeight: 20,color: 'black',alignSelf: 'flex-start',fontFamily:"Montserrat-Regular"}}>Dr.Name:{'\n'}Specality:</Text>
                    <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{item.doctorName}{'\n'}{item.specality}</Text>
                    </View>
                    </View> 
                    <View style={{borderColor:"#3FB39B",borderWidth:1,margin:5}}></View>



                    <View style={{flexDirection:"row"}}>

                    <View style = {[styles.roundIcon,{ }]}>
            <Image
              style={styles.tinyLogo}
              source={require('../images/user-silhouette.png')}
            />
         

          </View>
                    
                    <View style = {{flexDirection: 'row',  alignItems: 'center',justifyContent: 'center',marginTop:25}}>
                    <Text style={{ lineHeight: 20,color: 'black',alignSelf: 'flex-start',fontFamily:"Montserrat-Regular"}}>Patient: {"\n"}Date: </Text>
                      <Text style={{color:"#30A28C",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{item.PatientName}{'\n'}{item.Date1}</Text>
                    </View>
             
                    </View>
            
        
                    <View style= {{flexDirection: "row"}}>
                  
                  <View style= {{flexDirection: "row",width:'50%'}}>
                  <TouchableOpacity
              onPress={() => navigation.navigate('PatientDemographics')} >
                  
                
                  <Text style={{ color:"black",marginTop:20,fontFamily:"Montserrat-Bold"}}>CONFIRMED</Text>
                </TouchableOpacity>
                </View>
                <View style= {{flexDirection: "row",width:'50%',alignSelf:'flex-end',justifyContent:'flex-end'}}>
                <TouchableOpacity
                  // onPress={() => this.props.navigation.navigate('')}
                >
                  <Text style={{ textAlign:'right',color:"black",marginTop:20,fontFamily:"Montserrat-Bold"}}>VIEW DETAILS</Text>
                </TouchableOpacity>
                  </View>

                  </View>
          </View>
          <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}
        >
          
        </TouchableOpacity>
        </TouchableOpacity>
            );
    }


export default class UpcomingAppointmentSchedule extends Component {
   doctorName = "Dr Ahmed Khan";
   specality = "MBBS";
   constructor(props){
   super(props);
   }
   numColumns = 4

  render(){
    

    
    const formatData = (data, numColumns) => {

      
      
  
      const numberOfFullRows = Math.floor(8 / numColumns);
 
    
      let numberOfElementsLastRow = 8 - (numberOfFullRows * numColumns);
      while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
      }
      // const [isScrollEnabled, setIsScrollEnabled] = useState(false);
 return data;
    
    };
    doctorName = "Dr Ahmed Khan";
    specality = "Medicine";

    
    return (
  
        <View style={styles.container} >
          <Header name="UPCOMMING APPOINTMENT SCHEDULE" class= ""/>
          
           
            <UnitClerkHeader/>
            <PatientHeader/>
            <AppointmentHeading  name="UPCOMMING APPOINTMENTS" />
             <View style= {{flex:1 , height:"100%",width: '100%', alignSelf: 'center'}}>
             <SafeAreaView style={{flex:1}} >
        <FlatList
  
          style={{flex:1, marginTop: 30, margin: 40}}
          data={ formatData(patientDoc, this.numColumns)}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.email}
          numColumns = {this.numColumns}
          // scrollEnabled={isScrollEnabled}
        />
</SafeAreaView>

        </View>

        </View>
     
    );
  }
}
