import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home'
import Login from './screens/Entry'
import Conexion from './screens/Connexion'

export default function App() {
  return (
    <View style={styles.container}>
      <Conexion/>
      {/* <Login/> */}
      {/* <Home/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
