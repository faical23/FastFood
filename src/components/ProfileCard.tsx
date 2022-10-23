import {Pressable, StyleSheet, Text, View ,Image } from 'react-native';
import {useState} from "react"
import BUrger from '../assets/img/BurgerBack.jpg'



export default function ProfileCard(props:any) {
    console.log("s => ", props.Navigation)
    
  return (
        <View style={styles.Card}>
            <View style={styles.Card.ZoneImg}>
                <Pressable  onPress={()=>{props.Navigation("DétailCardProfil")}} >
                    <Image source={BUrger}  style={styles.Card.img} />
                </Pressable>
            </View>
            <Text style={styles.Card.Title}>Chicken Burger</Text>
            <Text  style={styles.Card.Description}>Chicken patty and special sauce algerian</Text>
            <Pressable style={styles.Card.Btn}>
                <Text style={styles.Card.Btn.Text}>$4.99</Text>
                <Text style={styles.Card.Btn.Text}>+</Text>
            </Pressable>

        </View >
  );
}

const styles = StyleSheet.create<any>({
  Card:{
    textAlign:'center',
    paddingVertical:10,
    borderRadius:20,
    width:170,
    backgroundColor:"#302f3c",
    marginBottom:20,
    ZoneImg:{
        shadowOffset: {width: 0, height: 0},  
        shadowColor: 'white',  
        shadowOpacity: 0.3,  
        shadowRadius: 20,  
    },
    img:{
        width:110,
        height:110,
        borderRadius:20,
        marginLeft: 'auto',
        marginRight: 'auto', 
    },
    Title:{
        color:'white',
        fontSize:19,
        fontWeight:'800',
        textAlign:'center',
        marginVertical:10,
    },
    Description:{
        color:'white',
        fontSize:13,
        fontWeight:'400',
        textAlign:'center',
    },
    Btn:{
        borderRadius: 10,
        elevation: 3,
        backgroundColor:'white',
        marginHorizontal:20,
        paddingVertical:10,
        marginTop:10,
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal:20,
        Text:{
            color:'black',
            fontSize:19,
            fontWeight:'800',
            textAlign:'center',
        },
        Text1:{
            width:"80%",
        }
    }
  }
});