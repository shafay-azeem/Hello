import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput, Image, Alert, Modal,  Pressable, ScrollView} from 'react-native';


// import DoctorPatientDetails from '../shared/doctorPatientDetails';
import styles from './Styles/CompleteStyling';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';
import CheckBox from 'react-native-check-box';
import { Picker } from "@react-native-picker/picker";


export default class CreateSlot extends Component {

    state={
        mrNumber:"",
        password:""
    }
  

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
          <Header name="CREATE SLOTS" class= ""/>
          <UnitClerkHeader/>
          <PatientHeader />
          <View style = {[styles.cardView91]}>
          <ScrollView style = {{marginBottom:20}}>
              <View style = {{alignItems: 'center',alignSelf:'center'}}>

              <Text style = {styles.mediumText}>Create new shedule request</Text>
              <View style = {{flexDirection:'row', marginTop:20,marginLeft:90}}>
              <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, marginRight: 30, width: 200 ,  backgroundColor:'#F7F7F7'}}>
             <Picker
                itemStyle={{ backgroundColor: "white", color: "#38AB94", fontFamily:"Montserrat-Medium", fontSize:17 }}
                // selectedValue={this.state.PickerSelectedVal}
                style={{textAlign:'right',color:'#38AB94', fontSize:25, borderWidth: 2, borderColor:'black',fontFamily:"Montserrat-Bold"}}>

                <Picker.Item color='#30A28C' label="Select a Doctor" value="0" />
                <Picker.Item color='#30A28C' label="Doctor A" value="1" />
                <Picker.Item color='#30A28C' label="Doctor B" value="2" />
           </Picker>
           </View>  

           <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, marginRight: 30, width: 200 ,  backgroundColor:'#F7F7F7'}}>
             <TextInput
                // selectedValue={this.state.PickerSelectedVal}
                style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                placeholder="Start Date" 
                placeholderTextColor="#30A28C" >
                    
           </TextInput>
           </View>  


           <View style={{ borderWidth: 1.5,borderColor: "#30A28C", borderRadius: 15,width: 200 ,  backgroundColor:'#F7F7F7'}}>
             <TextInput
                // selectedValue={this.state.PickerSelectedVal}
                style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                placeholder="End Date" 
                placeholderTextColor="#30A28C" >
                    
           </TextInput>
           </View>  
           <View style= {{marginRight: 30, width: 120, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft:10}}>
           <CheckBox
                    style={styles.checkBox}


                    onClick={()=>{
                    this.setState({
                    isChecked:!this.state.isChecked
                    })
                  }}
                  isChecked={this.state.isChecked}
                /><Text style = {[styles.smallText, {fontFamily: 'Montserrat-Light'}]}>Recurring</Text>
            </View>
              </View>

            <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:20}}>
              <View style={{width: '14%',alignItems: 'flex-start'}}>
                    <Text style = {[styles.smallText,{marginLeft:30}]}>Day</Text>
              </View>
              <View style={{width: '14%'}}>
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
            <View style={{width: '14%',alignItems: 'center'}}>
            <Text style = {[styles.smallText,{}]}>Add Break</Text>
            </View>
        </View>



        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:20}}>
              <View style={{width: '14%',alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
             <CheckBox
                    style={styles.checkBox}


                    onClick={()=>{
                    this.setState({
                    isChecked:!this.state.isChecked
                    })
                  }}
                  isChecked={this.state.isChecked}
                /><Text style = {[styles.smallText, {fontFamily: 'Montserrat-Light'}]}>Sunday</Text>
              </View>


              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={{ borderWidth: 1.5, borderColor: "#30A28C",borderRadius: 15, width: '90%' ,  backgroundColor:'#F7F7F7'}}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#30A28C">
                        
            </TextInput>
           </View>  

              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%' ,  backgroundColor:'#F7F7F7'}}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#30A28C">
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%',  backgroundColor:'#F7F7F7' }}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>


            <View style={{width: '14%',alignItems: 'center'}}>
              <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%',  backgroundColor:'#F7F7F7' }}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>

            
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%' ,  backgroundColor:'#F7F7F7'}}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center', justifyContent: 'center'}}>
            <CheckBox
                    style={styles.checkBox}


                    onClick={()=>{
                    this.setState({
                    isChecked:!this.state.isChecked
                    })
                  }}
                  isChecked={this.state.isChecked}
                />
            </View>
        </View>



        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:20}}>
              <View style={{width: '14%',alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
             <CheckBox
                    style={{}}


                    onClick={()=>{
                    this.setState({
                    isChecked:!this.state.isChecked
                    })
                  }}
                  isChecked={this.state.isChecked}
                /><Text style = {[styles.smallText, {fontFamily: 'Montserrat-Light'}]}>Monday</Text>
              </View>


              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%' ,  backgroundColor:'#F7F7F7'}}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  

              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%',  backgroundColor:'#F7F7F7' }}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%' ,  backgroundColor:'#F7F7F7'}}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>


            <View style={{width: '14%',alignItems: 'center'}}>
              <View style={{ borderWidth: 1.5,borderColor: "#30A28C", borderRadius: 15, width: '90%',  backgroundColor:'#F7F7F7' }}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>

            
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={{ borderWidth: 1.5, borderColor: "#30A28C",borderRadius: 15, width: '90%',  backgroundColor:'#F7F7F7' }}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center', justifyContent: 'center'}}>
            <CheckBox
                    style={styles.checkBox}


                    onClick={()=>{
                    this.setState({
                    isChecked:!this.state.isChecked
                    })
                  }}
                  isChecked={this.state.isChecked}
                />
            </View>
        </View>

        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:20}}>
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
              <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%',  backgroundColor:'#F7F7F7' }}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  

              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%',  backgroundColor:'#F7F7F7' }}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={{ borderWidth: 1.5, borderColor: "#30A28C",borderRadius: 15, width: '90%' ,  backgroundColor:'#F7F7F7'}}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>


            <View style={{width: '14%',alignItems: 'center'}}>
              <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%',  backgroundColor:'#F7F7F7' }}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>

            
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%',  backgroundColor:'#F7F7F7' }}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center', justifyContent: 'center'}}>
            <CheckBox
                    style={styles.checkBox}


                    onClick={()=>{
                    this.setState({
                    isChecked:!this.state.isChecked
                    })
                  }}
                  isChecked={this.state.isChecked}
                />
            </View>
        </View>

        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:20}}>
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
              <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%' ,  backgroundColor:'#F7F7F7'}}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  

              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%',  backgroundColor:'#F7F7F7' }}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={{ borderWidth: 1.5, borderColor: "#30A28C",borderRadius: 15, width: '90%',  backgroundColor:'#F7F7F7' }}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>


            <View style={{width: '14%',alignItems: 'center'}}>
              <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%' ,  backgroundColor:'#F7F7F7'}}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>

            
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%' ,  backgroundColor:'#F7F7F7'}}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center', justifyContent: 'center'}}>
            <CheckBox
                    style={styles.checkBox}


                    onClick={()=>{
                    this.setState({
                    isChecked:!this.state.isChecked
                    })
                  }}
                  isChecked={this.state.isChecked}
                />
            </View>
        </View>

        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:20}}>
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
              <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%',  backgroundColor:'#F7F7F7' }}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  

              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%' ,  backgroundColor:'#F7F7F7'}}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%' ,  backgroundColor:'#F7F7F7'}}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>


            <View style={{width: '14%',alignItems: 'center'}}>
              <View style={{ borderWidth: 1.5, borderColor: "#30A28C",borderRadius: 15, width: '90%' ,  backgroundColor:'#F7F7F7'}}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>

            
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%',  backgroundColor:'#F7F7F7' }}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center', justifyContent: 'center'}}>
            <CheckBox
                    style={styles.checkBox}


                    onClick={()=>{
                    this.setState({
                    isChecked:!this.state.isChecked
                    })
                  }}
                  isChecked={this.state.isChecked}
                />
            </View>
        </View>

        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:20}}>
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
              <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%' ,  backgroundColor:'#F7F7F7'}}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  

              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%' ,  backgroundColor:'#F7F7F7'}}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%',  backgroundColor:'#F7F7F7' }}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>


            <View style={{width: '14%',alignItems: 'center'}}>
              <View style={{ borderWidth: 1.5,borderColor: "#30A28C", borderRadius: 15, width: '90%' ,  backgroundColor:'#F7F7F7'}}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>

            
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%' ,  backgroundColor:'#F7F7F7'}}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center', justifyContent: 'center'}}>
            <CheckBox
                    style={styles.checkBox}


                    onClick={()=>{
                    this.setState({
                    isChecked:!this.state.isChecked
                    })
                  }}
                  isChecked={this.state.isChecked}
                />
            </View>
        </View>

        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:20}}>
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
              <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%' ,  backgroundColor:'#F7F7F7'}}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  

              </View>
              <View style={{width: '14%',alignItems: 'center'}}>
              <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%' ,  backgroundColor:'#F7F7F7'}}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%' ,  backgroundColor:'#F7F7F7'}}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>


            <View style={{width: '14%',alignItems: 'center'}}>
              <View style={{ borderWidth: 1.5, borderColor: "#30A28C", borderRadius: 15, width: '90%' ,  backgroundColor:'#F7F7F7', }}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="HH:mm" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>

            
            <View style={{width: '14%',alignItems: 'center'}}>
            <View style={{ borderWidth: 1.5,borderColor: "#30A28C", borderRadius: 15, width: '90%',   backgroundColor:'#F7F7F7', }}>
                <TextInput
                    // selectedValue={this.state.PickerSelectedVal}
                    style={{textAlign:'center',color:'#38AB94', fontSize:17, justifyContent: 'center',padding:10}}
                    placeholder="" 
                    placeholderTextColor="#3FB39B" >
                        
            </TextInput>
           </View>  
            </View>
            <View style={{width: '14%',alignItems: 'center', justifyContent: 'center'}}>
            <CheckBox
                    style={styles.checkBox}


                    onClick={()=>{
                    this.setState({
                    isChecked:!this.state.isChecked
                    })
                  }}
                  isChecked={this.state.isChecked}
                />
            </View>

            
        </View>
      
        </View>
        <View style={{width:"30%",alignSelf:'center',alignItems:'center',justifyContent:'center',flexDirection:'row',marginBottom:30}} >


<TouchableOpacity style={[styles.buttonForm,{margin:30}]}
  //  onPress={() =>this.props.navigation.navigate("PatientDemographics")}
   > 
   <Text style={styles.Button_text_styling}>
   SAVE </Text>
 </TouchableOpacity>
 <TouchableOpacity style={[styles.buttonForm]}
   onPress={() =>this.props.navigation.navigate("HomeScreen")}
   > 
   <Text style={styles.Button_text_styling}>
   CLOSE </Text>
 </TouchableOpacity>
 </View>

        </ScrollView>
          </View>

      </View>
    )
  }
}