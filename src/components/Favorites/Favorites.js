import React from 'react'
import { View, Text, SafeAreaView,ScrollView ,Image} from 'react-native'
import {height,width} from '../constants'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const STANTDARD = 781
const Favorites = () => {
    const data = [
        {id:1,imagUrl:'https://cms.dmpcdn.com/travel/2020/02/27/d42f2130-5947-11ea-996a-0d67e83ef09c_original.JPG',message:"Helloword123465"},
        {id:2,imagUrl:'https://cms.dmpcdn.com/travel/2020/02/27/d42f2130-5947-11ea-996a-0d67e83ef09c_original.JPG',message:"Helloword123465"},
        {id:3,imagUrl:'https://cms.dmpcdn.com/travel/2020/02/27/d42f2130-5947-11ea-996a-0d67e83ef09c_original.JPG',message:"Helloword123465"},
        {id:4,imagUrl:'https://cms.dmpcdn.com/travel/2020/02/27/d42f2130-5947-11ea-996a-0d67e83ef09c_original.JPG',message:"Helloword123465"},
        {id:6,imagUrl:'https://cms.dmpcdn.com/travel/2020/02/27/d42f2130-5947-11ea-996a-0d67e83ef09c_original.JPG',message:"Helloword123465"},
        {id:7,imagUrl:'https://cms.dmpcdn.com/travel/2020/02/27/d42f2130-5947-11ea-996a-0d67e83ef09c_original.JPG',message:"Helloword123465"},
        {id:8,imagUrl:'https://cms.dmpcdn.com/travel/2020/02/27/d42f2130-5947-11ea-996a-0d67e83ef09c_original.JPG',message:"Helloword123465"},
        {id:9,imagUrl:'https://cms.dmpcdn.com/travel/2020/02/27/d42f2130-5947-11ea-996a-0d67e83ef09c_original.JPG',message:"Helloword123465"},
        {id:10,imagUrl:'https://cms.dmpcdn.com/travel/2020/02/27/d42f2130-5947-11ea-996a-0d67e83ef09c_original.JPG',message:"Helloword123465"},
        {id:11,imagUrl:'https://cms.dmpcdn.com/travel/2020/02/27/d42f2130-5947-11ea-996a-0d67e83ef09c_original.JPG',message:"Helloword123465"},
    ]
    return (
        <SafeAreaView style={{flex:1,padding:width*20}}>
            <Text style={{marginVertical:20*height,fontSize:RFValue(30,STANTDARD),fontWeight:'bold'}}>Favorites</Text>
            <ScrollView>
                <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'column'}}>
                        {data.map((e,i)=>{
                            return(
                                <View key={e.id} style={{width:width*150,height:width*120,backgroundColor:'red',margin:5*width,display:i%2 ==1 ?'none':null,marginTop:i !=0 ?50*height:0}}>
                                    <Image style={{width:"100%",height:"100%",resizeMode:'cover'}} source={{uri:e.imagUrl}}/>
                                    <Text>fdsfdsfdsfdsf</Text>
                                </View>
                            )
                        })}
                    </View>

                    <View style={{flexDirection:'column'}}>
                        {data.map((e,i)=>{
                            return(
                                <View key={e.id} style={{width:width*150,height:width*120,backgroundColor:'red',margin:5*width,marginTop:i !=1 ?50*height:0,display:i%2 ==0 ?'none':null}}>
                                    <Image style={{width:"100%",height:"100%",resizeMode:'cover'}} source={{uri:e.imagUrl}}/>
                                    <Text>fdsfdsfdsfdsf</Text>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default Favorites
