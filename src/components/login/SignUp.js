import React, { useEffect ,useState } from 'react'
import { View, Text , Dimensions, Image, SafeAreaView, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import {height,width} from '../constants'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const STANTDARD = 781
const SignUp = ({navigation}) => {
    const [userName, setUserName] = useState('');
    const [token, setToken] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const handleSignUp = ()=>{
        navigation.goBack()
    }
    const getResponseInfo = (error, result) => {
        if (error) {
          //Alert for the Error
          alert('Error fetching data: ' + error.toString());
        } else {
          //response alert
          console.log(JSON.stringify(result));
          setUserName('Welcome ' + result.name);
          setToken('User Token: ' + result.id);
          setProfilePic(result.picture.data.url);
        }
      };
    return (
        <SafeAreaView style={{flex:1,padding:20,alignItems:'center',justifyContent:'center'}} extraHeight={200} >
            <Text style={{fontSize:25*height,marginBottom:20*height}}>Wellcome To</Text>
            <Image source={require('../../picture/logo.png')} style={{width:width*100,height:width*100,resizeMode:'contain'}} />

            <View style={{width:20,height:20*height}}/>
            <TextInput placeholder="Username / email" style={{fontSize:RFValue(20,STANTDARD),backgroundColor:'white',width:"80%"}}/>

            <View style={{width:20,height:20*height}}/>
            <TextInput placeholder="Password" style={{fontSize:RFValue(20,STANTDARD),backgroundColor:'white',width:"80%"}}/>

            <View style={{width:20,height:20*height}}/>
            <TextInput placeholder="Re-Password" style={{fontSize:RFValue(20,STANTDARD),backgroundColor:'white',width:"80%"}}/>

            <View style={{width:20,height:20*height}}/>
            <TouchableOpacity onPress={handleSignUp} style={{width:width*220,height:45*height,backgroundColor:'red',marginTop:"5%",alignItems:'center',justifyContent:'center',backgroundColor:'#2c3949',borderRadius:65/2*height}}><Text style={{fontSize:RFValue(20,STANTDARD),color:"white"}}>SignUp</Text></TouchableOpacity>
        </SafeAreaView>
    )
}

export default SignUp
