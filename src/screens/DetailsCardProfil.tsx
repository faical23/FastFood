import {ScrollView,ImageBackground,Pressable, StyleSheet, Text, View ,Image } from 'react-native';
import {useState,useEffect} from "react"

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
import BUrger from '../assets/img/BurgerBack.jpg'



export default function SnackProfile(props:any) {
    const [Number,SetNumber]=useState(0)
    const [Price,SetPrice] = useState(7.99)
    const [TotalPrice,SetTotalPrice] = useState(0)
    const [IsLiked,SetIsLiked] = useState(false)
    const [Category,SetCategory] = useState([
        {
            name:"Beef",
        },
        {
          name:"Egg",
        },
        {
          name:"Fromage",
        },    
        {
          name:"Bacon",
        },  
        {
          name:"Cheese",
        },   
        {
          name:"Onion",
        }
        ,{
          name:"Bun",
        }
    ])

    useEffect(()=>{
        SetTotalPrice(Number*Price)
    },[Number])
  return (
    <LinearGradient colors={[]} style={{height:'100%'}}>
        <View style={styles.container}>
                <View style={styles.BodyContainer}>
                    <ScrollView>
                        <View style={styles.Hero}>
                            <View style={styles.Hero.Header}>
                                <View style={styles.Hero.ImgZone}>
                                    <Pressable  onPress={()=>{props.navigation.navigate('SnackProfile')}}>
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
                            </View>
                            <View style={styles.Hero.ZoneBigImg}>
                                <Image source={BUrger} style={styles.Hero.BigImg}  />
                            </View>
                        </View>
                        <View  style={styles.BtnPlusMoin}>
                            <Pressable onPress={()=>{Number !== 0 && SetNumber(Number-1)}}><Text style={styles.BtnPlusMoin.Text}>-</Text></Pressable>
                            <Text style={styles.BtnPlusMoin.Text}>{Number}</Text>
                            <Pressable onPress={()=>{SetNumber(Number+1)}}><Text style={[styles.BtnPlusMoin.Text, styles.BtnPlusMoin.TextPlus]}>+</Text></Pressable>
                        </View>
                        <View  style={styles.ZoneTitle}>
                            <View style={styles.ZoneTitle.Left}>
                                <Text style={styles.ZoneTitle.Left.Title}> Beef Burger</Text>
                                <Text style={styles.ZoneTitle.Left.Description}> Beef patty and special sauce</Text>
                            </View>
                            <View style={styles.ZoneTitle.Right}>
                                <Text style={styles.ZoneTitle.Right.Dollar}>$</Text>
                                <Text style={styles.ZoneTitle.Right.Price}>{Price}</Text>
                            </View>
                        </View>
                        <View style={styles.AllElement} >
                                    <View style={styles.AllElement.Element} >
                                        <Image source={Scooter} style={styles.AllElement.Element.Img}  />
                                        <Text style={styles.AllElement.Element.Text}>Free</Text>
                                    </View>
                                    <View style={styles.AllElement.Element} >
                                        <Image source={Time} style={styles.AllElement.Element.Img}  />
                                        <Text style={styles.AllElement.Element.Text}>10-20min</Text>
                                    </View>
                                    <View style={styles.AllElement.Element} >
                                        <Image source={Reviews} style={styles.AllElement.Element.Img}  />
                                        <Text style={styles.AllElement.Element.Text}>4.8</Text>
                                    </View>
                        </View>
                        <Text style={styles.MenuTitle} >Ingredients</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                        {
                                            Category.map((categ,i) =>{
                                            return(
                                                <Pressable key={categ.name}   style={[styles.Category.Btn]} >
                                                <Text style={[styles.Category.Btn.text]}>{categ.name}</Text>
                                                </Pressable>
                                            )
                                            })
                                        }
                        </ScrollView>
                        <Text style={styles.MenuTitle} >About</Text>
                        <Text style={styles.About} >
                        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise
                        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise
                        </Text>               
                    </ScrollView>
                </View >
                <View style={styles.FooterContainer}>
                    <Pressable style={styles.FooterContainer.Btn}>
                        <Text style={styles.FooterContainer.Btn.Text}>Add to cart ({'$' + TotalPrice})</Text>
                    </Pressable>
                </View>
        </View>

    </LinearGradient>

  );
}

