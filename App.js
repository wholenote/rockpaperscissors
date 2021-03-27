import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import About from './pages/About';
import InGame from './pages/InGame';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import Home from './pages/Home'

export default function App() {
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('About', () => About);
  Navigation.registerComponent('InGame', () => InGame);

  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'Home'
              }
            }
          ]
        }
      }
    });
  });
  return (
  <View style={styles.container}>
    <Home></Home>
    <About></About>
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
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});
