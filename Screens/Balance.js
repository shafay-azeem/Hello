import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image ,Button,Pressable,SafeAreaView,alignSelf} from 'react-native';
import CheckBox from 'react-native-check-box';
import balanceinfo from './DATA/balance.json';

export default function Balance(){
    return (
        <View style= {styles.header}>
                
               <View style = {{flexDirection: 'row', width: '33%' ,borderTopLeftRadius:100,borderBottomLeftRadius:100}}>
                   <View style={{flexDirection: 'column',justifyContent:'center'}}>
                   <View style={{alignSelf:'center',marginLeft:100}}>
                   <Text style={{fontSize:20,fontWeight:'bold'}}>Opening Balance </Text>
                   </View>
                   
                   <View style={{marginLeft:100,alignItems:'center'}}>
                   <View style={{flexDirection: 'row'}}>
                    <View style={{ width: 40 ,height: 40,marginRight: 6}}>
                    <Image
                    style={{   width: '100%',height: '100%',alignSelf: 'center'}}
                    source={require('../images/dollar.png')}
                   
                    />
                          
                    </View>
                    <Text style={{fontSize:20,lineHeight:40}}>{balanceinfo.openingBal}</Text>
                   </View>
                   </View>
                   </View>
               </View>
               <View style = {{flexDirection: 'row', width: '33%' , alignItems: 'center',justifyContent: 'center'}}>
               <View style={{flexDirection: 'column',justifyContent:'center'}}>
                   <View style={{alignSelf:'center'}}>
               <Text style={{fontSize:20,fontWeight:'bold'}}>Balance</Text>
               </View>
               <View style={{alignItems:'center'}}>
                   <View style={{flexDirection: 'row'}}>
                    <View style={{ width: 40 ,height: 40,marginRight: 6}}>
                    <Image
                    style={{   width: '100%',height: '100%',alignSelf: 'center'}}
                    source={require('../images/dollar.png')}
                   
                    />
                  </View>
                    <Text style={{fontSize:20,lineHeight:40}}>{balanceinfo.bal}</Text>
                   </View>
                   </View>
                   </View>
               </View>
               <View style = {{flexDirection: 'row', width: '33%' , alignItems: 'center',justifyContent: 'center',borderTopRightRadius:100,borderBottomRightRadius:100}}>
               <View style={{flexDirection: 'column',justifyContent:'center'}}>
                   <View style={{alignSelf:'center'}}>
               <Text style={{fontSize:20,fontWeight:'bold'}}>Closing Balance</Text>
               </View>
               <View style={{alignItems:'center'}}>
                   <View style={{flexDirection: 'row'}}>
                    <View style={{ width: 40 ,height: 40,marginRight: 6}}>
                    <Image
                    style={{   width: '100%',height: '100%',alignSelf: 'center'}}
                    source={require('../images/dollar.png')}
                   
                    />
                  </View>
                    <Text style={{fontSize:20,lineHeight:40}}>{balanceinfo.closingbal}</Text>
                   </View>
                   </View>
                   </View>
               </View>

        </View>

    )}


const styles = StyleSheet.create({
    header: {
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#FFFFFF",
        borderRadius:10,
        margin:10,

    },
    headerText: {
        fontSize: 20,
        fontWeight:'bold',
       color:'#FFFFFF',
    }
})