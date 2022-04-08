import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

class UserModel {

    stateName="";
    username;
    email;
    mobile;
    gender;
    address;

    constructor() {

        // this.stateName = stateName;
    }

    setStateName(stateName) {
        this.stateName = stateName;
    }

    getStateName(){
        return this.stateName;
    }

    setUserName(username) {
        this.username = username;
    }

    setEmail(email) {
        this.email = email;
    }

    setMobile(mobile) {
        this.mobile = mobile;
    }

    setGender(gender) {
        this.gender = gender;
    }

    setAddress(address) {
        this.address = address;
    }
}

const GlobalUserModel = new UserModel(); 
export default GlobalUserModel;