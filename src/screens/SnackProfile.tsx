import {ScrollView,ImageBackground,Pressable, StyleSheet, Text, View ,Image } from 'react-native';
import {useState} from "react"

import RedHeart from '../assets/img/heartRed.png'
import HeartBorder from '../assets/img/heartBorder.png'
import Arrow from '../assets/img/arrow.png'
import backgroundProfile from '../assets/img/profileBack1.jpg'
import Logo from '../assets/img/LogoProfile.jpg'
import Scooter from '../assets/img/scooter.png'
import Time from '../assets/img/clock.png'
import Reviews from '../assets/img/star.png'
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../components/ProfileCard'


export default function SnackProfile(props:any) {
    const [ActiveCategory,SetActiveCategory]=useState('Popular')
    const [IsLiked,SetIsLiked] = useState(false)
    const [Category,SetCategory] = useState([
        {
            name:"Popular",
        },
        {
          name:"Burger",
        },
        {
          name:"Donut",
        },    
        {
          name:"Pizza",
        },  
        {
          name:"Salad",
        },   
        {
          name:"Glasse",
        }
        ,{
          name:"soda",
        }
    ])
  return (
    <LinearGradient colors={['#f5cfc0', '#fbe6dd']} style={{height:'100%'}}>
            <View>
                    <ImageBackground source={backgroundProfile} resizeMode="cover" style={styles.Hero}>
                        <View style={styles.Hero.ImgZone}>
                            <Pressable  onPress={()=>{props.navigation.navigate('Home')}}>
                                <Image source={Arrow} style={styles.Hero.ImgZone.Img}  />
                            </Pressable>
                        </View>
                        <View  style={styles.Hero.ImgZone}>
                            <Pressable  onPress={()=>{SetIsLiked(!IsLiked)}}>
                                {IsLiked ?
                                    <Image source={RedHeart} style={styles.Hero.ImgZone.Img}  />
                                    :
                                    <Image source={HeartBorder} style={styles.Hero.ImgZone.Img}  />
                                }
                            </Pressable>
                        </View>
                    </ImageBackground>
                    <View style={styles.ZoneInformation}>            
                        <View style={styles.Info}>
                            <Image source={Logo} style={styles.Info.Logo}  />
                            <Text style={styles.Info.Title} >BAHSIS SNACK</Text>
                            <View style={styles.Info.AllElement} >
                                <View style={styles.Info.AllElement.Element} >
                                    <Image source={Scooter} style={styles.Info.AllElement.Element.Img}  />
                                    <Text style={styles.Info.AllElement.Element.Text}>Free</Text>
                                </View>
                                <View style={styles.Info.AllElement.Element} >
                                    <Image source={Time} style={styles.Info.AllElement.Element.Img}  />
                                    <Text style={styles.Info.AllElement.Element.Text}>10-20min</Text>
                                </View>
                                <View style={styles.Info.AllElement.Element} >
                                    <Image source={Reviews} style={styles.Info.AllElement.Element.Img}  />
                                    <Text style={styles.Info.AllElement.Element.Text}>4.8</Text>
                                </View>
                            </View>
                        </View>
                        <ScrollView style={styles.ZoneScroll}>
                            <Text style={styles.MenuTitle} >Menu</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {
                                        Category.map((categ,i) =>{
                                        return(
                                            <Pressable key={categ.name} onPress={()=>{SetActiveCategory(categ.name)}}  style={[styles.Category.Btn , ActiveCategory === categ.name ? styles.Category.BtnACtive: styles.Category.BtnNoActive]} >
                                            <Text style={[styles.Category.Btn.text, ActiveCategory === categ.name ? styles.Category.TxtActive: styles.Category.TxtNoActive]}>{categ.name}</Text>
                                            </Pressable>
                                        )
                                        })
                                    }
                            </ScrollView>
                            <View  style={styles.Cards}>
                                {
                                    [...Array(30)].map((x, i) =>
                                    <Card Navigation={props.navigation.navigate}/>
                                    )
                                }
                            </View>
                        </ScrollView>
                    </View>
            </View >
    </LinearGradient>

  );
}

const styles = StyleSheet.create<any>({
    Hero:{
        flexDirection: "row",
        height:250,
        justifyContent:"space-between",
        paddingVertical:60,
        paddingHorizontal:30,
        
        ImgZone:{
            padding:10,
            height:50,
            borderRadius:10,
            backgroundColor:'white',
            Img:{
                width:30,
                height:30
            }
        }
    },
    ZoneInformation:{
        position: "relative",
        bottom:80,
    },
    // ZoneScroll:{
    //     marginBottom:800,
    // },
    Info:{
        padding:20,
        marginHorizontal:20,
        borderRadius:20,
        position: "relative",
        backgroundColor:"#f9f7f7",
        textAlign:'center',
        Logo:{
            borderRadius:100,
            width:100,
            height:100,
            position:"absolute",
            right:'38%',
            bottom:130,
            shadowOffset: {width: 0, height: 0},  
            shadowColor: 'red',  
            shadowOpacity: 0.8,  
            shadowRadius: 20,  
        },
        Title:{
            color:'black',
            fontSize:27,
            fontWeight:'800',
            marginTop:50,
            textAlign:'center',
        },
        AllElement:{
            flexDirection: "row",
            justifyContent:"space-between",
            marginTop:20,
            Element:{
                flexDirection: "row",
                borderRadius:8,
                padding:5,
                alignItems:'center',
                backgroundColor:"white",
                shadowOffset: {width: 0, height: 0},  
                shadowColor: 'red',  
                shadowOpacity: 0.14,  
                shadowRadius: 10,  
                Img:{
                    width:25,
                    height:25,
                },
                Text:{
                    color:'black',
                    fontSize:14,
                    fontWeight:'700',
                    paddingHorizontal:5,
                }
            }
        }

    },
    MenuTitle:{
        color:'black',
        fontSize:20,
        fontWeight:'800',
        paddingHorizontal:20,
        marginVertical:20,
    },
    Category:{
        paddingVertical:20,
        paddingHorizontal:10,
        overflow: 'scroll',
        Btn:{
          borderRadius: 10,
          elevation: 3,
          paddingVertical:10,
          paddingHorizontal:10,
          flexDirection: "row",
          justifyContent:"space-between",    
          marginHorizontal:10,   
          marginVertical:3,   
          textAlign:'center',

          text: {
            fontSize: 15,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            textAlign:'center',
            width:60,
          },
          Icon:{
            width:25,
            height: 25,
          }
        },
        BtnACtive:{
          backgroundColor: '#f75d20',
        },
        BtnNoActive:{
            backgroundColor:"#f9f7f7",
        },
        TxtNoActive:{
          color:'black'
        },
        TxtActive:{
          color: 'white'
        }
  
    },
    Cards:{
        paddingVertical:30,
        paddingHorizontal:10,
        flexDirection: "row",
        justifyContent:"space-between",
        flexWrap: 'wrap'
    }
});