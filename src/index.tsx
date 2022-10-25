import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entry from '../src/screens/Entry' 
import Home from '../src/screens/Home' 
import Connexion from '../src/screens/Connexion' 
import SnackProfile from '../src/screens/SnackProfile'
import DetailCardProfile from '../src/screens/DetailsCardProfil'
import Basket from '../src/screens/Basket'
import bookmark from '../src/screens/bookmark'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator   screenOptions={{headerShown: false}}>
      <Stack.Screen name="Entry" component={Entry}/>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Connexion" component={Connexion} />
      <Stack.Screen name="SnackProfile" component={SnackProfile} />
      <Stack.Screen name="DétailCardProfil" component={DetailCardProfile} />
      <Stack.Screen name="Basket" component={Basket} />
      <Stack.Screen name="bookmark" component={bookmark} />


    </Stack.Navigator>
  </NavigationContainer>
  );
}

