import {SafeAreaView,ScrollView, Text,StatusBar, View, TouchableOpacity,TextInput} from 'react-native';
import React, {Component,Fragment} from 'react';
import RadioForm  from 'react-native-simple-radio-button';
import { Picker } from "@react-native-picker/picker";
import QRCodeScanner from 'react-native-qrcode-scanner';
import CheckBox from 'react-native-check-box';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Example from './Example';
import styles from './Styles/CompleteStyling';


import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';


var radio_props_sv = [
    {label: 'Clinical Visit', value: 1 },
    {label: 'Educational Visit', value: 0 },
    {label: 'Others', value: 2 }
  ];
  


export default class RegistrationScreen extends Component {
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
            Age:"",
            MaritalStatus:"",
            phoneNumber:"",
            Alternate_phone_Number:"",
            Email:"",
           HomeAddress:"",
           CityTown:'',
           Province:"",
           selectedLanguage : '',
           setSelectedLanguage:"",
             PickerSelectedVal : '',
            //  barcodes: [],
            scan: false,
            ScanResult: false,
            result: null
    
      }
      onSuccess = (e) => {
        const check = e.data.substring(0, 4);
        console.log('scanned data' + check);
        this.setState({
            result: e,
            scan: false,
            ScanResult: true
        })
        if (check === 'http') {
            Linking
                .openURL(e.data)
                .catch(err => console.error('An error occured', err));
    
    
        } else {
            this.setState({
                result: e,
                scan: false,
                ScanResult: true
            })
        }
    
    }
    
    activeQR = () => {
        this.setState({
            scan: true
        })
    }
    scanAgain = () => {
        this.setState({
            scan: true,
            ScanResult: false
        })
    }
    
      

   render(){

    const { scan, ScanResult, result } = this.state
    console.info(this.props.navigation)

    return (
      <View style={{backgroundColor:'#3FB39B'}}  >
      <SafeAreaView >
 
      <View > 
      <Header name="PATIENT REGISTRATION" class= "" />
      <UnitClerkHeader/>
</View>

      <View style={[styles.containerForRegistration]}>
  
      <View style={[styles.containerWithinScrollViewforForm]}>


          <ScrollView> 
    <View style={styles.Side_by_side_EditText}>
        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>MR Number</Text>
          <TextInput style={styles.Edittext}
          placeholder="Enter" 
          keyboardType = 'numeric'
          placeholderTextColor="#30A28C"
           onChangeText={text => this.setState({MRNumber:text})}/>
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>Family Number</Text>
          <TextInput style={styles.Edittext}
           placeholder="Enter" 
           keyboardType = 'numeric'
           placeholderTextColor="#30A28C"
            onChangeText={text => this.setState({FamilyNumber:text})} />
        </View>
      </View>
    

   

      <View style={styles.Side_by_side_EditText}>
      <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>Sehat Safar Number</Text>
          <TextInput  
              style={styles.Edittext}
              keyboardType = 'numeric'
              placeholderTextColor="#30A28C"
              placeholder="Enter your SehatSafarNumber" 
              onChangeText={text => this.setState({SehatSafarNumber:text})}/>
               </View>
         

               <View style={styles.inputWrap}>
           <Text style={styles.EdittextHeading}>CNIC Number </Text>
            <TextInput  
              style={styles.Edittext}
              keyboardType = 'numeric'
              placeholderTextColor="#30A28C"
              placeholder="CNICNumber" 
              onChangeText={text => this.setState({CNICNumber:text})}/>
                  </View>
                  </View>


   <View style={styles.Side_by_side_EditText}>
      <View style={styles.inputWrap}>
             <Text style={styles.EdittextHeading}>First Name</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder=" FirstName" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({FirstName:text})}/>
                 </View>

                 <View style={styles.inputWrap}>
             <Text style={styles.EdittextHeading}>Middle Name</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="MiddleName"
              placeholderTextColor="#30A28C" 
              onChangeText={text => this.setState({MiddleName:text})}/>
         </View>

         <View style={styles.inputWrap}>
            <Text style={styles.EdittextHeading}>Last Name </Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter your Last Name" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({LastName:text})}/>
                     </View>
                     </View>

                     
   <View style={styles.Side_by_side_EditText}>
      <View style={styles.inputWrap}>

             <Text style={styles.EdittextHeading}>DOB</Text>
             <Example/>
            {/* <TextInput  
              style={styles.Edittext}
              placeholder="Enter your DOB" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({DOB:text})}/> */}
</View>

<View style={styles.inputWrap}>
                    <Text style={styles.EdittextHeading}>Phone Number</Text>
            <TextInput  
              style={styles.Edittext}
              keyboardType = 'numeric'
              placeholder="Enter your Phone Number" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({phoneNumber:text})}/>
              </View>


