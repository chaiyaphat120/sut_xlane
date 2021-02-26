import React from 'react'
import { View, Text, SafeAreaView,ScrollView ,Image, ImageBackground} from 'react-native'
import {height,width} from '../constants'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
const STANTDARD = 781
const Favorites = () => {
    const data = [
        {id:1,imagUrl:'https://cms.dmpcdn.com/travel/2020/02/27/d42f2130-5947-11ea-996a-0d67e83ef09c_original.JPG',message:"Helloword123465",like:true},
        {id:2,imagUrl:'https://cms.dmpcdn.com/travel/2020/02/27/d42f2130-5947-11ea-996a-0d67e83ef09c_original.JPG',message:"Helloword123465",like:true},
        {id:3,imagUrl:'https://cms.dmpcdn.com/travel/2020/02/27/d42f2130-5947-11ea-996a-0d67e83ef09c_original.JPG',message:"Helloword123465",like:false},
        {id:4,imagUrl:'https://cms.dmpcdn.com/travel/2020/02/27/d42f2130-5947-11ea-996a-0d67e83ef09c_original.JPG',message:"Helloword123465",like:true},
        {id:6,imagUrl:'https://cms.dmpcdn.com/travel/2020/02/27/d42f2130-5947-11ea-996a-0d67e83ef09c_original.JPG',message:"Helloword123465",like:true},
        {id:7,imagUrl:'https://cms.dmpcdn.com/travel/2020/02/27/d42f2130-5947-11ea-996a-0d67e83ef09c_original.JPG',message:"Helloword123465",like:true},
        {id:8,imagUrl:'https://cms.dmpcdn.com/travel/2020/02/27/d42f2130-5947-11ea-996a-0d67e83ef09c_original.JPG',message:"Helloword123465",like:true},
        {id:9,imagUrl:'https://cms.dmpcdn.com/travel/2020/02/27/d42f2130-5947-11ea-996a-0d67e83ef09c_original.JPG',message:"Helloword123465",like:true},
        {id:10,imagUrl:'https://cms.dmpcdn.com/travel/2020/02/27/d42f2130-5947-11ea-996a-0d67e83ef09c_original.JPG',message:"Helloword123465",like:true},
        {id:11,imagUrl:'https://cms.dmpcdn.com/travel/2020/02/27/d42f2130-5947-11ea-996a-0d67e83ef09c_original.JPG',message:"Helloword123465",like:true},
    ]
    return (
        <SafeAreaView style={{flex:1,padding:width*20}}>
            <Text style={{marginVertical:20*height,fontSize:RFValue(30,STANTDARD),fontWeight:'bold'}}>Favorites</Text>
            <ScrollView>
                <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'column'}}>
                        {data.map((e,i)=>{
                            return(
                                <React.Fragment  key={e.id}>
                                {e.like ? (
                                    <View key={e.id} style={{width:width*150,height:width*120,backgroundColor:'red',margin:5*width,display:i%2 ==1 ?'none':null,marginTop:i !=0 ?50*height:0}}>
                                        <ImageBackground style={{width:"100%",height:"100%",resizeMode:'cover'}} source={{uri:e.imagUrl}}>
                                            <View style={{position:'absolute',right:0,width:30*width,height:30*width,backgroundColor:'white',alignItems:'center',justifyContent:'center',borderRadius:999 }}>
                                                <FontAwesomeIcon color="red" icon={faHeart}/>
                                            </View>
                                        </ImageBackground>
                                        <Text>fdsfdsfdsfdsf</Text>
                                    </View>
                                ):(
                                    null
                                )}
                            </React.Fragment>
                            )
                        })}
                    </View>

                    <View style={{flexDirection:'column'}}>
                        {data.map((e,i)=>{
                            return(
                                <React.Fragment key={e.id}>
                                    {e.like ? (
                                        <View key={e.id} style={{width:width*150,height:width*120,backgroundColor:'red',margin:5*width,display:i%2 ==1 ?'none':null,marginTop:i !=0 ?50*height:0}}>
                                            <ImageBackground style={{width:"100%",height:"100%",resizeMode:'cover'}} source={{uri:e.imagUrl}}>
                                                <View style={{position:'absolute',right:0,width:30*width,height:30*width,backgroundColor:'white',alignItems:'center',justifyContent:'center',borderRadius:999 }}>
                                                    <FontAwesomeIcon color="red" icon={faHeart}/>
                                                </View>
                                            </ImageBackground>
                                            <Text>fdsfdsfdsfdsf</Text>
                                        </View>
                                    ):(
                                        null
                                    )}
                                </React.Fragment>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default Favorites
