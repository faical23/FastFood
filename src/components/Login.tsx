import {Pressable, StyleSheet, Text, View ,Image,TextInput,ScrollView,Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Google from '../assets/img/google.png'
import Facebook from '../assets/img/facebook.png'
import Apple from '../assets/img/apple.png'
import viewEyes from '../assets/img/view.png'
import hiddenEyes from '../assets/img/hidden.png'
import Arrow from '../assets/img/arrow.png'


export default function Insciption(props:any) {

  

  return (
    <LinearGradient colors={['#f5cfc0', '#fbe6dd']}>
      <View style={styles.container}>
        <View style={styles.ImgZone}>
            <Pressable  onPress={()=>{console.log(props.navigation.navigation.navigate('Home'))}}>
                <Image source={Arrow} style={styles.ImgZone.Img}  />
            </Pressable>
        </View>
        <View style={styles.container.WelcomeZone}>
            <Text style={styles.container.WelcomeZone.Text1}>Hello again!</Text>
            <Text style={styles.container.WelcomeZone.Text2}>Welcome back you've </Text>
            <Text style={styles.container.WelcomeZone.Text2}>been missed!</Text>
        </View>
        <View style={styles.container.LoginZone}>
                    <View  style={styles.container.LoginZone.inputZone}   >
                      <TextInput  style={styles.container.LoginZone.inputZone.input}  placeholder="Username or email" />
                    </View>
                    <View  style={styles.container.LoginZone.inputZone}   >
                      <TextInput secureTextEntry={true} style={styles.container.LoginZone.inputZone.input}    placeholder="Password" />
                      <Image source={hiddenEyes} style={styles.container.LoginZone.inputZone.icon}/>
                    </View>
            <Text style={styles.container.LoginZone.RecoveryPass}  >Recovery passsword</Text>
            <Pressable onPress={()=>{console.log(props.navigation.navigation.navigate('Home'))}}  style={styles.container.LoginZone.Btn}  >
                <Text style={styles.container.LoginZone.Btn.txt}>Sign in</Text>
            </Pressable>
        </View>
        <View style={styles.container.ContinuenZone}>
            <View style={[styles.container.ContinuenZone.Line,styles.container.ContinuenZone.Line.Left]} />
            <Text style={styles.container.ContinuenZone.text}>or continue with</Text>
            <View style={[styles.container.ContinuenZone.Line,styles.container.ContinuenZone.Line.Right]} />

        </View>
        <View style={styles.container.SocialMedia}>
          <View  style={styles.container.SocialMedia.ZoneIcon}>
          <Image source={Google} style={styles.container.SocialMedia.img}/>
            </View>
          <View  style={styles.container.SocialMedia.ZoneIcon}>
            <Image source={Facebook} style={styles.container.SocialMedia.img}/>
          </View>
          <View  style={styles.container.SocialMedia.ZoneIcon}>
            <Image source={Apple} style={styles.container.SocialMedia.img}/>
          </View>

        </View>
        <View  style={styles.container.RegisterNow}>
            <Text style={styles.container.RegisterNow.text1}>Not a member? 
              <Pressable onPress={()=>{props.SetIsLogin(false)}}>
                <Text  style={styles.container.RegisterNow.text2}> Register now</Text>
              </Pressable>
           </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create<any>({
  container: {
    height:"100%",
    paddingHorizontal:40,
    paddingTop:80,
    WelcomeZone:{
      paddingBottom:20,
      Text1:{
        color:'black',
        fontSize:40,
        fontWeight:'800',
        textAlign:'center',
        paddingBottom:15
      },
      Text2:{
        color:'black',
        fontSize:25,
        fontWeight:'400',
        textAlign:'center',
      }
    },
    LoginZone:{
      inputZone:{
        borderRadius:10,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems:"center",
        width: '100%',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginVertical:10,

        input:{
          width:'85%',
          paddingVertical:16,
          paddingHorizontal:15,
        },
        icon:{
          width:20,
          height: 20,
        }
      },
      RecoveryPass:{
        color:'black',
        fontSize:14,
        fontWeight:'600',
        paddingVertical:3,
        textAlign: 'right'
      },
      Btn:{
        backgroundColor:'#f75d20',
        width:'100%',
        padding:20,
        borderRadius:13,
        marginTop:30,
        txt:{
          color:'white',
          textAlign:'center',
          fontSize:18,
          fontWeight:'800',
        }
      }
    },
    ContinuenZone: {
      marginVertical:40,
      position:'relative',
      text:{
        color:'black',
        fontSize:20,
        fontWeight:'600',
        textAlign: 'center',
      },
      Line:{
        alignSelf:'center',
        position:'absolute',
        width:'20%',
        height:3,
        backgroundColor:"black",
        top:12,
        Left:{
            right:0,
        },
        Right:{
          left:0,
        }
      }
    },
    RegisterNow:{
      text1:{
        color:'black',
        fontSize:16,
        fontWeight:'500',
        textAlign: 'center',
      },
      text2:{
        color:'#f75d20',
      }
    },
    SocialMedia:{
      flexDirection: "row",
      justifyContent:"space-between",
      marginBottom:30,
      img:{
        width:40,
        height:40,
      },
      ZoneIcon:{
        borderWidth:2,
        borderColor:'white',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:10
      }
    }
  },
  ImgZone:{
    padding:10,
    height:50,
    borderRadius:10,
    backgroundColor:'white',
    width:50,
    marginBottom:20,
    Img:{
        width:30,
        height:30
    }
},
});