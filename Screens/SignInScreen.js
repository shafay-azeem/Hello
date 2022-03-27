
import React, {Component} from 'react';
import { Text, View, TextInput, ScrollView,TouchableOpacity, Image ,Button,Pressable,SafeAreaView,} from 'react-native';
import CheckBox from 'react-native-check-box';
import styles from './Styles/CompleteStyling';



import Header from './Header';



export default class SignInScreen extends Component {
  constructor(props){
    super(props)

   }
    state={
        Username:"",
        password:""
  }

  render(){
     return (
      <ScrollView >
      <SafeAreaView>
           <Header name="SIGN IN" class= ""/>
           
             <View style={styles.containerForSignIn}>
           <View style={styles.InsideConatiner1}>
           {/* <View  style={[styles.EMRheading]}  > */}
            <View >
               <Image style={styles.image}
                source={require('../images/logo.png')}>
                </Image>

                
                </View>
                {/* </View> */}

                <View  >
                <Text style={[styles.TextHeading,styles.MontserratBold]}>
                 ELECTRONIC MEDICAL RECORD
                </Text>
                
                 
                 </View>
                 </View>

          <View style={styles.InsideConatiner2}>
            <View style={{marginTop:150, margin:90}}>
              <View>
          <Text style={[styles.EdittextHeading,styles.MontserratBold]}>USERNAME </Text>
            <TextInput 
            style={[styles.Edittext,styles.MontserratSemiBold]}
              placeholder="Enter your username" 
              placeholderTextColor="#30A28C"
              onChangeText={(text) => this.setState({Username:text})}/>
          </View>


          <View >
           <Text style={[styles.EdittextHeading,styles.MontserratBold]}>PASSWORD </Text>
            <TextInput  
              style={[styles.Edittext,styles.MontserratSemiBold]}
              placeholder="Enter your password" 
              placeholderTextColor="#30A28C"
              secureTextEntry={true}
              onChangeText={text => this.setState({password:text})}/>
          </View>

       <View style={{flexDirection:'row',marginTop:20}}>
        <CheckBox

      
         
        style={styles.checkboxContainer}
       onClick={()=>{
         this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    RightText={"Remember Me"}

     
   
/>
<Text style={ [styles.MontserratRegular,{marginTop:10,fontSize:15}]}>Remember Me</Text>
<TouchableOpacity style={[styles.forgotPassword,]}>
<Text style={[styles.MontserratRegular,{color:"red",fontSize:15}]}>Forgot Password ?</Text>
</TouchableOpacity>
</View>

<TouchableOpacity style={styles.buttonSignIn}
             onPress={() => this.props.navigation.navigate('HomeScreen')} > 
             <Text style={styles.Button_text_styling}>
             SIGN IN </Text>
            
           </TouchableOpacity>

</View>
</View>

        
        
        </View>
     
        </SafeAreaView>
           </ScrollView>
      
     


      );
  

  }
}
