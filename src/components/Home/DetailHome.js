import React from 'react'
import { View, Text ,SafeAreaView,Image,Dimensions,TouchableOpacity, ScrollView  } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft ,faPhone ,faEnvelope ,faHeart} from '@fortawesome/free-solid-svg-icons'
import {Linking} from 'react-native'
const width = Dimensions.get('window').width/384
const height = Dimensions.get('window').height/781.3333333333334
const DetailHome = ({navigation}) => {
    console.log(width,height);
    const callPhone = ()=>{
        Linking.openURL(`tel:0854658721`)
    }
    const callMail = ()=>{
        Linking.openURL(`mailto:administrator@sut.ac.th`)
    }
    const LineOpen = () =>{
        Linking.openURL("http://line.me/ti/p/~@suthnews")
    }
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#edf0ee'}}>
            <TouchableOpacity style={{flexDirection:'row',marginTop:10*height,alignItems:'center',marginBottom:10*height}} onPress={()=>navigation.goBack()}>
                <FontAwesomeIcon icon={faAngleLeft} size={width*40}/>
                <Text style={{fontSize:width*20}}>Back</Text>
            </TouchableOpacity>
            <View style={{height:250*height,alignItems:'center',marginBottom:20*height}}>
                <Image source={{uri:'https://sg2-cdn.pgimgs.com/developer-listing/4370109/OUPHO.122053829.V800/Grene-Condo-Donmueang-Songprapha-Don-Mueang-Thailand.jpg'}} style={{width:"90%",height:"100%",resizeMode:'cover'}}/>
            </View>
            <ScrollView>
                <View style={{width:width - 40,marginLeft:20,flex:0.5,marginTop:10}}>
                    <Text style={{fontSize:height*20,color:'tomato'}}>Details</Text>
                    <View style={{ width :width - 40}}>
                        <View style={{flexDirection:'row'}}>
                            <Text>Type : </Text>
                            <Text>Sale</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text>price : </Text>
                            <Text>฿ 5,000,000</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text>Size : </Text>
                            <Text>฿ 2128 sqm</Text>
                        </View>
                    </View>
                    <Text style={{fontSize:height*20,color:'tomato',marginTop:height*15}}>Description</Text>
                    <Text style={{width:width*384 - 20 -20}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequuntur atque ipsum asperiores, laboriosam optio debitis aliquam tenetur neque nobis. A id ratione sapiente distinctio, pariatur corrupti veritatis ipsam repudiandae?</Text>
                    <Text style={{fontSize:height*20,color:'tomato',marginTop:height*15}}>Facilities</Text>
                    <Text>Car packing</Text>
                    <Text>Swingming pool</Text>
                </View>
            </ScrollView>
            <View style={{width:"100%",height:80*height,backgroundColor:'rgba(0,0,0,0)',flexDirection:'row',justifyContent:'flex-end'}}>
                <TouchableOpacity style={{width:width*60,height:width*60,backgroundColor:'white',margin:10,borderRadius:999,alignItems:'center',justifyContent:'center'}} onPress={callPhone}>
                    <FontAwesomeIcon icon={faPhone} size={40*height} color="#892b64"/>
                </TouchableOpacity>
                <TouchableOpacity style={{width:width*60,height:width*60,backgroundColor:'white',margin:10,borderRadius:999,alignItems:'center',justifyContent:'center'}} onPress={callMail}>
                    <FontAwesomeIcon icon={faEnvelope} size={40*height} color="#455e89"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("Favorites")} style={{width:width*60,height:width*60,backgroundColor:'white',margin:10,borderRadius:999,alignItems:'center',justifyContent:'center'}}>
                    <FontAwesomeIcon icon={faHeart} size={40*height} color="#ef233c"/>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default DetailHome
