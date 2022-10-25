import {TextInput,ScrollView,ImageBackground,Pressable, StyleSheet, Text, View ,Image } from 'react-native';
import {useState,useEffect} from "react"
import Arrow from '../assets/img/arrow.png'
import { LinearGradient } from 'expo-linear-gradient';
import BUrger from '../assets/img/BurgerBack.jpg'
import Livraison from '../assets/img/direct_supplier.png'
import Footer from '../components/Footer'
import RedHeart from '../assets/img/heartRed.png'

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
                <Text style={styles.Card.Info.MoreDetails.Text}>$8.99</Text>
                <View  style={styles.BtnPlusMoin}>
                    <Pressable>
                        <Image source={RedHeart} style={{width: 30,height: 30}} />
                    </Pressable>
                </View>
            </View>
        </View>
        </View>
    )
}


export default function Bookmark({...navigation}) {
    const [Number,SetNumber]=useState(0)
    const [Price,SetPrice] = useState(7.99)
    const [TotalPrice,SetTotalPrice] = useState(0)

    useEffect(()=>{
        SetTotalPrice(Number*Price)
    },[Number])
  return (
    <LinearGradient colors={[]} style={{height:'100%'}}>
        <View style={styles.container}>
                <View style={styles.BodyContainer}>
                        <Text style={styles.BigTitle}>Your favourite food</Text>
                        <Text style={styles.desription}>
                        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise 
                        </Text>
                        <ScrollView style={{marginVertical:20}}>
                            <>
                                {
                                    [...Array(6)].map((x, i) =>
                                        <CardBasket key={i}/>
                                    )
                                }
                            </>
                        </ScrollView>
                </View >
                <Footer navigation={navigation}/>

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
    BigTitle:{
        color:'black',
        fontSize:25,
        fontWeight:'800',
        marginHorizontal:20,
        paddingTop:60,
        marginVertical:20,
    }  ,
    desription:{
        color:'grey',
        fontSize:17,
        fontWeight:'300',
        marginHorizontal:20,
        marginVertical:10,
        lineHeight: 25,
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
        // backgroundColor:"#302f3c",
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
        width:50,
        borderRadius:10,
        flexDirection: "row",
        paddingVertical:8,
        paddingHorizontal:8,
        justifyContent:"space-between",
        shadowOffset: {width: 0, height: 0},  
        shadowColor: 'red',  
        shadowOpacity: 0.1,  
        shadowRadius: 20, 
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
        paddingVertical:10,
        paddingHorizontal:20,
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
                fontSize:20,
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
});