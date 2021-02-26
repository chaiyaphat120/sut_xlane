import React, { useEffect } from 'react'
import { View, Text , Dimensions, Image, SafeAreaView, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import {height,width} from '../constants'

const login = ({navigation}) => {
    const handleSignIn = ()=>{
        navigation.replace("main")
    }
    const handleSignUp = ()=>{
        navigation.navigate("signup")
    }
    return (
        <SafeAreaView style={{flex:1,padding:20,alignItems:'center',justifyContent:'center'}} extraHeight={200} >
            <Text style={{fontSize:25*height,marginBottom:20*height}}>Wellcome To</Text>
            <Image source={require('../../picture/logo.png')} style={{width:width*150,height:width*150,resizeMode:'contain'}} />

            <View style={{width:20,height:20*height}}/>
            <TextInput placeholder="Username / email" style={{fontSize:20*height,backgroundColor:'white',width:"80%"}}/>

            <View style={{width:20,height:20*height}}/>
            <TextInput placeholder="Password" style={{fontSize:20*height,backgroundColor:'white',width:"80%"}}/>

            <View style={{width:20,height:20*height}}/>
            <TouchableOpacity onPress={handleSignIn}  style={{width:width*220,height:50*height,backgroundColor:'red',marginTop:"5%",alignItems:'center',justifyContent:'center',backgroundColor:'#2c3949',borderRadius:30/2*height}}><Text style={{fontSize:20*height,color:'white'}}>Login</Text></TouchableOpacity>
            <TouchableOpacity onPress={handleSignUp} style={{width:width*220,height:50*height,backgroundColor:'red',marginTop:"5%",alignItems:'center',justifyContent:'center',backgroundColor:'white',borderRadius:65/2*height}}><Text style={{fontSize:20*height,color:"#2c3949"}}>SignUp</Text></TouchableOpacity>
        </SafeAreaView>
    )
}

export default login
