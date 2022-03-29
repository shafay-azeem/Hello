import {SafeAreaView,ScrollView, Text,StatusBar, View, TouchableOpacity,TextInput} from 'react-native';
import React, {Component,Fragment} from 'react';
import RadioForm  from 'react-native-simple-radio-button';
import { Picker } from "@react-native-picker/picker";
import QRCodeScanner from 'react-native-qrcode-scanner';
import CheckBox from 'react-native-check-box';


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
          FirstName:"",
          MiddleName:"",
          LastName:"",
            Gender:"",
            Age:'',
            DOB:"",
            MaritalStatus:'',
            phoneNumber:"",
            address:'',
            Email:"",
            password:"",
            confirmpassword:"",

    
      }
     

   render(){

 

    return (
      <View style={styles.container} >
      <SafeAreaView >
 
      <View > 
      <Header name="  UPDATE PATIENT PROFILE " class= "" />
      <UnitClerkHeader/>
</View>


<View style={[styles.containerForRegistration]}>
  
  <View style={[styles.containerWithinScrollViewforForm]}>

  <ScrollView>
    <View style={styles.Side_by_side_EditText}>
        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>First Name</Text>
          <TextInput style={styles.Edittext}
          placeholder="Enter First Name" 
          placeholderTextColor="#30A28C"
           onChangeText={text => this.setState({FirstName:text})}/>
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>Middle Name</Text>
          <TextInput style={styles.Edittext}
           placeholder="Enter Middle Name" 
           placeholderTextColor="#30A28C"
            onChangeText={text => this.setState({MiddleName:text})} />
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>Last Name</Text>
          <TextInput style={styles.Edittext}
           placeholder="Enter Last Name" 
           placeholderTextColor="#30A28C"
            onChangeText={text => this.setState({LastName:text})} />
        </View>
      </View>
    

           
      <View style={styles.Side_by_side_EditText}>
        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>Gender</Text>
          <TextInput style={styles.Edittext}
          placeholder="Enter Gender" 
          placeholderTextColor="#30A28C"
           onChangeText={text => this.setState({Gender:text})}/>
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>Age</Text>
          <TextInput style={styles.Edittext}
           placeholder="Enter Age" 
           keyboardType = 'numeric'
           placeholderTextColor="#30A28C"
            onChangeText={text => this.setState({Age:text})} />
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>DOB</Text>
          <TextInput style={styles.Edittext}
           placeholder="Enter DOB" 
           placeholderTextColor="#30A28C"
            onChangeText={text => this.setState({DOB:text})} />
        </View>
      </View>


           
      <View style={styles.Side_by_side_EditText}>
      <View style={styles.inputWrap}>
      <Text style={styles.EdittextHeading}>phoneNumber</Text>
          <TextInput style={styles.Edittext}
           placeholder="Enter phoneNumber" 
           keyboardType = 'numeric'
           placeholderTextColor="#30A28C"
            onChangeText={text => this.setState({phoneNumber:text})} />
        </View>



        <View style={styles.inputWrap}>
      <Text style={styles.EdittextHeading}>Marital Status</Text>
<View   style={{   borderColor: "#30A28C",
        backgroundColor:'#F7F7F7',     
           borderWidth: 1,  borderRadius: 15,  marginHorizontal:20,   marginTop:2, height:50}}> 
          <Picker  
           selectedValue={this.state.PickerSelectedVal}
           placeholderTextColor="#30A28C"
           onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >
  
           <Picker.Item color='#30A28C' label="Married" value="Married" />
           <Picker.Item color='#30A28C' label="Unmarried" value="Unmarried" />
           <Picker.Item color='#30A28C' label="Divorced" value="Divorced" />
           <Picker.Item  color='#30A28C' label="Widow" value="Widow" />
        

           </Picker> 

       
     
     </View>
     </View>
     </View>

         <View >
          <Text style={styles.EdittextHeading}>Address</Text>
          <TextInput  
              style={styles.Edittext}
              placeholder="Enter your Address" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({address:text})}/>
         
         


</View>
<View style={styles.Side_by_side_EditText}>
        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>Email</Text>
          <TextInput style={styles.Edittext}
          placeholder="Enter Email" 
          placeholderTextColor="#30A28C"
           onChangeText={text => this.setState({Email:text})}/>
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>Password</Text>
          <TextInput style={styles.Edittext}
            secureTextEntry={true}
           placeholder="Enter Password" 
           placeholderTextColor="#30A28C"
            onChangeText={text => this.setState({password:text})} />
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>Confirm Password</Text>
          <TextInput style={styles.Edittext}
          secureTextEntry={true}
           placeholder="Enter Password" 
           placeholderTextColor="#30A28C"
            onChangeText={text => this.setState({confirmpassword:text})} />
        </View>
      </View>

     
<View style={{flexDirection:'row',marginTop:30}}>

  <View style={{width:"50%",flexDirection:'row',alignSelf:'center',alignItems:'center',marginLeft:27}}>
             <CheckBox

      
         
style={{marginTop:3}}
onClick={()=>{
 this.setState({
  isChecked:!this.state.isChecked
})
}}
isChecked={this.state.isChecked}
RightText={"Remember Me"}
checkedColor={"#30A28C"}

/>

             <Text style= {[{fontFamily:"Montserrat-Bold",justifyContent:'center',color:"#30A28C",fontSize:15}]}>Please Verify above Information is Correct</Text>
             </View>
             <View style={{width:"50%",alignSelf:'flex-end',alignItems:'flex-end',justifyContent:'flex-end'}} >


<TouchableOpacity style={[styles.buttonForm]}
   onPress={() =>this.props.navigation.navigate("PatientDemographics")}
   > 
   <Text style={styles.Button_text_styling}>
   UPDATE </Text>
 </TouchableOpacity>
 </View>



</View>
</ScrollView>
             </View>

      

</View>



      </SafeAreaView>
     
      </View>
      
    );
   }
}


