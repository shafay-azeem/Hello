import {SafeAreaView,ScrollView, Text,StatusBar, View, TouchableOpacity,TextInput} from 'react-native';
import React, {Component,Fragment} from 'react';
import RadioForm  from 'react-native-simple-radio-button';
import { Picker } from "@react-native-picker/picker";
import QRCodeScanner from 'react-native-qrcode-scanner';


import styles from './Styles/CompleteStyling';


import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';


var radio_props_sv = [
    {label: 'Clinical Visit', value: 1 },
    {label: 'Educational Visit', value: 0 },
    {label: 'Others', value: 2 }
  ];
  


export default class UpdatePatientProfile extends Component {
    constructor(props){
        super(props)
    
       }
        state={
            MRNumber:"",
            FamilyNumber:"",
            SehatSafarNumber:"",
            CNICNumber:"",
            FirstName:'',
            MiddleName:"",
            LastName:'',
            DOB:"",
        //     Age:"",
        //     MaritalStatus:"",
        //     phoneNumber:"",
        //     Alternate_phone_Number:"",
        //     Email:"",
        //    HomeAddress:"",
        //    CityTown:'',
        //    Province:"",
        //    selectedLanguage : '',
        //    setSelectedLanguage:"",
        //      PickerSelectedVal : '',
        //     //  barcodes: [],
        //     scan: false,
        //     ScanResult: false,
        //     result: null
    
      }
     

   render(){

 

    return (
      <ScrollView  >
      <SafeAreaView >
 
      <View style={{backgroundColor:'#38AB94'}}> 
      <Header name="  UPDATE PATIENT PROFILE " class= "" />
      <UnitClerkHeader/>
</View>

      <View style={[styles.containerForRegistration]}>
      <View style={[styles.containerWithinScrollView]}>

           
    <View style={styles.Side_by_side_EditText}>
        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>MR Number</Text>
          <TextInput style={styles.Edittext}
          placeholder="Enter" 
          placeholderTextColor="#30A28C"
           onChangeText={text => this.setState({MRNumber:text})}/>
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>Family Number</Text>
          <TextInput style={styles.Edittext}
           placeholder="Enter" 
           placeholderTextColor="#30A28C"
            onChangeText={text => this.setState({FamilyNumber:text})} />
        </View>
      </View>
    

   

         <View >
          <Text style={styles.EdittextHeading}>Sehat Safar Number</Text>
          <TextInput  
              style={styles.Edittext}
              placeholder="Enter your SehatSafarNumber" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({SehatSafarNumber:text})}/>
         
           <Text style={styles.EdittextHeading}>CNIC Number </Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="CNICNumber" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({CNICNumber:text})}/>

             <Text style={styles.EdittextHeading}>First Name</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder=" FirstName" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({FirstName:text})}/>


             <Text style={styles.EdittextHeading}>Middle Name</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="MiddleName" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({MiddleName:text})}/>


            <Text style={styles.EdittextHeading}>Last Name </Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter your Last Name" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({LastName:text})}/>

             <Text style={styles.EdittextHeading}>DOB</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter your DOB" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({DOB:text})}/>

                    {/* <Text style={styles.EdittextHeading}>Phone Number</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter your Phone Number" 
              onChangeText={text => this.setState({phoneNumber:text})}/>

                    <Text style={styles.EdittextHeading}>Alternate Phone Number</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter your Alternate Phone Number" 
              onChangeText={text => this.setState({Alternate_phone_Number:text})}/>

                    <Text style={styles.EdittextHeading}>Email</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter your Email" 
              onChangeText={text => this.setState({Email:text})}/>
          
           
           <Text style={styles.EdittextHeading}>Age</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Age" 
              onChangeText={text => this.setState({Age:text})}/>
            
            
                  <Text style={styles.EdittextHeading}>City Town</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="City Town" 
              onChangeText={text => this.setState({CityTown:text})}/>



            <Text style={styles.EdittextHeading}>Home Address</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Home Address" 
              onChangeText={text => this.setState({HomeAddress:text})}/>

<Text style={styles.EdittextHeading}>Province</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Province" 
  
              onChangeText={text => this.setState({Province:text})}/>

<Text style={styles.EdittextHeading}>Marital Status</Text>

          <Picker style={styles.picker}
           selectedValue={this.state.PickerSelectedVal}
           onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >

           <Picker.Item label="Married" value="Married" />
           <Picker.Item label="Unmarried" value="Unmarried" />
           <Picker.Item label="Divorced" value="Divorced" />
           <Picker.Item label="Widow" value="Widow" />
      

           </Picker> 



                 <Text style={styles.EdittextHeading}>Types Of Visits</Text>
                 <View style={{margin:20, marginTop:10}}>
                 <RadioForm 
                  buttonSize={20}
                  animation={true}
                   buttonColor={'black'}
                   radio_props={radio_props_sv}
                  initial={1}
                  onPress={(value) => {this.setState({value:value})}}  />
                </View>

            </View>

      


         
           */}

</View>

     

<View >
          <TouchableOpacity style={[styles.buttonRegistration]}
             onPress={() =>this.props.navigation.navigate("SearchPatient")}
             > 
             <Text style={styles.Button_text_styling}>
             SUBMIT </Text>
           </TouchableOpacity>
           </View>
     

     
</View>


</View>


      </SafeAreaView>
     
      </ScrollView>
      
    );
   }
}


