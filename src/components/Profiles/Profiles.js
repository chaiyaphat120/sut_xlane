import React from 'react'
import { View, Text ,Button, Dimensions, Image, ImageBackground, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const width = Dimensions.get('window').width/384
const height = Dimensions.get('window').height/781.3333333333334
const Profile = ({navigation}) => {
    // <Button title="Click" onPress={()=>navigation.replace("main")}/>
    return (
        <KeyboardAwareScrollView style={{flex:1,padding:20}} extraHeight={200} >
            <ScrollView contentContainerStyle={{flex:1,position:'relative'}}  bounces={false}>
                <View style={{flex:0.4,alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:width*200,height:width*200,backgroundColor:'pink',borderRadius:width*200}}>
                        <Image style={{flex:1,resizeMode:'cover',borderRadius:width*384}} source={{uri:"https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/09/monkey-d-luffy-wano.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5"}}/>
                    </View>
                </View>
                <View  style={{height:height*250,padding:width*20,alignItems:'center',justifyContent:'space-evenly'}}>
                    <Text>Chaiyaphat Supharak</Text>
                    <Text>Chaiyaphat@gmail.com</Text>
                    <Text style={{fontFamily:'Kanit-Regular'}}>0824512542 สวัสดี</Text>
                </View>
                
            </ScrollView>
            <TouchableOpacity style={{alignItems:'center',justifyContent:'center',flexDirection:'row',marginTop:"15%"}} onPress={()=>navigation.replace("login")}>
                    <FontAwesomeIcon icon={faSignOutAlt} size={60*height}/>
                    <View style={{width:20}}/>
                    <Text>Logout</Text>
            </TouchableOpacity>
        </KeyboardAwareScrollView>
    )
}

export default Profile