const styles = StyleSheet.create<any>({
    container: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
    },      
    BodyContainer:{
        flex:12,
    },  
    FooterContainer:{
        flex:2,
        paddingHorizontal:20,
        Btn:{
            backgroundColor:'#f75d20',
            width:'100%',
            padding:20,
            borderRadius:13,
            marginVertical:20,
            Text:{
              color:'white',
              textAlign:'center',
              fontSize:18,
              fontWeight:'800',
            }
        }
    },
    Hero:{
        paddingVertical:60,
        paddingHorizontal:30,
        backgroundColor:"#302f3c",
        height:350,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        Header:{
            flexDirection: "row",
            justifyContent:"space-between",
        },
        ImgZone:{
            padding:10,
            height:50,
            borderRadius:10,
            backgroundColor:'white',
            Img:{
                width:30,
                height:30
            }
        },
        BigImg:{
            width:170,
            height:170,
            borderRadius:20,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginVertical:10,
        },
        ZoneBigImg:{
            shadowOffset: {width: 0, height: 0},  
            shadowColor: 'white',  
            shadowOpacity: 0.2,  
            shadowRadius: 20, 
        }
    },
    ZoneInformation:{
        position: "relative",
        bottom:80,
    },
    BtnPlusMoin:{
        backgroundColor:"white",
        width:170,
        borderRadius:10,
        flexDirection: "row",
        padding:14,
        justifyContent:"space-between",
        marginLeft:"auto",
        marginRight:"auto",
        shadowOffset: {width: 0, height: 0},  
        shadowColor: 'red',  
        shadowOpacity: 0.2,  
        shadowRadius: 20, 
        position: "relative",
        bottom:30,
        Text:{
            color:'black',
            fontSize:30,
            fontWeight:'800',
        },
        TextPlus:{
            color:'#f75d20',
        }
    },
    ZoneTitle:{
        flexDirection: "row",
        justifyContent:"space-between",
        marginHorizontal:15,
        Left:{
            width:"70%",
            Title:{
                color:'black',
                fontSize:32,
                fontWeight:'800',
                paddingBottom:8,
            },
            Description:{
                color:'grey',
                fontSize:15,
                fontWeight:'400',
            }
        },
        Right:{
            width:"30%",
            flexDirection: "row",
            alignItems: "baseline",
            Price:{
                color:'black',
                fontSize:32,
                fontWeight:'800',
                paddingBottom:8,
            },
            Dollar:{
                color:'#f75d20',
                fontSize:22,
                fontWeight:'800',
                paddingBottom:8,
            }
        }
    },
    AllElement:{
        flexDirection: "row",
        justifyContent:"space-between",
        marginTop:20,
        marginHorizontal:20,
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
        paddingHorizontal:20,
        overflow: 'scroll',
        Btn:{
          borderRadius: 10,
          elevation: 3,
          paddingVertical:10,
          paddingHorizontal:16,
          flexDirection: "row",
          justifyContent:"space-between",    
          marginHorizontal:10,   
          marginVertical:3,   
          textAlign:'center',
          alignItems:'center',
          backgroundColor:"white",
          shadowOffset: {width: 0, height: 0},  
          shadowColor: 'red',  
          shadowOpacity: 0.14,  
          shadowRadius: 4,  

          text: {
            fontSize: 15,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            textAlign:'center',
            width:70,
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
    About:{
        paddingHorizontal:20,
        color:'grey',
        fontSize:17,
        fontWeight:'300',
    },
    ZoneScroll:{
        height:'100%',
    }
    // ZoneScroll:{
    //     marginBottom:800,
    // },
    // Info:{
    //     padding:20,
    //     marginHorizontal:20,
    //     borderRadius:20,
    //     position: "relative",
    //     backgroundColor:"#f9f7f7",
    //     textAlign:'center',
    //     Logo:{
    //         borderRadius:100,
    //         width:100,
    //         height:100,
    //         position:"absolute",
    //         right:'38%',
    //         bottom:130,
    //         shadowOffset: {width: 0, height: 0},  
    //         shadowColor: 'red',  
    //         shadowOpacity: 0.8,  
    //         shadowRadius: 20,  
    //     },
    //     Title:{
    //         color:'black',
    //         fontSize:27,
    //         fontWeight:'800',
    //         marginTop:50,
    //         textAlign:'center',
    //     },
    //     AllElement:{
    //         flexDirection: "row",
    //         justifyContent:"space-between",
    //         marginTop:20,
    //         Element:{
    //             flexDirection: "row",
    //             borderRadius:8,
    //             padding:5,
    //             alignItems:'center',
    //             backgroundColor:"white",
    //             shadowOffset: {width: 0, height: 0},  
    //             shadowColor: 'red',  
    //             shadowOpacity: 0.14,  
    //             shadowRadius: 10,  
    //             Img:{
    //                 width:25,
    //                 height:25,
    //             },
    //             Text:{
    //                 color:'black',
    //                 fontSize:14,
    //                 fontWeight:'700',
    //                 paddingHorizontal:5,
    //             }
    //         }
    //     }

    // },
    // MenuTitle:{
    //     color:'black',
    //     fontSize:20,
    //     fontWeight:'800',
    //     paddingHorizontal:20,
    //     marginVertical:20,
    // },
    // Category:{
    //     paddingVertical:20,
    //     paddingHorizontal:10,
    //     overflow: 'scroll',
    //     Btn:{
    //       borderRadius: 10,
    //       elevation: 3,
    //       paddingVertical:10,
    //       paddingHorizontal:10,
    //       flexDirection: "row",
    //       justifyContent:"space-between",    
    //       marginHorizontal:10,   
    //       marginVertical:3,   
    //       textAlign:'center',

    //       text: {
    //         fontSize: 15,
    //         lineHeight: 21,
    //         fontWeight: 'bold',
    //         letterSpacing: 0.25,
    //         textAlign:'center',
    //         width:60,
    //       },
    //       Icon:{
    //         width:25,
    //         height: 25,
    //       }
    //     },
    //     BtnACtive:{
    //       backgroundColor: '#f75d20',
    //     },
    //     BtnNoActive:{
    //         backgroundColor:"#f9f7f7",
    //     },
    //     TxtNoActive:{
    //       color:'black'
    //     },
    //     TxtActive:{
    //       color: 'white'
    //     }
  
    // },
    // Cards:{
    //     paddingVertical:30,
    //     paddingHorizontal:10,
    //     flexDirection: "row",
    //     justifyContent:"space-between",
    //     flexWrap: 'wrap'
    // }
});