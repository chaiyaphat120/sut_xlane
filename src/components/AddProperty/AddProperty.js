import React, {useState} from 'react';
import {Text, View ,SafeAreaView ,Dimensions, ScrollView, TextInput ,Switch, Button ,Image, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ImagePicker from 'react-native-image-crop-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera ,faFolderOpen} from '@fortawesome/free-solid-svg-icons'
import {v4 as uuidv4} from 'uuid'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const STANTDARD = 781
const AddProperty = ()=> {
  const [listingType ,setListingType] = useState('all')
  const [propertyType ,setPropertyType] = useState('all')
  const [prices , setPrices] = useState('')
  const [size , setSize] = useState('')
  const [bedrooms , setBedrooms] = useState('')
  const [bathrooms , setBathrooms] = useState('')
  const [description , setDescription] = useState('')
  const [locations,setLocations] = useState('')
  const [telephone,setTelephone] = useState('')
  const [email,setEmail] = useState('')

  const width = Dimensions.get('window').width/384
  const height = Dimensions.get('window').height/781.3333333333334

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const [pathPictureArray , setPathPictureArray] = useState([])


  const uploadPictureWithCamera = () =>
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      const path = {uri: image.path}
      setPathPictureArray(e=>[...e,{id:uuidv4(),path}]);
    });
  
    const uploadPictureWithPhone =()=>{
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        const path = {uri: image.path}
        setPathPictureArray(e=>[...e,{id:uuidv4(),path}]);
      });
    }

    // telephone 
    const onTextChange = (text) => {
      var cleaned = ('' + text).replace(/\D/g, '')
      var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
      if (match) {
          var intlCode = (match[1] ? '+1 ' : ''),
              number = [intlCode, '(', match[2], ') - ', match[3], '-', match[4]].join('');
              setTelephone(
                number
              );
          return;
      }
      setTelephone(
        text
      );
  }

    return (
      <SafeAreaView style={{flex:1,padding:20}}>
        <View style={{height:height*70,borderBottomWidth:1,paddingBottom:10*height ,alignItems:'flex-start',justifyContent:'flex-start',flexDirection:'row',marginBottom:20}}>
          <Image source={require('../../picture/logo.png')} style={{height:height*60,resizeMode:'center',width:60*height}}/>
          <TouchableOpacity style={{width:"35%",height:"100%",marginHorizontal:10,alignItems:'center',justifyContent:'center',backgroundColor:'#b5c99a',borderRadius:10}}><Text style={{fontSize:RFValue(20,STANTDARD),fontWeight:'bold'}}>Appoval</Text></TouchableOpacity>
          <TouchableOpacity style={{width:"35%",height:"100%",marginHorizontal:10,alignItems:'center',justifyContent:'center',backgroundColor:'#ee6c4d',borderRadius:10}}><Text style={{fontSize:RFValue(20,STANTDARD),fontWeight:'bold',color:'#fff'}}>Appoval</Text></TouchableOpacity>
        </View>

        <ScrollView>
          <View style={{minHeight:height*300}}>
            <View style={{flexDirection:'row',width:"100%",justifyContent:'space-between',alignItems:'center'}}>
              <Text>Listing Type</Text>
              <DropDownPicker
                items={[
                  {label: 'All', value: 'all'},
                  {label: 'USA', value: 'usa'},
                  {label: 'UK', value: 'uk'},
                  {label: 'France', value: 'france'},
                ]}
                defaultValue={listingType}
                containerStyle={{height: 40,width:"50%"}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={(item) =>
                  setListingType(item.value)
                }
              />
            </View>
            
            <View style={{flexDirection:'row',width:"100%",justifyContent:'space-between',alignItems:'center',marginTop:"5%"}}>
              <Text>Listing Type</Text>
              <DropDownPicker
                items={[
                  {label: 'All', value: 'all'},
                  {label: 'USA', value: 'usa'},
                  {label: 'UK', value: 'uk'},
                  {label: 'France', value: 'france'},
                ]}
                defaultValue={propertyType}
                containerStyle={{height: 40,width:"50%"}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={(item) =>
                  setPropertyType(item.value)
                }
              />
            </View>
            <View style={{width:"100%",flexDirection:'row',alignItems:'center' ,justifyContent:'space-between'}}>
              <Text>Price(฿)</Text>
              <TextInput onChangeText={(e)=>setPrices(e)} value={prices}   style={{width:"50%",backgroundColor:'white',borderRadius:10,marginTop:10}}/>
            </View>
            <View style={{width:"100%",flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <Text>Size(sqm)</Text>
              <TextInput onChangeText={(e)=>setSize(e)} value={size}   style={{width:"50%",backgroundColor:'white',borderRadius:10,marginTop:10}}/>
            </View>
            <View style={{width:"100%",flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <Text>Bedrooms</Text>
              <TextInput onChangeText={(e)=>setBedrooms(e)} value={bedrooms}   style={{width:"50%",backgroundColor:'white',borderRadius:10,marginTop:10}}/>
            </View>
            <View style={{width:"100%",flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <Text>Bathrooms</Text>
              <TextInput onChangeText={(e)=>setBathrooms(e)} value={bathrooms}   style={{width:"50%",backgroundColor:'white',borderRadius:10,marginTop:10}}/>
            </View>
            <View style={{width:"100%",flexDirection:'column',alignItems:'flex-start',justifyContent:'space-between',marginTop:20}}>
              <Text>Description</Text>
              <TextInput multiline={true}   editable numberOfLines={4}  onChangeText={(e)=>setDescription(e)} value={description}  style={{width:"100%",backgroundColor:'white',borderRadius:10,marginTop:15,padding:5}} returnKeyType="done"/>
            </View>

            <View style={{width:"100%",flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <Text>Location</Text>
              <TextInput onChangeText={(e)=>setLocations(e)} value={locations}   style={{width:"50%",backgroundColor:'white',borderRadius:10,marginTop:10}}/>
            </View>

            <View style={{width:"100%",flexDirection:'column',alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{alignSelf:'flex-start',marginTop:30}}>Factilities</Text>
              <View style={{flexDirection:'row',justifyContent:'space-between',width:"100%",paddingLeft:20,marginTop:10 ,borderTopWidth:1,borderBottomWidth:1,paddingVertical:10*height}}>
                <Text>Car Parking</Text>
                <Switch
                      trackColor={{ false: "#767577", true: "#81b0ff" }}
                      thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                  />
                  
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',width:"100%",paddingLeft:20,paddingLeft:20 ,borderBottomWidth:1,paddingVertical:10*height}}>
                <Text>Swimming Pool</Text>
                <Switch
                      trackColor={{ false: "#767577", true: "#81b0ff" }}
                      thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch2}
                      value={isEnabled2}
                  />
                  
              </View>
            </View>
            {/* picture  */}
            <View style={{flexDirection:'row'}}>
              {pathPictureArray.length !==0 ? (
                <ScrollView horizontal={true}>
                  {pathPictureArray.map(e=>{
                      return(
                        <View style={{width:width*150,height:width*150,padding:10}} key={e.id}>
                          <Image source={e.path} style={{width:"100%" ,height:"100%" ,resizeMode:'cover' }}/>
                        </View>
                      )
                    })}
                </ScrollView>
              ):( 
                  <View  style={{width:width*150,height:width*150,padding:10}}>
                      <Image source={{uri:'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png'}} style={{width:"100%",height:'100%',resizeMode:'cover'}}/>
                  </View>
              )}
            </View>

            <View style={{width:"100%",height:50*height,flexDirection:'row',justifyContent:'space-evenly',marginTop:"5%"}}>
              <TouchableOpacity onPress={uploadPictureWithCamera} style={{width:"45%",backgroundColor:'#f8f9fa',borderRadius:15,alignItems:'center',justifyContent:'space-evenly',flexDirection:'row',}}>
                <FontAwesomeIcon icon={faCamera} size={30}/>
                <Text>Take Carema</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={uploadPictureWithPhone} style={{width:"45%",backgroundColor:'#f8f9fa',borderRadius:15,alignItems:'center',justifyContent:'space-evenly',flexDirection:'row'}}>
              <FontAwesomeIcon icon={faFolderOpen} size={30}/>
                <Text> Upload Picture</Text>
              </TouchableOpacity>
            </View>
            {/* picture  */}


            {/* telephone  */}
            <View style={{width:"100%",flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20*height,borderTopWidth:1}}>
              <Text>Telephone</Text>
              <TextInput 
                    onChangeText={(e)=>onTextChange(e)}
                    value={telephone}
                    textContentType='telephoneNumber' 
                    dataDetectorTypes='phoneNumber' 
                    keyboardType='phone-pad' 
                    style={{width:"70%",backgroundColor:'white',borderRadius:10,marginTop:10}}
                    maxLength={16}
                />
            </View>

            <View style={{width:"100%",flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <Text>Email</Text>
              <TextInput onChangeText={(e)=>setEmail(e)} value={email}  style={{width:"70%",backgroundColor:'white',borderRadius:10,marginTop:10}}/>
            </View>

          </View>
        </ScrollView>
        
      </SafeAreaView>
    );
}
export default AddProperty