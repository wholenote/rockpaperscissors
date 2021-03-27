import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, Image} from 'react-native';
import { Navigation } from 'react-native-navigation';
import About from './About'
import { NavigationContainer } from '@react-navigation/native';

export default function Home({ navigation }) {
    const [play, setPlay] = useState(false);

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