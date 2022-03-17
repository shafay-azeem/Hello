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
      <ScrollView  >
      <SafeAreaView >
 
      <View style={{backgroundColor:'#38AB94'}}> 
      <Header name="PATIENT REGISTRATION" class= "" />
      <UnitClerkHeader/>
</View>

      <View style={[styles.containerForRegistration]}>
      <View style={[styles.containerWithinScrollView]}>

           
    <View style={styles.Side_by_side_EditText}>
        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>MR Number</Text>
          <TextInput style={styles.Edittext}
          placeholder="Enter" 
           onChangeText={text => this.setState({MRNumber:text})}/>
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>Family Number</Text>
          <TextInput style={styles.Edittext}
           placeholder="Enter" 
            onChangeText={text => this.setState({FamilyNumber:text})} />
        </View>
      </View>
    

   

         <View >
          <Text style={styles.EdittextHeading}>Sehat Safar Number</Text>
          <TextInput  
              style={styles.Edittext}
              placeholder="Enter your SehatSafarNumber" 
              onChangeText={text => this.setState({SehatSafarNumber:text})}/>
         
           <Text style={styles.EdittextHeading}>CNIC Number </Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="CNICNumber" 
              onChangeText={text => this.setState({CNICNumber:text})}/>

             <Text style={styles.EdittextHeading}>First Name</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder=" FirstName" 
              onChangeText={text => this.setState({FirstName:text})}/>


             <Text style={styles.EdittextHeading}>Middle Name</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="MiddleName" 
              onChangeText={text => this.setState({MiddleName:text})}/>


            <Text style={styles.EdittextHeading}>Last Name </Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter your Last Name" 
              onChangeText={text => this.setState({LastName:text})}/>

             <Text style={styles.EdittextHeading}>DOB</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter your DOB" 
              onChangeText={text => this.setState({DOB:text})}/>

                    <Text style={styles.EdittextHeading}>Phone Number</Text>
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


