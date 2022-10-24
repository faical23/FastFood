import {TextInput,ScrollView,ImageBackground,Pressable, StyleSheet, Text, View ,Image } from 'react-native';
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
import Livraison from '../assets/img/direct_supplier.png'

const CardBasket = (props:any) =>{
    const [Number,SetNumber]=useState(0)

    return(
        <View style={styles.Card}>  
        <View style={styles.Card.ZoneImg}>  
            <Image style={styles.Card.ZoneImg.Img} source={BUrger}  />
        </View>
        <View style={styles.Card.Info}>  
            <Text style={styles.Card.Info.Title}>CHICKEN BURGER</Text>
            <View  style={styles.Card.Info.MoreDetails}>
                <View  style={styles.BtnPlusMoin}>
                    <Pressable onPress={()=>{Number !== 0 && SetNumber(Number-1)}}><Text style={styles.BtnPlusMoin.Text}>-</Text></Pressable>
                    <Text style={styles.BtnPlusMoin.Text}>{Number}</Text>
                    <Pressable onPress={()=>{SetNumber(Number+1)}}><Text style={[styles.BtnPlusMoin.Text, styles.BtnPlusMoin.TextPlus]}>+</Text></Pressable>
                </View>
                <Text style={styles.Card.Info.MoreDetails.Text}>$8.99</Text>
            </View>
        </View>
        </View>
    )
}


