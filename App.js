import {Pressable,Button, StyleSheet, Text, View ,Image,TextInput } from 'react-native';
import {useState} from 'react'
import Notification from './assets/Img/notification.png'
import BurgerMenu from './assets/Img/menu.png'
import { StatusBar } from 'expo-status-bar';
import Svg, {Path} from 'react-native-svg'

import burger from './assets/Img/burger.png'
import donut from './assets/Img/donut.png'
import pizza from './assets/Img/pizza.png'
import salad from './assets/Img/salad.png'
import icecream from './assets/Img/ice-cream.png'
import soda from './assets/Img/soda.png'





export default function App() {



  return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.HeaderContainer} >
          <View style={styles.HeaderContainer.HeaderContainerIcons}>
            <Image source={BurgerMenu} style={styles.HeaderContainer.HeaderContainerIcons.Burger} />
          </View>
          <Text style={styles.HeaderContainer.Logo}>Fast Food</Text>
          <View style={styles.HeaderContainer.HeaderContainerIcons}>
            <Image source={Notification} style={styles.HeaderContainer.HeaderContainerIcons.Notification} />
          </View>
        </View>
        <View  style={styles.BodyContainer}>
          <Text style={styles.BodyContainer.TextTitle}>What Do You Want For <Text style={{color:'#f75d20'}}>Dinner</Text> </Text>
          <View style={styles.BodyContainer.Filter} >
            <View  style={styles.BodyContainer.Filter.Icons}  >
              <Svg width="50px" height="50px"   fill="#c1c1c1" xmlns="http://www.w3.org/2000/svg"><Path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z"/></Svg>
            </View >
            <View  style={styles.BodyContainer.Filter.Input}   >
              <TextInput  placeholder="Search your food"/>
            </View>
            <View  style={styles.BodyContainer.Filter.Icons} >
                <Svg width="50px" height="50px" fill="#f75d20" xmlns="http://www.w3.org/2000/svg" ><Path d="M21.35 42V30.75h3v4.15H42v3H24.35V42ZM6 37.9v-3h12.35v3Zm9.35-8.3v-4.1H6v-3h9.35v-4.2h3v11.3Zm6-4.1v-3H42v3Zm8.3-8.25V6h3v4.1H42v3h-9.35v4.15ZM6 13.1v-3h20.65v3Z"/></Svg>
            </View>
          </View>
          <Text style={styles.BodyContainer.TextTitleSecond} >Catégory</Text>
          <View  style={styles.BodyContainer.Category} >
              <Pressable style={styles.BodyContainer.Category.Btn} >
                <Image source={burger} style={styles.BodyContainer.Category.Btn.Icon} />
                <Text style={styles.BodyContainer.Category.Btn.text}>Burger</Text>
              </Pressable>
              <Pressable style={styles.BodyContainer.Category.Btn} >
                <Image source={donut} style={styles.BodyContainer.Category.Btn.Icon} />
                <Text style={styles.BodyContainer.Category.Btn.text}>Donut</Text>
              </Pressable>
              <Pressable style={styles.BodyContainer.Category.Btn} >
                <Image source={pizza} style={styles.BodyContainer.Category.Btn.Icon} />
                <Text style={styles.BodyContainer.Category.Btn.text}>Pizza</Text>
              </Pressable>
              <Pressable style={styles.BodyContainer.Category.Btn} >
                <Image source={salad} style={styles.BodyContainer.Category.Btn.Icon} />
                <Text style={styles.BodyContainer.Category.Btn.text}>Salad</Text>
              </Pressable>
              <Pressable style={styles.BodyContainer.Category.Btn} >
                <Image source={icecream} style={styles.BodyContainer.Category.Btn.Icon} />
                <Text style={styles.BodyContainer.Category.Btn.text}>Glasse</Text>
              </Pressable>
              <Pressable style={styles.BodyContainer.Category.Btn} >
                <Image source={soda} style={styles.BodyContainer.Category.Btn.Icon} />
                <Text style={styles.BodyContainer.Category.Btn.text}>Soda</Text>
              </Pressable>
          </View>
        </View>
        <View  style={styles.FooterContainer} >
          <Text>Footer</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  HeaderContainer:{
    padding:30,
    flex:1,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingTop:50,
    HeaderContainerIcons:{
        backgroundColor: "#f5f2f2",
        borderRadius:6,
        padding:5,
        Notification:{
          width: 35,
          height: 35,
        },
        Burger:{
          width: 33,
          height: 33,
        }
    },
    Logo:{
      color:'#f75d20',
      fontSize:30,
      fontWeight:'bold',
      textAlign:'center',
      
    }
  },
  BodyContainer:{
    padding:5,
    flex:10,
    TextTitle:{
      color:'black',
      fontSize:26,
      fontWeight:'800',
      textAlign:'center',
      width:'60%',
      marginRight: 'auto',
      marginLeft: 'auto',
      fontFamily:"normal"
    },
    TextTitleSecond:{
      color:'black',
      fontSize:20,
      fontWeight:'800',
      fontFamily:"normal",
      paddingHorizontal:20,
    },
    Filter:{
      borderRadius:6,
      backgroundColor: "#f5f2f2",
      flexDirection: "row",
      alignItems:"center",
      width: '90%',
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingVertical:4,
      paddingHorizontal:5,
      marginVertical:20,


      Icons:{
          width:'15%',
      },
      Input:{
        width:'70%',
      }
    },
    Category:{
      paddingVertical:20,
      paddingHorizontal:10,
      flexDirection: "row",
      justifyContent:"space-between", 
      overflow: 'scroll',
      // display: -webkit-box;
      Btn:{
        alignItems: 'center',
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#f75d20',
        paddingVertical:10,
        paddingHorizontal:10,
        width: 100,
        flexDirection: "row",
        justifyContent:"space-between",    
        marginHorizontal:10,   
        marginVertical:3,   
        text: {
          fontSize: 15,
          lineHeight: 21,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'white',
        },
        Icon:{
          width:25,
          height: 25,
        }
      },

    }
  },
  FooterContainer:{
    padding:5,
    flex:1,
    backgroundColor: "yellow"
  },


});
