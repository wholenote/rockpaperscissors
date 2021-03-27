import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';
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
        <View style={{alignItems: 'center'}}>
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
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 35,
        top: 10,
    },
    buttonText: {
        fontSize: 30
    },
    buttonPress: {
        borderRadius: 8,
        padding: 6
    }
});