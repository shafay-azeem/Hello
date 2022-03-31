import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput, FlatList, Image,SafeAreaView,Modal,Alert}  from 'react-native';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';
import Balance from './Balance';

import styles from './Styles/CompleteStyling';
// import GradientButton from 'react-native-gradient-buttons';
import { useNavigation } from '@react-navigation/native';
// import { COLORS } from '../styles/colors';
import doctorApp from './DATA/doctorApp.json';
import { ScrollView } from 'react-native-gesture-handler';

import drinfo from './DATA/data.json';
import Patientinfo from './DATA/patient.json';
import patientDoc from './DATA/patientDoc.json';

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
            
        
        <View style= {{justifyContent: 'flex-end' }}> 
        <View style= {{flexDirection: 'row', justifyContent:'center' }}>
            
 
       
            <TouchableOpacity style={[styles.smallRoundedBlueRoundedNoMargin,{marginTop:10,marginBottom:40}]}
                   onPress={() => navigation.navigate('PatientDemographics')} >
              <Text style={[styles.cardText,{fontSize: 18},{color: 'white'}]}>SELECT </Text>
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


export default class HomeScreen extends Component {
   doctorName = "Dr Ahmed Khan";
   specality = "MBBS";
   constructor(props){
   super(props);
   }
   numColumns = 4



   state={
    PickerSelectedVal : '',
    modalVisible: false
   }

   setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  render(){
    

     const { modalVisible } = this.state;
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

<Modal  
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <View style = {{flexDirection: 'row', alignItems: 'center',justifyContent: 'center'}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontFamily:"Montserrat-Regular",fontSize:25}}>TODAY'S DATE: </Text>
            <Text style={{color:"#3FB39B",alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold",fontSize:25}}>{doctorApp[0].date}</Text>
       
            </View>
            <Text style={[{ fontFamily:"Montserrat-Bold",
        marginTop:30,
        color:"#3FB39B",fontSize:15}]}>ENTER OPENING BALANCE</Text>
            <TextInput  
              style={[styles.Edittext,{width:250}]}
              placeholder="Enter Opening Bal" 
              placeholderTextColor="#3FB39B"
              onChangeText={text => this.setState({OpeningBal:text})}/>
                <TouchableOpacity
                style={[styles.smallRoundedBlueRounded,{width:'60%',marginTop:10}]}
          
                onPress={() => this.setModalVisible(!modalVisible)}
              >
               <Text style={styles.Button_text_styling}>SUBMIT</Text>
                </TouchableOpacity>
              {/* <TouchableOpacity
                style={[styles.smallRoundedBlueRounded,{width:'60%',marginTop:10}]}
          
                onPress={() => this.setModalVisible(!modalVisible)}
              >
               <Text style={styles.Button_text_styling}>CANCEL</Text>
                </TouchableOpacity> */}
            </View>
          </View>
        </Modal>
  
       
          <Header name="EMR" class= ""/>
          
        
            <UnitClerkHeader/>
            <View style= {[styles.headerbalance,{}]}>

              <View style={{width:'33%', alignItems: 'center'}}>
              <TouchableOpacity
            onPress={() =>this.props.navigation.navigate("HomeScreen")}>
                <Text style={{   fontFamily:"Montserrat-Bold",marginLeft:57,
        marginTop:10,
        color:"#3FB39B"}}
        onPress={() => this.setModalVisible(true)}>Opening Balance</Text>
                  <TextInput style={[styles.Edittext,{height:40},{width:200}]}
                  placeholder="0.00" 
                  keyboardType = 'numeric'
                  placeholderTextColor="#3FB39B"
                    onChangeText={text => this.setState({phoneNumber:text})} />
</TouchableOpacity>
              </View>

              <View style={{width:'33%', alignItems: 'center'}}>
                <Text style={[{   fontFamily:"Montserrat-Bold",
        marginTop:10,
        color:"#3FB39B"}]}>Balance</Text>
                  <TextInput style={[styles.Edittext,{height:40},{width:200}]}
                  placeholder="0.00" 
                  keyboardType = 'numeric'
                  placeholderTextColor="#3FB39B"
                    onChangeText={text => this.setState({phoneNumber:text})} />

              </View>

              
              <View style={{width:'33%', alignItems: 'center'}}>
                <Text style={{   fontFamily:"Montserrat-Bold",
        marginTop:10,
        color:"#3FB39B"}}>Closing Balance</Text>
                  <TextInput style={[styles.Edittext,{height:40},{width:200}]}
                  placeholder="0.00" 
                  keyboardType = 'numeric'
                  placeholderTextColor="#3FB39B"
                    onChangeText={text => this.setState({phoneNumber:text})} />

              </View>

                        
        
 
        
            </View>



            <View style={[styles.containerForButton]}>
            <TouchableOpacity style={[styles.button_Side_by_Side,{width:300}]}
              onPress={() =>this.props.navigation.navigate("RegistrationScreen")}
              > 
              <Text style={styles.Button_text_styling}>
              REGISTRATION NEW PATIENT</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.button_Side_by_Side,{width:300}]}
              onPress={() =>this.props.navigation.navigate("CreateSlot")}
              > 
              <Text style={styles.Button_text_styling}>
              BOOKING MANAGEMENT</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button_Side_by_Side,{width:300}]}
              onPress={() =>this.props.navigation.navigate("SearchPatient")}
              > 
              <Text style={styles.Button_text_styling}>
              SEARCH PATIENT</Text>
            </TouchableOpacity>
    </View>
  
             <View style= {{flex:1 , height:"100%",width: '100%'}}>
             <SafeAreaView style={{flex:1}} >
        <FlatList
  
          style={{flex:1,  marginRight: 40,marginLeft: 40,marginBottom: 40}}
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
