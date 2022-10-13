import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entry from '../src/screens/Entry' 
import Home from '../src/screens/Home' 
import Connexion from '../src/screens/Connexion' 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator   screenOptions={{headerShown: false}}>
      <Stack.Screen name="Entry" component={Entry}/>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Connexion" component={Connexion} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

