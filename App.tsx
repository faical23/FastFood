import Index from './src'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entry from './src/screens/Entry' 
import Home from './src/screens/Home' 
import Connexion from './src/screens/Connexion' 
import React from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <Index/>
    </>

  );
}
