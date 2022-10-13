import {Pressable,Button, StyleSheet, Text, View ,Image,TextInput,ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header'
import Footer from '../components/Footer'
import burger from '../assets/img/burger.png'
import donut from '../assets/img/donut.png'
import pizza from '../assets/img/pizza.png'
import salad from '../assets/img/salad.png'
import icecream from '../assets/img/ice-cream.png'
import soda from '../assets/img/soda.png'
import Search from '../assets/img/Search.png'
import Setting from '../assets/img/setting.png'
import ProjetCard from '../components/ProjetCard'
import { LinearGradient } from 'expo-linear-gradient';



import {useState} from "react"



export default function Home({...navigation}) {
  const [ActiveCategory,SetActiveCategory]=useState('Burger')
  const [Category,SetCategory] = useState([
    {
      name:"Burger",
      icon:burger
    },
    {
      name:"Donut",
      icon:donut
    },    {
      name:"Pizza",
      icon:pizza
    },  {
      name:"Salad",
      icon:salad
    },   {
      name:"Glasse",
      icon:icecream
    }
    ,{
      name:"soda",
      icon:soda
    }
  ])
  return (
    <View style={{alignItems: 'center'}}>
      <LinearGradient colors={['#f5cfc0', '#fbe6dd']}>
        <View style={styles.container}>
          <Header/>
          <View  style={styles.BodyContainer}>
            <ScrollView>
              <Text style={styles.BodyContainer.TextTitle}>What Do You Want For <Text style={{color:'#f75d20'}}>Dinner</Text> </Text>
              <View style={styles.BodyContainer.Filter} >
                    <View  style={styles.BodyContainer.Filter.Icons}  >
                      <Image source={Search} style={styles.BodyContainer.Category.Btn.Icon}/>
                    </View >
                    <View  style={styles.BodyContainer.Filter.Input}   >
                      <TextInput  placeholder="Search your food" />
                    </View>
                    <View  style={styles.BodyContainer.Filter.Icons} >
                      <Image source={Setting} style={styles.BodyContainer.Category.Btn.Icon}/>
                    </View>
              </View>
              <Text style={styles.BodyContainer.TextTitleSecond} >Catégory</Text>
              <View  style={styles.BodyContainer.Category} >
                      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                          {
                            Category.map(categ =>{
                              return(
                                <Pressable key={categ.name} onPress={()=>{SetActiveCategory(categ.name)}}  style={[styles.BodyContainer.Category.Btn , ActiveCategory === categ.name ? styles.BodyContainer.Category.BtnACtive: styles.BodyContainer.Category.BtnNoActive]} >
                                  <Image source={categ.icon} style={styles.BodyContainer.Category.Btn.Icon}/>
                                  <Text style={[styles.BodyContainer.Category.Btn.text, ActiveCategory === categ.name ? styles.BodyContainer.Category.TxtActive: styles.BodyContainer.Category.TxtNoActive]}>{categ.name}</Text>
                                </Pressable>
                              )
                            })
                          }
                      </ScrollView>
              </View>
              <Text style={styles.BodyContainer.TextTitleSecond} >Popular</Text>
              <View style={styles.Cards}>
                {
                                      [...Array(30)].map((x, i) =>
                                      <ProjetCard key={i} />
                                      )
                }
              </View>
            </ScrollView>
          </View>
          <Footer navigation={navigation}  />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create<any>({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  BodyContainer:{
    padding:5,
    flex:10,
    TextTitle:{
      color:'black',
      fontSize:30,
      fontWeight:'800',
      textAlign:'center',
      width:'80%',
      marginRight: 'auto',
      marginLeft: 'auto',
      // fontFamily:"normal"
    },
    TextTitleSecond:{
      color:'black',
      fontSize:20,
      fontWeight:'800',
      // fontFamily:"normal",
      paddingHorizontal:20,
    },
    Filter:{
      borderRadius:50,
      backgroundColor: "#f5f2f2",
      flexDirection: "row",
      alignItems:"center",
      width: '94%',
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingVertical:12,
      paddingHorizontal:15,
      marginVertical:20,
      Icons:{
          width:'15%',
      },
      Input:{
        width:'75%',
      }
    },
    Category:{
      paddingVertical:20,
      paddingHorizontal:10,
      flexDirection: "row",
      justifyContent:"space-between", 
      overflow: 'scroll',
      height:100,
      Btn:{
        alignItems: 'center',
        borderRadius: 10,
        elevation: 3,
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
        backgroundColor: "#f5f2f2",

      },
      TxtNoActive:{
        color:'black'
      },
      TxtActive:{
        color: 'white'
      }

    }
  },
  Cards:{
    marginVertical:10,
    width:"100%",
    padding:10,
  }
});