import { StatusBar } from 'expo-status-bar';
import {Pressable, StyleSheet, Text, View ,Image,TextInput,ScrollView,Button } from 'react-native';
import BurgerBack from '../assets/img/BurgerBack.jpg'
import { LinearGradient } from 'expo-linear-gradient';
import {useState} from 'react'
import { ImageSlider } from "react-native-image-slider-banner";



export default function Login(props:any) {
  return (
    <LinearGradient colors={['#f5cfc0', '#fbe6dd']}>
      <View  style={styles.container}>
          <View  style={styles.container.ImgZone}> 
          <ImageSlider 
            data={[
                {img: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg'},
                {img: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
                {img: 'https://images.pexels.com/photos/5845840/pexels-photo-5845840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            ]}
            showHeader
            preview={false}
            headerStyle={{width: 300,overflow: 'hidden',paddingHorizontal:20}}
            caroselImageStyle={{resizeMode: 'cover',height:400,borderRadius:30,width: 300,overflow: 'hidden' }}
            />
          </View>
          <View  style={styles.container.TextZone}> 
            <Text style={styles.container.TextZone.Text1}>30K+ Food items</Text> 
            <Text style={styles.container.TextZone.Text2}>Enjoy With</Text> 
            <Text style={styles.container.TextZone.Text3}>Drinking</Text> 
            <Pressable onPress={()=>{props.navigation.navigate('Home')}} style={styles.container.TextZone.Btn} >
              <Text style={styles.container.TextZone.Btn.txt}>Get started</Text>
            </Pressable>
          </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create<any>({
  container: {
    height:"100%",
    paddingHorizontal:38,
    paddingVertical:70,
    ImgZone:{
      overflow:"hidden",
        img:{
          width: 300,
          height:400,
          borderRadius:30,
        }
    },
    TextZone:{
      position: "relative",
      top: 40,
      Text1:{
        color:'#e03e3e',
        fontSize:18,
        fontWeight:'800',
      },
      Text2:{
        color:'black',
        fontSize:55,
        fontWeight:'800',
      },
      Text3:{
        color:'black',
        fontSize:55,
        fontWeight:'300',
      },
      Btn:{
        backgroundColor:'#f75d20',
        width:'100%',
        padding:20,
        borderRadius:13,
        marginVertical:20,
        txt:{
          color:'white',
          textAlign:'center',
          fontSize:18,
          fontWeight:'800',
        }
      }
    }
  },
});