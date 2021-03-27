import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import About from './pages/About';
import InGame from './pages/InGame';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import Home from './pages/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase'; 

const Stack = createStackNavigator();
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBRTZwq27RhPlwReIT_iYPD7451jgzQ4wI",
    authDomain: "rockpaperscissors-b40c8.firebaseapp.com",
    projectId: "rockpaperscissors-b40c8",
    storageBucket: "rockpaperscissors-b40c8.appspot.com",
    messagingSenderId: "393982432748",
    appId: "1:393982432748:web:6bd11bb38211009cf0dcc9"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='About' component={About}/>
        <Stack.Screen name='InGame' component={InGame}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*

<NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='About' component={About}/>
      </Stack.Navigator>
    </NavigationContainer>
*/