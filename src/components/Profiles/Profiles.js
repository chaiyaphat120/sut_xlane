import React ,{useEffect}from 'react'
import { View, Text ,Button, Dimensions, Image, ImageBackground, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSelector,useDispatch } from 'react-redux';
import { LoginManager,AccessToken,GraphRequest,GraphRequestManager } from 'react-native-fbsdk'

import {userFacebookValue} from '../../slice/dataUser'
const width = Dimensions.get('window').width/384
const height = Dimensions.get('window').height/781.3333333333334
const Profile = ({navigation}) => {
    const userData = useSelector(userFacebookValue)
    useEffect(() => {
        console.log("userData",userData);
        return () => {
            
        }
    }, [])
    const logout = () =>{
        navigation.replace("login")
            // var current_access_token = userData.token;
            // AccessToken.getCurrentAccessToken().then((data) => {
            //   current_access_token = data.accessToken.toString();
            // }).then(() => {
            //   let logout =
            //   new GraphRequest(
            //     "me/permissions/",
            //     {
            //         accessToken: current_access_token,
            //         httpMethod: 'DELETE'
            //     },
            //     (error, result) => {
            //         if (error) {
            //             console.log('Error fetching data: ' + error.toString());
            //         } else {
            //             LoginManager.logOut();
            //             navigation.replace("login")

            //         }
            //     });
            //   new GraphRequestManager().addRequest(logout).start();
            // })
            // .catch(error => {
            //   console.log(error)
            // });      
    }
    return (
        <KeyboardAwareScrollView style={{flex:1,padding:20}} extraHeight={200} >
            <ScrollView contentContainerStyle={{flex:1,position:'relative'}}  bounces={false}>
                <View style={{flex:0.4,alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:width*200,height:width*200,backgroundColor:'pink',borderRadius:width*200}}>
                        <Image style={{flex:1,resizeMode:'cover',borderRadius:width*384}}  source={{uri:userData.picture !=='' ?`${userData.picture}` : 'https://as1.ftcdn.net/jpg/02/59/39/46/500_F_259394679_GGA8JJAEkukYJL9XXFH2JoC3nMguBPNH.jpg'}}/>
                    </View>
                </View>
                <View  style={{height:height*250,padding:width*20,alignItems:'center',justifyContent:'space-evenly'}}>
                    {/* <Text>{userData.name !=="" ? userData.name:"Firstname Lastname"}</Text>
                    <Text>{userData.email !=='' ?userData.email : "Test@gmailcom" }</Text>
                    <Text style={{fontFamily:'Kanit-Regular'}}>สวัสดี {userData.name}</Text> */}
                    <Text>Firstname Lastname</Text>
                    <Text>test@gmail.com</Text>
                    <Text style={{fontFamily:'Kanit-Regular'}}>เบอร์โทร 0958424541</Text>
                </View>
                
            </ScrollView>
            <View style={{width:"100%",justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity style={{alignItems:'center',justifyContent:'center',flexDirection:'row',marginTop:"15%",backgroundColor:'white',width:"50%",borderRadius:20}} onPress={logout}>
                    <FontAwesomeIcon icon={faSignOutAlt} size={60*height} color="grey"/>
                    <View style={{width:20}}/>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default Profile