<View style={styles.inputWrap}>
                    <Text style={styles.EdittextHeading}>Alternate Phone Number</Text>
            <TextInput  
              style={styles.Edittext}
              keyboardType = 'numeric'
              placeholder="Enter your Alternate Phone Number" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({Alternate_phone_Number:text})}/>
                  </View>
                  </View>


                                     
   <View style={styles.Side_by_side_EditText}>
      <View style={styles.inputWrap}>

                    <Text style={styles.EdittextHeading}>Email</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter your Email" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({Email:text})}/>
          </View>
           

          <View style={styles.inputWrap}>
           <Text style={styles.EdittextHeading}>Age</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Age" 
              keyboardType = 'numeric'
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({Age:text})}/>
            </View>
            </View>
            

            <View style={styles.Side_by_side_EditText}>
      <View style={styles.inputWrap}>
                  <Text style={styles.EdittextHeading}>City Town</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="City Town" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({CityTown:text})}/>
</View>
<View style={styles.inputWrap}>
<Text style={styles.EdittextHeading}>Province</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Province"      placeholderTextColor="#30A28C"
  
              onChangeText={text => this.setState({Province:text})}/>


</View>

            </View>



            <Text style={styles.EdittextHeading}>Home Address</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Home Address" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({HomeAddress:text})}/>


              
            <View style={styles.Side_by_side_EditText}>
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


<View style={styles.inputWrap}>
      <Text style={styles.EdittextHeading}>TYPES OF VISIT</Text>
<View   style={{   borderColor: "#30A28C",
        backgroundColor:'#F7F7F7',     
           borderWidth: 1,  borderRadius: 15,  marginHorizontal:20,   marginTop:2, height:50}}> 
          <Picker  
           selectedValue={this.state.PickerSelectedVal}
           placeholderTextColor="#30A28C"
           onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >
  
           <Picker.Item color='#30A28C' label="Clinical Visit" value="Clinical Visit" />
           <Picker.Item color='#30A28C' label="Educational Visit" value="Educational Visit" />
           <Picker.Item color='#30A28C' label="Others" value="Others" />
      
        

           </Picker> 

       
     
     </View>
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

/>

           <Text style= {[{fontFamily:"Montserrat-Bold",justifyContent:'center',color:"#30A28C",fontSize:15}]}>Please Verify above Information is Correct</Text>
           </View>
           <View style={{width:"50%",alignSelf:'flex-end',alignItems:'flex-end',justifyContent:'flex-end'}} >


<TouchableOpacity style={[styles.buttonForm,{marginBottom:10}]}
 onPress={() =>this.props.navigation.navigate("SelectPatient")}
 > 
 <Text style={styles.Button_text_styling}>
 SUBMIT </Text>
</TouchableOpacity>
</View>



</View>
</ScrollView>         

            </View> 
            

      


         
          



     

          {/* <Fragment>
                    <StatusBar barStyle="dark-content" />
                    {!scan && !ScanResult &&
                        <View  >
                     

                            <TouchableOpacity style={styles.buttonGeneral} onPress={this.activeQR} >
                                <Text style={styles.Button_text_styling}>Click to Scan !</Text>
                            </TouchableOpacity>

                        </View>
                    }

                    {ScanResult &&
                        <Fragment>
                            <Text >Result !</Text>
                            <View >
                                <Text>Type : {result.type}</Text>
                                <Text>Result : {result.data}</Text>
                                <Text numberOfLines={1}>RawData: {result.rawData}</Text>
                                <TouchableOpacity style={styles.button} onPress={this.scanAgain} >
                                    <Text >Click to Scan again!</Text>
                                </TouchableOpacity>

                            </View>
                        </Fragment>
                    }


                    {scan &&
                        <QRCodeScanner
                            reactivate={true}
                            showMarker={true}
                            ref={(node) => { this.scanner = node }}
                            onRead={this.onSuccess}
                            
                                   
                            
                            bottomContent={
                                <View style= {{flexDirection: "row", flex: 1,marginTop:50}}>
                                  <View  style={{color: 'black',alignSelf: 'flex-start',justifyContent:'flex-start',alignItems:'flex-start'}} >
                                    <TouchableOpacity  onPress={() => this.scanner.reactivate()}>
                                        <Text style={{color: 'black',marginTop:20,fontWeight:'bold'}} >OK. Got it!</Text>
                                    </TouchableOpacity>
                                    </View>
                                    <View style={{backgroundColor:'red',textAlign:'right', color: 'black',alignSelf: 'flex-end',justifyContent:'flex-end',alignItems:'flex-end'}} >
                                    <TouchableOpacity  onPress={() => this.setState({ scan: false })}>
                                        <Text style={{color: 'black',marginTop:20,fontWeight:'bold'}} >Stop Scan</Text>
                                    </TouchableOpacity>
                                </View>
                                </View>

                            }
                        />
                    }
                </Fragment> */}


     

     
</View>





      </SafeAreaView>
     
      </View>
      
    );
   }
}