export default function Basket(props:any) {
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
                        <View style={styles.Hero}>
                            <View style={styles.Hero.Header}>
                                <View style={styles.Hero.ImgZone}>
                                    <Pressable  onPress={()=>{props.navigation.navigate('Home')}}>
                                        <Image source={Arrow} style={styles.Hero.ImgZone.Img}  />
                                    </Pressable>
                                </View>
                            </View>
                            <View style={styles.Hero.ZoneBigImg}>
                                <Image source={Livraison} style={styles.Hero.BigImg}  />
                            </View>
                        </View>
                        <ScrollView style={{marginVertical:20}}>
                            <>
                                {
                                    [...Array(2)].map((x, i) =>
                                        <CardBasket key={i}/>
                                    )
                                }
                            </>
                            <View style={styles.CodePromo}>
                                    <TextInput  style={styles.CodePromo.Input}   placeholder="Promo Code" />
                                    <Pressable  style={styles.CodePromo.Btn}><Text style={styles.CodePromo.Btn.Text}>Valide</Text></Pressable>
                            </View>
                            <View style={styles.Price}>
                                <Text style={styles.Price.Text}>Subtotal</Text>
                                <Text style={styles.Price.Text}>$44.00</Text>
                            </View>
                            <View style={styles.Price}>
                                <Text style={styles.Price.Text}>Promocode</Text>
                                <Text style={styles.Price.Text}>- $6.00</Text>
                            </View>
                            <View style={styles.Total}>
                                <Text style={styles.Total.Text}>Total</Text>
                                <Text style={styles.Total.Text}>$38.00</Text>
                            </View>

                        </ScrollView>
                </View >
                <View style={styles.FooterContainer}>
                    <Pressable style={styles.FooterContainer.Btn}>
                        <Text style={styles.FooterContainer.Btn.Text}>Order</Text>
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
        height:200,
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
            width:120,
            height:120,
            borderRadius:20,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginVertical:10,
            position: 'relative',
            bottom: 60,
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
        width:100,
        borderRadius:10,
        flexDirection: "row",
        paddingVertical:3,
        paddingHorizontal:10,
        justifyContent:"space-between",
        shadowOffset: {width: 0, height: 0},  
        shadowColor: 'red',  
        shadowOpacity: 0.1,  
        shadowRadius: 20, 
        backgroundColor: '#e0e2e4',
        Text:{
            color:'black',
            fontSize:25,
            fontWeight:'800',
        },
        TextPlus:{
            color:'#f75d20',
        }
    },
    Card:{
        backgroundColor:"white",
        marginHorizontal:20,
        marginBottom:10,
        flexDirection: "row",
        justifyContent: "space-between",
        padding:20,
        borderRadius:20,
        shadowOffset: {width: 0, height: 0},  
        shadowColor: 'red',  
        shadowOpacity: 0.03,  
        shadowRadius: 20, 
        ZoneImg:{
            width:'30%',
            Img:{
                width:80,
                height:80,
                borderRadius:20,
            }
        },
        Info:{
            Title:{
                color:'black',
                fontSize:22,
                fontWeight:'800',
                marginBottom:15,
            },
            MoreDetails:{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems:'center',
                Text:{
                    color:'black',
                    fontSize:20,
                    fontWeight:'800',
                },
            }
        }

    },
    CodePromo:{
        backgroundColor:"white",
        marginHorizontal:20,
        marginBottom:10,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical:10,
        paddingHorizontal:15,
        borderRadius:15,
        alignItems:'center',
        Btn:{
            width:80,
            flexDirection: "row",
            paddingVertical:7,
            paddingHorizontal:0,
            backgroundColor: '#f75d20',
            borderRadius:10,
            Text:{
                color: 'white',
                fontSize:14,
                fontWeight:'800',
                textAlign: 'center',
                width:"100%",
            }
        },
        Input:{
            borderWidth:1,
            borderColor:"black",
            paddingVertical:7,
            paddingHorizontal:4,
            width:"70%",
            borderRadius:10,

        }
    },
    Price:{
        marginHorizontal:25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical:10,
        borderBottomColor: '#969696',
        paddingBottom:4,
        borderBottomWidth: 0.4,
        Text:{
            color:'#969696',
            fontSize:16,
            fontWeight:'700',
        }
    },
    Total:{
        marginHorizontal:25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        Text:{
            color:'Black',
            fontSize:18,
            fontWeight:'800',
        }
    }



    // ZoneTitle:{
    //     flexDirection: "row",
    //     justifyContent:"space-between",
    //     marginHorizontal:15,
    //     Left:{
    //         width:"70%",
    //         Title:{
    //             color:'black',
    //             fontSize:32,
    //             fontWeight:'800',
    //             paddingBottom:8,
    //         },
    //         Description:{
    //             color:'grey',
    //             fontSize:15,
    //             fontWeight:'400',
    //         }
    //     },
    //     Right:{
    //         width:"30%",
    //         flexDirection: "row",
    //         alignItems: "baseline",
    //         Price:{
    //             color:'black',
    //             fontSize:32,
    //             fontWeight:'800',
    //             paddingBottom:8,
    //         },
    //         Dollar:{
    //             color:'#f75d20',
    //             fontSize:22,
    //             fontWeight:'800',
    //             paddingBottom:8,
    //         }
    //     }
    // },
    // AllElement:{
    //     flexDirection: "row",
    //     justifyContent:"space-between",
    //     marginTop:20,
    //     marginHorizontal:20,
    //     Element:{
    //         flexDirection: "row",
    //         borderRadius:8,
    //         padding:5,
    //         alignItems:'center',
    //         backgroundColor:"white",
    //         shadowOffset: {width: 0, height: 0},  
    //         shadowColor: 'red',  
    //         shadowOpacity: 0.14,  
    //         shadowRadius: 10,  
    //         Img:{
    //             width:25,
    //             height:25,
    //         },
    //         Text:{
    //             color:'black',
    //             fontSize:14,
    //             fontWeight:'700',
    //             paddingHorizontal:5,
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
    //     paddingHorizontal:20,
    //     overflow: 'scroll',
    //     Btn:{
    //       borderRadius: 10,
    //       elevation: 3,
    //       paddingVertical:10,
    //       paddingHorizontal:16,
    //       flexDirection: "row",
    //       justifyContent:"space-between",    
    //       marginHorizontal:10,   
    //       marginVertical:3,   
    //       textAlign:'center',
    //       alignItems:'center',
    //       backgroundColor:"white",
    //       shadowOffset: {width: 0, height: 0},  
    //       shadowColor: 'red',  
    //       shadowOpacity: 0.14,  
    //       shadowRadius: 4,  

    //       text: {
    //         fontSize: 15,
    //         lineHeight: 21,
    //         fontWeight: 'bold',
    //         letterSpacing: 0.25,
    //         textAlign:'center',
    //         width:70,
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
    // About:{
    //     paddingHorizontal:20,
    //     color:'grey',
    //     fontSize:17,
    //     fontWeight:'300',
    // },
    // ZoneScroll:{
    //     height:'100%',
    // }
    
});