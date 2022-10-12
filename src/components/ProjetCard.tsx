import {Pressable,Button, StyleSheet, Text, View ,Image,TextInput,ScrollView } from 'react-native';
import burger from '../assets/img/burger.png'
import donut from '../assets/img/donut.png'
import pizza from '../assets/img/pizza.png'
import salad from '../assets/img/salad.png'
import icecream from '../assets/img/ice-cream.png'
import soda from '../assets/img/soda.png'
import CardImg from '../assets/img/CardImg.jpg'
import Star from '../assets/img/star.png'

import {useState} from "react"



export default function Home() {
  return (
        <View style={styles.Cards.Card}>
                            <Image source={CardImg} style={styles.Cards.Card.ImgBack}/>
                            <View style={styles.Cards.Card.Info}>
                                <View style={styles.Cards.Card.Info.Left}>
                                  <Text  style={styles.Cards.Card.Info.Left.name}>BAHSIS SNACK</Text>
                                  <Text  style={styles.Cards.Card.Info.Left.tags}>Burgers . Fast Food</Text>
                                </View >
                                <View style={styles.Cards.Card.Info.Right}>
                                  <View style={styles.Cards.Card.Info.Right.Reviews}>
                                      <Image source={Star}  style={styles.Cards.Card.Info.Right.Reviews.img}  />
                                      <Text  style={styles.Cards.Card.Info.Right.Reviews.text}  >4.8</Text>
                                  </View>
                                  <Text style={styles.Cards.Card.Info.Right.time}>10min</Text>
                                </View >
                            </View >
        </View >
  );
}

const styles = StyleSheet.create<any>({
  Cards:{
    marginVertical:10,
    width:"100%",
    padding:10,
    // height:200,
    Card:{
      // overflow:'hidden',
      borderRadius: 20,
      // shadowOffset: {width: 0, height: 0},  
      // shadowColor: 'red',  
      // shadowOpacity: 0.13,  
      // shadowRadius: 20,  
      paddingBottom:20,
      ImgBack:{
        width: "100%",
        height:160,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      Info:{
        flexDirection: "row",
        padding:10,
        backgroundColor:'#f7f7f7',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        Left:{
          width: "80%",
          name:{
            color:'black',
            fontSize:20,
            fontWeight:'800',
          },
          tags:{
            fontSize:15,
            fontWeight:'600',
            color: "grey",
            paddingVertical:5
          }
        },
        Right:{
          time:{
            fontSize:15,
            fontWeight:'800',
            color: "grey",
            paddingVertical:5
          },
          Reviews:{
            flexDirection: "row",
            img:{
              width:25,
              height: 25,
            },
            text:{
              fontSize:15,
              fontWeight:'800',
              color: "grey",
              paddingVertical:5
            }
          }

        }
      }
    }
  }
});