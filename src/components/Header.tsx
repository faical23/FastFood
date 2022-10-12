import { StyleSheet, Text, View ,Image} from 'react-native';
import Notification from '../assets/img/notification4.png'
import Avatar from '../assets/img/avatar.jpg'


export default function Header() {


  return (
  <View style={styles.HeaderContainer} >
    <View style={styles.HeaderContainer.HeaderContainerIcons}>
      <Image source={Avatar} style={styles.HeaderContainer.HeaderContainerIcons.Avatar} />
    </View>
    {/* <Text style={styles.HeaderContainer.Logo}>FastFood</Text> */}
    <View style={styles.HeaderContainer.HeaderContainerIcons}>
      <View style={styles.HeaderContainer.HeaderContainerIcons.Number}>
        <Text style={styles.HeaderContainer.HeaderContainerIcons.Number.text} >13</Text>
      </View>
      <Image source={Notification} style={styles.HeaderContainer.HeaderContainerIcons.Notification} />
    </View>
  </View>
  );
}

const  styles =  StyleSheet.create<any>({
  HeaderContainer:{
    padding:20,
    flex:0.6,
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingTop:50,
    HeaderContainerIcons:{
        Notification:{
          width: 45,
          height: 45,
          borderRadius:50,
          resizeMode:'cover',
          position: 'relative',
          zIndex:1
        },
        Avatar:{
          width: 45,
          height: 45,
          borderRadius:50,
          resizeMode:'cover',
        },
        Number:{
          backgroundColor:'#e50d0d',
          borderRadius:50,
          position:'absolute',
          zIndex:2,
          Width:'100%',
          paddingHorizontal:4,
          paddingVertical:3,
          left:30,
          top:-5,
          text:{
            color:'white',
            fontSize:13,
            fontWeight:'800',
          }
        }
    },
    Logo:{
      color:'#f75d20',
      fontSize:25,
      fontWeight:'bold',
      textAlign:'center',
    }
  },
});
