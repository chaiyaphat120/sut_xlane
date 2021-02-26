import React from 'react';
import {View, Text, StyleSheet ,Dimensions ,TextInput, ScrollView ,Image} from 'react-native';
import MapView, {Marker,PROVIDER_GOOGLE} from 'react-native-maps';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const width = Dimensions.get('window').width/384
const height = Dimensions.get('window').height/781.3333333333334
const STANTDARD = 781
const NearMe = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={{width:"100%",height:height*120 ,alignItems:'flex-end',justifyContent:'space-between'}}>
        <View style={{width:'60%',height:height*45,backgroundColor:'white',borderRadius:40/2*height}}>
          <TextInput placeholder="Lat Long" style={{paddingLeft:10}}/>
        </View>
        <View style={{width:'100%',height:height*60,backgroundColor:'white',borderRadius:40/2*height,paddingLeft:10,flexDirection:'row' ,alignItems:'center',justifyContent:'flex-start'}}>
          <FontAwesomeIcon icon={faSearch}/>
          <TextInput placeholder="ค้นหา" style={{paddingLeft:5 ,fontSize:RFValue(20,STANTDARD)}}/>
        </View>
      </View>
      <MapView
        mapType="satellite"
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
      <View style={{width:"100%",height:200*height,backgroundColor:'red',marginTop:'2%'}}>
      <Image style={{flex:1,resizeMode:'cover'}} source={{uri:"https://pix10.agoda.net/hotelImages/743/74369/74369_14032515480018848024.jpg?s=1024x768"}}/>
      </View>
      </ScrollView>
    </View>
  );
};
export default NearMe;
const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20
  },
  map: {
    height:350*height,
    width:"100%",
    marginTop:30*height
  },
});
