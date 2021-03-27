import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
import About from './About'

export default function Home(props) {
    return (
        <View style={{flex:1, backgroundColor:"red"}}>
            <Text style={styles.name}>rock paper scissors</Text>
            <View style={styles.button}>
                <Button
                    onPress={()=>{}}
                    title="play"
                    color="black"
                />
            </View>
            <View style={styles.button}>
                <Button
                    onPress={()=>{}}
                    title="sign in"
                    color="black"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 35,
        top: 10,
    },
    container: {
        backgroundColor: '#3498db'
    },
    button: {
        backgroundColor: '#00aeef',
        borderWidth: 1,
        width: 100,
        borderRadius: 15,
        margin: 10,
}
});