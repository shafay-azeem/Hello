import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput, Image, Alert, Modal,  Pressable,ScrollView} from 'react-native';

import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';

import styles from './Styles/CompleteStyling';
import CheckBox from 'react-native-check-box';
import { Picker } from "@react-native-picker/picker";

export default class CreateSlot extends Component {

    state={
        mrNumber:"",
        password:"",
        sunday: false,
        monday: true,
        tuesday: "",
        wdnesday: "",
        thursday: "",
        friday: "",
        saturday: "",
    }
    
  

  render() {
    
    const {monday} = this.state;
    return (
      <View style={styles.container}>
          <Header name="Create Slot" class= ""/>
          <UnitClerkHeader/>

          <View style = {[styles.cardView91, {marginTop:10}]}>
          <View style = {{marginBottom:0}}>
              <View style = {{alignItems: 'center'}}>

              <Text style = {styles.mediumText}>Create new shedule request</Text>
              <View style = {{flexDirection:'row', marginTop:10}}>
              <View style={{ borderWidth: 1.5, borderColor: "#075430", borderRadius: 15, marginRight: 30, width: 200, height: 40, justifyContent: 'center' }}>
             <TextInput
             placeholder="Start Date" 
           keyboardType = 'numeric'
           placeholderTextColor="#075430"
            onChangeText={text => this.setState({phoneNumber:text})}>
             </TextInput>
           </View>  

           <View style={{ borderWidth: 1.5, borderColor:"#075430", borderRadius: 15, marginRight: 30, width: 200, height: 40, justifyContent: 'center' }}>
           <TextInput
             placeholder="End Date" 
           keyboardType = 'numeric'
           placeholderTextColor="#075430"
            onChangeText={text => this.setState({phoneNumber:text})}>
             </TextInput>
           </View>  


 
           <View style= {{marginRight: 30, width: 120, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft:10}}>
           <CheckBox
                    style={styles.checkBox}


                    onClick={()=>{
                    this.setState({monday
                    })
                  }}
                  isChecked={!monday}
                /><Text style = {[styles.smallText, {fontFamily: 'Montserrat-Light'}]}>Recurring</Text>
            </View>
              </View>

            <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:20}}>
              <View style={{width: '14%',alignItems: 'flex-start'}}>
                    <Text style = {[styles.smallText,{}]}>     Day</Text>
              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <Text style = {[styles.smallText,{}]}>Start Time</Text>

              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <Text style = {[styles.smallText,{}]}>Min Time</Text>

            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <Text style = {[styles.smallText,{}]}>Gap</Text>

            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <Text style = {[styles.smallText,{}]}>End Time</Text>

            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <Text style = {[styles.smallText,{}]}>Slot</Text>

            </View>

        </View>



        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:10}}>
              <View style={{width: '14%',alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
             <CheckBox
                    style={styles.checkBox}


                    onClick={()=>{
                    this.setState({
                    isChecked:!this.state.sunday
                    })
                  }}
                  isChecked={this.state.sunday}
                /><Text style = {[styles.smallText, {fontFamily: 'Montserrat-Light'}]}>Sunday</Text>
              </View>


              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  

              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>


            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>

            
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>

        </View>



        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:10}}>
              <View style={{width: '14%',alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
             <CheckBox
                    style={styles.checkBox}


                    onClick={()=>{
                    this.setState({
                    isChecked:!this.state.isChecked
                    })
                  }}
                  isChecked={this.state.isChecked}
                /><Text style = {[styles.smallText, {fontFamily: 'Montserrat-Light'}]}>Monday</Text>
              </View>


              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  

              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>


            <View style={{width: '14%',alignItems: 'center'}}>
              <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>

            
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>

        </View>

        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:10}}>
              <View style={{width: '14%',alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
             <CheckBox
                    style={styles.checkBox}


                    onClick={()=>{
                    this.setState({
                    isChecked:!this.state.isChecked
                    })
                  }}
                  isChecked={this.state.isChecked}
                /><Text style = {[styles.smallText, {fontFamily: 'Montserrat-Light'}]}>Tuesday</Text>
              </View>


              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  

              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>


            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>

            
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>

        </View>

        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:10}}>
              <View style={{width: '14%',alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
             <CheckBox
                    style={styles.checkBox}


                    onClick={()=>{
                    this.setState({
                    isChecked:!this.state.isChecked
                    })
                  }}
                  isChecked={this.state.isChecked}
                /><Text style = {[styles.smallText, {fontFamily: 'Montserrat-Light'}]}>Wednesday</Text>
              </View>


              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  

              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>


            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>

            
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>

        </View>

        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:10}}>
              <View style={{width: '14%',alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
             <CheckBox
                    style={styles.checkBox}


                    onClick={()=>{
                    this.setState({
                    isChecked:!this.state.isChecked
                    })
                  }}
                  isChecked={this.state.isChecked}
                /><Text style = {[styles.smallText, {fontFamily: 'Montserrat-Light'}]}>Thursday</Text>
              </View>


              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  

              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>


            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>

            
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>

        </View>

        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:10}}>
              <View style={{width: '14%',alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
             <CheckBox
                    style={styles.checkBox}


                    onClick={()=>{
                    this.setState({
                    isChecked:!this.state.isChecked
                    })
                  }}
                  isChecked={this.state.isChecked}
                /><Text style = {[styles.smallText, {fontFamily: 'Montserrat-Light'}]}>Friday</Text>
              </View>


              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  

              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>


            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>

            
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>
           
        </View>

        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:10}}>
              <View style={{width: '14%',alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
             <CheckBox
                    style={styles.checkBox}


                    onClick={()=>{
                    this.setState({
                    isChecked:!this.state.isChecked
                    })
                  }}
                  isChecked={this.state.isChecked}
                /><Text style = {[styles.smallText, {fontFamily: 'Montserrat-Light'}]}>Saturday</Text>
              </View>


              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  

              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>


            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>

            
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={styles.inputViewHeight40}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#075430', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#075430" >
                        
            </TextInput>
           </View>  
            </View>

        </View>
        <View style={{width:"30%",alignSelf:'flex-end',alignItems:'flex-end',justifyContent:'flex-end',flexDirection:'row'}} >


<TouchableOpacity style={[styles.buttonForm,{marginRight:30,marginTop:30}]}
  //  onPress={() =>this.props.navigation.navigate("PatientDemographics")}
   > 
   <Text style={styles.Button_text_styling}>
   SAVE </Text>
 </TouchableOpacity>
 <TouchableOpacity style={[styles.buttonForm,{marginRight:30,marginTop:30}]}
   onPress={() =>this.props.navigation.navigate("HomeScreen")}
   > 
   <Text style={styles.Button_text_styling}>
   CLOSE </Text>
 </TouchableOpacity>
 </View>
        </View>

        </View>
          </View>

      </View>
    )
  }
}