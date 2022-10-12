import { StatusBar } from 'expo-status-bar';
import {Pressable,Button, StyleSheet, Text, View ,Image,TextInput,ScrollView } from 'react-native';
import Home from '../assets/img/home.png'
import Shopping from '../assets/img/shopping-bag.png'
import user from '../assets/img/user.png'
import bookmark from '../assets/img/bookmark.png'
import addition from '../assets/img/addition.png'
import {useState} from "react"



export default function Footer() {
  const [ActiveIcon,SetActiveIcon] = useState('Home')
  const Icons = [
  {
    name:'Home',
    icon:Home,
  },
  {
    name:'Shopping',
    icon:Shopping,
  },
  {
    name:'addition',
    icon:addition
  },
  {
    name:'bookmark',
    icon:bookmark,
  },
  {
    name:'Profile',
    icon:user,
  }
  ]



  return (
  <View  style={styles.FooterContainer} >
    {
      Icons.map(item=>{
        return(
          <>
          <Pressable  key={item.name} onPress={()=>{item.name !== 'addition' && SetActiveIcon(item.name)}}   
            style={[ 
              styles.FooterContainer.Item,
              item.name === ActiveIcon ? styles.FooterContainer.ActiveIcon : "",
              item.name === "addition" && styles.FooterContainer.addition ]}>
            <Image source={item.icon} style={[styles.FooterContainer.Item.img,item.name === "addition" && styles.FooterContainer.addition.img ]} />
          </Pressable>
          </>
        )
      })
    }
  </View>
  );
}

const styles = StyleSheet.create({
  FooterContainer:{
    paddingHorizontal:30,
    paddingVertical:5,
    flex:0.8,
    backgroundColor: "#f75d20",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    borderRadius:30,
    Item:{
      flexDirection: "row",
      alignItems: "center",
      img:{
        width:25,
        height:25
      },
    },
    addition:{
      backgroundColor:'white',
      padding:5,
      borderRadius:50,
      position: "relative",
      bottom:30,
      shadowOffset: {width: 0, height: 0},  
      shadowColor: '#f75d20',  
      shadowOpacity: 0.5,  
      shadowRadius: 20,  
      img:{
        width:50,
        height:50
      }
    },
    ActiveIcon:{
      // backgroundColor:'#c6c4c4',
      // padding:10,
      // borderRadius:50,
    },
  }
});