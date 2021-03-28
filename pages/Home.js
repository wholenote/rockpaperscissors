import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, Image} from 'react-native';
import { Navigation } from 'react-native-navigation';
import About from './About'
import SignIn from './InGame'
import Profile from './Profile'
import Leaderboard from './Leaderboard'
import InGameMulti from './InGameMulti'
import { NavigationContainer } from '@react-navigation/native';
import * as firebase from 'firebase'; 


export default function Home({ navigation }) {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        console.log('signed in')
        // ...
        } else {
        // User is signed out
        // ...
        }
    });

    const [play, setPlay] = useState(false);
    const [refreshPage, setRefreshPage] = useState("");
    
    if (global.user) {
        
        console.log('signed into home page')
        // signed in
        if (play) {
            return (
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.name}>rock paper scissors {"\n"}{"\n"}</Text>
                    <Pressable 
                        onPress={()=>{
                            navigation.navigate('InGame')
                        }}
                        style={({ pressed }) => [
                            {
                              backgroundColor: pressed
                                ? 'rgb(210, 230, 255)'
                                : 'white'
                            },
                            styles.buttonPress
                        ]}
                    >
                        <Text style={styles.buttonText}>vs bots</Text>
                    </Pressable>
                    <Pressable 
                        onPress={()=>{
                            navigation.navigate('InGameMulti')
                        }}
                        style={({ pressed }) => [
                            {
                              backgroundColor: pressed
                                ? 'rgb(210, 230, 255)'
                                : 'white'
                            },
                            styles.buttonPress
                        ]}
                    >
                        <Text style={styles.buttonText}>multiplayer</Text>
                    </Pressable>
                    <Pressable 
                        onPress={()=>{
                            setPlay(false);
                        }}
                        style={({ pressed }) => [
                            {
                              backgroundColor: pressed
                                ? 'rgb(210, 230, 255)'
                                : 'white'
                            },
                            styles.buttonPress
                        ]}
                    >
                        <Text style={styles.buttonText}>back</Text>
                    </Pressable>
                </View>
            )
        }
    
        return (
            <View style={{alignItems: "center"}}>
                <Text style={styles.name}>rock paper scissors {"\n"}{"\n"}</Text>
                <Pressable 
                    onPress={()=>{
                        setPlay(true);
                    }}
                    style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'white'
                        },
                        styles.buttonPress
                    ]}
                >
                    <Text style={styles.buttonText}>play</Text>
                </Pressable>
                <Pressable 
                    onPress={()=>{
                        navigation.navigate('About')
                    }}
                    style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'white'
                        },
                        styles.buttonPress
                    ]}
                >
                    <Text style={styles.buttonText}>about</Text>
                </Pressable>
                
                <Pressable 
                    onPress={()=>{
                        navigation.navigate('Profile')
                    }}
                    style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'white'
                        },
                        styles.buttonPress
                    ]}
                >
                    <Text style={styles.buttonText}>profile</Text>
                </Pressable>
                <Pressable 
                    onPress={()=>{
                        navigation.navigate('Leaderboard')
                    }}
                    style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'white'
                        },
                        styles.buttonPress
                    ]}
                >
                    <Text style={styles.buttonText}>leaderboard</Text>
                </Pressable>
                <Pressable 
                    onPress={()=>{
                        firebase.auth().signOut().then(() => {
                            // Sign-out successful.
                            global.user = false;

                            console.log('signed out')

                            setRefreshPage("refresh"); 
                          }).catch((error) => {
                            // An error happened.
                        });
                    }}
                    style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'white'
                        },
                        styles.buttonPress
                    ]}
                >
                    <Text style={styles.buttonText}>sign out</Text>
                </Pressable>
                
                <View style={{flex: 1, width: "100%", backgroundColor: "blue"}}>
                    <View style={{flex: 1, width: "100%", flexDirection:'row'}}>
                        <Image source={require('./../assets/scissor.png')} style={{width: "50%", resizeMode: 'contain', marginTop: 50}}/>
                        <Image source={require('./../assets/paper.png')} style={{width: "50%", resizeMode: 'contain', marginTop: 50}}/>
                    </View>
                    <Image source={require('./../assets/rock.png')} style={{width: "70%", resizeMode: 'contain'}}/>
                </View>
            </View>
        )
    } else {
        // signed out
        if (play) {
            return (
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.name}>rock paper scissors {"\n"}{"\n"}</Text>
                    <Pressable 
                        onPress={()=>{
                            navigation.navigate('InGame')
                        }}
                        style={({ pressed }) => [
                            {
                              backgroundColor: pressed
                                ? 'rgb(210, 230, 255)'
                                : 'white'
                            },
                            styles.buttonPress
                        ]}
                    >
                        <Text style={styles.buttonText}>vs bots</Text>
                    </Pressable>
                    <Pressable 
                        onPress={()=>{}}
                        style={({ pressed }) => [
                            {
                              backgroundColor: pressed
                                ? 'rgb(210, 230, 255)'
                                : 'white'
                            },
                            styles.buttonPress
                        ]}
                    >
                        <Text style={styles.buttonText}>multiplayer</Text>
                    </Pressable>
                    <Pressable 
                        onPress={()=>{
                            setPlay(false);
                        }}
                        style={({ pressed }) => [
                            {
                              backgroundColor: pressed
                                ? 'rgb(210, 230, 255)'
                                : 'white'
                            },
                            styles.buttonPress
                        ]}
                    >
                        <Text style={styles.buttonText}>back</Text>
                    </Pressable>
                </View>
            )
        }
    
        return (
            <View style={{alignItems: "center"}}>
                <Text style={styles.name}>rock paper scissors {"\n"}{"\n"}</Text>
                <Pressable 
                    onPress={()=>{
                        setPlay(true);
                    }}
                    style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'white'
                        },
                        styles.buttonPress
                    ]}
                >
                    <Text style={styles.buttonText}>play</Text>
                </Pressable>
                <Pressable 
                    onPress={()=>{
                        navigation.navigate('SignIn')
                    }}
                    style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'white'
                        },
                        styles.buttonPress
                    ]}
                >
                    <Text style={styles.buttonText}>sign in</Text>
                </Pressable>
                <Pressable 
                    onPress={()=>{
                        navigation.navigate('About')
                    }}
                    style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'white'
                        },
                        styles.buttonPress
                    ]}
                >
                    <Text style={styles.buttonText}>about</Text>
                </Pressable>
                
                <View style={{flex: 1, width: "100%", backgroundColor: "blue"}}>
                    <View style={{flex: 1, width: "100%", flexDirection:'row'}}>
                        <Image source={require('./../assets/scissor.png')} style={{width: "50%", resizeMode: 'contain', marginTop: 50}}/>
                        <Image source={require('./../assets/paper.png')} style={{width: "50%", resizeMode: 'contain', marginTop: 50}}/>
                    </View>
                    <Image source={require('./../assets/rock.png')} style={{width: "70%", resizeMode: 'contain'}}/>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    name: {
        fontSize: 35,
        top: 20,
        fontWeight: 'bold',
        width: "100%",
        textAlign: 'center'
    },
    buttonText: {
        fontSize: 30,
        padding: 10,
        textAlign: 'center'
    },
    buttonPress: {
        borderRadius: 15,
        backgroundColor: 'pink',
        padding: 6,
        margin: 10,
        width: "40%"
    }
});