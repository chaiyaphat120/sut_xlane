import React, { useState,useEffect } from 'react'
import { View, Text,SafeAreaView ,StyleSheet,Image ,TextInput, TouchableOpacity ,Button ,ScrollView ,Dimensions, KeyboardAvoidingView} from 'react-native'
import Swiper from 'react-native-swiper'
import 'react-native-get-random-values';
import { useSelector,useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBed,faBath ,faSearch,faSlidersH ,faEdit} from '@fortawesome/free-solid-svg-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {userValue} from '../../slice/usersSlice'
import {height,width} from '../constants'
import {settingSelectionMenuHomeValue ,settingSelectionMenuHomeAction} from '../../slice/configNavogationSlice'

const Home = ({navigation}) => {
    const userState= useSelector(userValue)
    const dispatch = useDispatch()
    const [menu , setMenu] = useState("property-news")  //my-property
    const settingSelectionMenuHome = useSelector(settingSelectionMenuHomeValue)
    const dataImageShow = ()=>{
        return(
            userState.map(e=>{
                return(
                    <TouchableOpacity key={e.id} onPress={()=>navigation.navigate("DetailHome")} style={{alignItems:'center'}}>
                        <Image source={{uri:e.imageUrl}} style={{width:"90%",height:200,resizeMode:'cover'}} />
                    </TouchableOpacity>
                )
            })
        )
    }
    useEffect(() => {
       
    }, [])

    return (
        <SafeAreaView style={styles.main} >
            <View style={styles.input}>
                <View style={{width:"90%",position:'relative',backgroundColor:"white",paddingLeft:10*width,height:height*35,borderRadius:height*25,alignItems:'center',flexDirection:'row',justifyContent:'flex-start'}}>
                    <FontAwesomeIcon icon={faSearch}/>
                    <View style={{width:2,backgroundColor:'#e1e5eb',height:"100%",marginLeft:10*width,}}/>
                    <TextInput placeholder="search"/>
                    <View style={{position:'absolute',right:20*width,flexDirection:'row',height:"100%",alignItems:'center'}}>
                        <View style={{width:2,backgroundColor:'#e1e5eb',height:"100%"}}/>
                        <TouchableOpacity  onPress={()=>navigation.navigate('Filter')}>
                            <FontAwesomeIcon icon={faSlidersH} style={{marginLeft:20*width}} size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <Swiper activeDotColor="tomato" showsButtons={true} nextButton={<Text></Text>} prevButton={<Text></Text>} autoplay={true} autoplayTimeout={5}> 
                    {dataImageShow()}
                </Swiper>
            </View>
            <View style={styles.detail}>
                {settingSelectionMenuHome.selectionHome === "property-news" ?(
                    <React.Fragment>
                        <View style={{width:"100%",height:30*height,flexDirection:'row',justifyContent:'space-between'}}>
                            <TouchableOpacity style={{width:"50%",backgroundColor:'white',borderWidth:1,padding:10,alignItems:'center',justifyContent:'center',borderBottomWidth:1,borderBottomColor:'white'}} >
                                <Text style={{...styles.text1,fontWeight:'bold'}}>Property News</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:"50%",padding:10,alignItems:'center',justifyContent:'center',borderBottomWidth:1,borderBottomColor:'white'}} onPress={()=>dispatch(settingSelectionMenuHomeAction('my-property'))}>
                                <Text style={{...styles.text1,fontWeight:'bold',color:'grey'}}>My Property</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView  style={{borderTopWidth:1}}>
                            <View style={styles.news}>
                                <View style={{width:"50%",backgroundColor:'grey',height:"100%"}}>
                                    <Image source={{uri:'https://www.homenayoo.com/wp-content/uploads/2019/09/Gladden-Condo-Ladprao-1.jpg'}} style={{width:"100%",height:"100%",resizeMode:'cover'}} />
                                </View>
                                <View style={{flexDirection:'column',width:"50%",marginLeft:10}}>
                                    <Text>฿ 5,900,000</Text>
                                    <View style={{flexDirection:'row',}}>
                                        <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                            <Text>2</Text>
                                            <View style={{width:5}}/>
                                            <FontAwesomeIcon icon={faBed} />
                                        </View>
                                        <View style={{width:10}}/>
                                        <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                            <Text>2</Text>
                                            <View style={{width:5}}/>
                                            <FontAwesomeIcon icon={faBath} />
                                        </View>
                                    </View>
                                    <Text numberOfLines={1}  style={{width:"100%"}}>Lsufdsfdsmdoumxplica</Text>
                                    <Text numberOfLines={1}  style={{width:"100%"}}>Lfdfdfipsufdsfdsmdod</Text>
                                </View>
                            </View>
                            <View style={styles.news}>
                                <View style={{width:"50%",backgroundColor:'grey',height:"100%"}}>
                                    <Image source={{uri:'https://www.theriver-condo.com/wp-content/uploads/2015/04/The-River-Bangkok-condo-for-rent-1.jpg'}} style={{width:"100%",height:"100%",resizeMode:'cover'}} />
                                </View>
                                <View style={{flexDirection:'column',width:"50%",marginLeft:10}}>
                                    <Text>฿ 5,900,000</Text>
                                    <View style={{flexDirection:'row',}}>
                                        <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                            <Text>2</Text>
                                            <View style={{width:5}}/>
                                            <FontAwesomeIcon icon={faBed} />
                                        </View>
                                        <View style={{width:10}}/>
                                        <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                            <Text>2</Text>
                                            <View style={{width:5}}/>
                                            <FontAwesomeIcon icon={faBath} />
                                        </View>
                                    </View>
                                    <Text numberOfLines={1}  style={{width:"100%"}}>Lsufdsfdsmdoumxplica</Text>
                                    <Text numberOfLines={1}  style={{width:"100%"}}>Lfdfdfipsufdsfdsmdod</Text>
                                </View>
                            </View>
                            <View style={styles.news}>
                                <View style={{width:"50%",backgroundColor:'grey',height:"100%"}}>
                                    <Image source={{uri:'https://www.theriver-condo.com/wp-content/uploads/2015/04/The-River-Bangkok-condo-for-rent-1.jpg'}} style={{width:"100%",height:"100%",resizeMode:'cover'}} />
                                </View>
                                <View style={{flexDirection:'column',width:"50%",marginLeft:10}}>
                                    <Text>฿ 5,900,000</Text>
                                    <View style={{flexDirection:'row',}}>
                                        <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                            <Text>2</Text>
                                            <View style={{width:5}}/>
                                            <FontAwesomeIcon icon={faBed} />
                                        </View>
                                        <View style={{width:10}}/>
                                        <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                            <Text>2</Text>
                                            <View style={{width:5}}/>
                                            <FontAwesomeIcon icon={faBath} />
                                        </View>
                                    </View>
                                    <Text numberOfLines={1}  style={{width:"100%"}}>Lsufdsfdsmdoumxplica</Text>
                                    <Text numberOfLines={1}  style={{width:"100%"}}>Lfdfdfipsufdsfdsmdod</Text>
                                </View>
                            </View>
                            <View style={styles.news}>
                                <View style={{width:"50%",backgroundColor:'grey',height:"100%"}}>
                                    <Image source={{uri:'https://www.theriver-condo.com/wp-content/uploads/2015/04/The-River-Bangkok-condo-for-rent-1.jpg'}} style={{width:"100%",height:"100%",resizeMode:'cover'}} />
                                </View>
                                <View style={{flexDirection:'column',width:"50%",marginLeft:10}}>
                                    <Text>฿ 5,900,000</Text>
                                    <View style={{flexDirection:'row',}}>
                                        <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                            <Text>2</Text>
                                            <View style={{width:5}}/>
                                            <FontAwesomeIcon icon={faBed} />
                                        </View>
                                        <View style={{width:10}}/>
                                        <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                            <Text>2</Text>
                                            <View style={{width:5}}/>
                                            <FontAwesomeIcon icon={faBath} />
                                        </View>
                                    </View>
                                    <Text numberOfLines={1}  style={{width:"100%"}}>Lsufdsfdsmdoumxplica</Text>
                                    <Text numberOfLines={1}  style={{width:"100%"}}>Lfdfdfipsufdsfdsmdod</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </React.Fragment>
                ):(
                    <React.Fragment>
                        <View style={{width:"100%",height:30*height,flexDirection:'row',justifyContent:'space-between'}}>
                            <TouchableOpacity style={{width:"50%",padding:10,alignItems:'center',justifyContent:'center',borderBottomWidth:2,borderBottomColor:'white'}} onPress={()=>dispatch(settingSelectionMenuHomeAction('property-news')) }>
                                <Text style={{...styles.text1,fontWeight:'bold',color:'grey'}}>Property News</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:"50%",padding:10,alignItems:'center',borderWidth:1,justifyContent:'center',borderBottomWidth:1,borderBottomColor:'white'}} >
                                <Text style={{...styles.text1,fontWeight:'bold'}}>My Property</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={{borderTopWidth:1}}>
                            <View style={styles.news}>
                                <View style={{width:"50%",backgroundColor:'grey',height:"100%"}}>
                                    <Image source={{uri:'https://cloud.ctbuh.org/global-news/2020-09/Risland_GN.jpg'}} style={{width:"100%",height:"100%",resizeMode:'cover'}} />
                                </View>
                                <View style={{flexDirection:'column',width:"50%",marginLeft:10}}>
                                    <View style={{width:"90%",alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                                        <Text>฿ 5,900,000</Text>
                                        <TouchableOpacity onPress={()=>navigation.navigate("EditProperty")}>
                                            <FontAwesomeIcon icon={faEdit} color="tomato"/>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flexDirection:'row',}}>
                                        <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                            <Text>2</Text>
                                            <View style={{width:5}}/>
                                            <FontAwesomeIcon icon={faBed} />
                                        </View>
                                        <View style={{width:10}}/>
                                        <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                            <Text>2</Text>
                                            <View style={{width:5}}/>
                                            <FontAwesomeIcon icon={faBath} />
                                        </View>
                                    </View>
                                    <Text numberOfLines={1}  style={{width:"100%"}}>Lsufdsfdsmdoumxplica</Text>
                                    <Text numberOfLines={1}  style={{width:"100%"}}>Lfdfdfipsufdsfdsmdod</Text>
                                </View>
                            </View>
                            <View style={styles.news}>
                                <View style={{width:"50%",backgroundColor:'grey',height:"100%"}}>
                                    <Image source={{uri:'https://www.sansiri.com/uploads/gallery/2018/07/17/650_4a38d314-0065-4cdf-90c8-94096629ecc7.jpg'}} style={{width:"100%",height:"100%",resizeMode:'cover'}} />
                                </View>
                                <View style={{flexDirection:'column',width:"50%",marginLeft:10}}>
                                    <View style={{width:"90%",alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                                        <Text>฿ 5,900,000</Text>
                                        <TouchableOpacity onPress={()=>navigation.navigate("EditProperty")}>
                                            <FontAwesomeIcon icon={faEdit} color="tomato"/>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flexDirection:'row',}}>
                                        <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                            <Text>2</Text>
                                            <View style={{width:5}}/>
                                            <FontAwesomeIcon icon={faBed} />
                                        </View>
                                        <View style={{width:10}}/>
                                        <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                            <Text>2</Text>
                                            <View style={{width:5}}/>
                                            <FontAwesomeIcon icon={faBath} />
                                        </View>
                                    </View>
                                    <Text numberOfLines={1}  style={{width:"100%"}}>Lsufdsfdsmdoumxplica</Text>
                                    <Text numberOfLines={1}  style={{width:"100%"}}>Lfdfdfipsufdsfdsmdod</Text>
                                </View>
                            </View>
                            <View style={styles.news}>
                                <View style={{width:"50%",backgroundColor:'grey',height:"100%"}}>
                                    <Image source={{uri:'https://www.sansiri.com/uploads/gallery/2018/07/17/650_4a38d314-0065-4cdf-90c8-94096629ecc7.jpg'}} style={{width:"100%",height:"100%",resizeMode:'cover'}} />
                                </View>
                                <View style={{flexDirection:'column',width:"50%",marginLeft:10}}>
                                    <View style={{width:"90%",alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                                        <Text>฿ 5,900,000</Text>
                                        <TouchableOpacity onPress={()=>navigation.navigate("EditProperty")}>
                                            <FontAwesomeIcon icon={faEdit} color="tomato"/>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flexDirection:'row',}}>
                                        <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                            <Text>2</Text>
                                            <View style={{width:5}}/>
                                            <FontAwesomeIcon icon={faBed} />
                                        </View>
                                        <View style={{width:10}}/>
                                        <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                            <Text>2</Text>
                                            <View style={{width:5}}/>
                                            <FontAwesomeIcon icon={faBath} />
                                        </View>
                                    </View>
                                    <Text numberOfLines={1}  style={{width:"100%"}}>Lsufdsfdsmdoumxplica</Text>
                                    <Text numberOfLines={1}  style={{width:"100%"}}>Lfdfdfipsufdsfdsmdod</Text>
                                </View>
                            </View>
                            <View style={styles.news}>
                                <View style={{width:"50%",backgroundColor:'grey',height:"100%"}}>
                                    <Image source={{uri:'https://www.sansiri.com/uploads/gallery/2018/07/17/650_4a38d314-0065-4cdf-90c8-94096629ecc7.jpg'}} style={{width:"100%",height:"100%",resizeMode:'cover'}} />
                                </View>
                                <View style={{flexDirection:'column',width:"50%",marginLeft:10}}>
                                    <View style={{width:"90%",alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                                        <Text>฿ 5,900,000</Text>
                                        <TouchableOpacity onPress={()=>navigation.navigate("EditProperty")}>
                                            <FontAwesomeIcon icon={faEdit} color="tomato"/>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flexDirection:'row',}}>
                                        <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                            <Text>2</Text>
                                            <View style={{width:5}}/>
                                            <FontAwesomeIcon icon={faBed} />
                                        </View>
                                        <View style={{width:10}}/>
                                        <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                            <Text>2</Text>
                                            <View style={{width:5}}/>
                                            <FontAwesomeIcon icon={faBath} />
                                        </View>
                                    </View>
                                    <Text numberOfLines={1}  style={{width:"100%"}}>Lsufdsfdsmdoumxplica</Text>
                                    <Text numberOfLines={1}  style={{width:"100%"}}>Lfdfdfipsufdsfdsmdod</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </React.Fragment>
                )}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#edf0ee'
    },
    input:{
        flex:0.2,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
    },
    input2:{
        width:"90%",
        height:50,
        backgroundColor:'white',
        borderRadius:25,
        borderColor:"white",
        borderWidth:2,
        marginLeft:10,
        marginRight:10,
        fontSize:16,
        paddingLeft:20,
        marginTop:20
    },
    content:{
        flex:0.38,
    },
    detail:{
        flex:0.5,
        padding:20,
        paddingTop:0,
    },
    text1:{
        color:'orange',
        fontSize:20,
        marginBottom:10,

    },
    news:{
        height:120,
        width:"100%",
        // backgroundColor:'pink',
        margin:10,
        marginLeft:0,
        flexDirection:'row'
    },
})
export default Home
