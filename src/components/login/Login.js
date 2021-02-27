import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { View, Text , Dimensions,StyleSheet, Image, SafeAreaView, TouchableOpacity ,Modal, ActivityIndicator ,TextInput} from 'react-native'
// Import FBSDK
import {
    LoginButton,
    AccessToken,
    GraphRequest,
    GraphRequestManager,
    LoginManager,
  } from 'react-native-fbsdk';
import { useSelector,useDispatch } from 'react-redux';
import {fecthDataUserAction ,fecthTokenFacebookAction} from '../../slice/dataUser'
import {height,width} from '../constants'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const STANTDARD = 781
const login = ({navigation}) => {
    const [userName, setUserName] = useState('');
    const [token, setToken] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [tokenData ,setTokenData] = useState('')
    const [loadingData , setLoadingData] = useState(false)
    const dispatch = useDispatch()
    const handleSignIn = ()=>{
        navigation.replace("main")
    }
    const handleSignUp = ()=>{
        navigation.navigate("signup")
        
    }

    const getResponseInfo = (error, result) => {
      if (error) {
        alert('Error fetching data: ' + error.toString());
      } else {
        dispatch(fecthDataUserAction((result)))
        navigation.replace("main")
      }
    };
    
    const loginWithFacebook = () => {
      setLoadingData(true)
      // Attempt a login using the Facebook login dialog asking for default permissions.
      LoginManager.logInWithPermissions(['public_profile','email']).then(
        login => {
          if (login.isCancelled) {
            console.log('Login cancelled');
          } else {
            AccessToken.getCurrentAccessToken().then((data) => {
              dispatch(fecthTokenFacebookAction(data.accessToken))
              const processRequest = new GraphRequest(
              '/me?fields=name,picture.type(large)',
              null,
              getResponseInfo,
              );
              // Start the graph request.
              new GraphRequestManager()
              .addRequest(processRequest).start();
          });
          }
        },
        error => {
          console.log('Login fail with error: ' + error);
        },
      );
    };

    // const getEmail = async () =>{
    //   try {
    //     console.log({url: `https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=${tokenData}`});
    //     fetch( `https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=${tokenData}`)
    //     .then((response) => (response.json(),setLoadingData(false)))
        
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    return (
        <SafeAreaView style={{flex:1,padding:20,alignItems:'center',justifyContent:'center'}} extraHeight={200} >
            <Text style={{fontSize:25*height,marginBottom:20*height}}>Welcome To</Text>
            <Image source={require('../../picture/logo.png')} style={{width:width*150,height:width*150,resizeMode:'contain'}} />

            <View style={{width:20,height:20*height}}/>
            <TextInput placeholder="Username / email" style={{fontSize:RFValue(20,STANTDARD),backgroundColor:'white',width:"80%"}}/>

            <View style={{width:20,height:20*height}}/>
            <TextInput placeholder="Password" style={{fontSize:RFValue(20,STANTDARD),backgroundColor:'white',width:"80%"}}/>

            <View style={{width:20,height:20*height}}/>
            <TouchableOpacity onPress={handleSignIn}  style={{width:width*220,height:45*height,backgroundColor:'red',marginTop:"5%",alignItems:'center',justifyContent:'center',backgroundColor:'#2c3949',borderRadius:30/2*height}}><Text style={{fontSize:RFValue(20,STANTDARD),color:'white'}}>Login</Text></TouchableOpacity>
            <TouchableOpacity onPress={handleSignUp} style={{width:width*220,height:45*height,backgroundColor:'red',marginTop:"5%",alignItems:'center',justifyContent:'center',backgroundColor:'white',borderRadius:65/2*height}}><Text style={{fontSize:RFValue(20,STANTDARD),color:"#2c3949"}}>SignUp</Text></TouchableOpacity>
            
            {/* <TouchableOpacity onPress={loginWithFacebook}>
              <Image source={require('../../picture/Facebook.gif')} style={{width:50*width,height:50*width,marginTop:10}}/>
            </TouchableOpacity> */}
        </SafeAreaView>
    )
}

export default login
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      fontSize: 20,
      color: '#000',
      textAlign: 'center',
      padding: 10,
    },
    imageStyle: {
      width: 200,
      height: 300,
      resizeMode: 'contain',
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 20,
    },
    footerHeading: {
      fontSize: 18,
      textAlign: 'center',
      color: 'grey',
    },
    footerText: {
      fontSize: 16,
      textAlign: 'center',
      color: 'grey',
    },
  });