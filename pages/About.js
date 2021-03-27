import React, { useState } from "react";
import { Alert, StyleSheet, Text, View, Modal, Pressable } from 'react-native';

export default function About(props) {

    return (
        <View style={styles.container}> 
            <Text style={styles.titleText}>Instructions</Text>
            <Text>Rules: </Text>
            <Text> 
            Each player must pick each either rock, paper or scissors
            </Text>
        </View>
    )
}

/*

*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        padding: 25

    },
    titleText: {
        fontSize: 25,
        fontWeight: "bold",
        backgroundColor: "yellow",
        padding: 10
    },
    headerText: {
        fontSize: 18,
        fontWeight: "normal",

    },
    baseText: {
        fontSize: 15,

    },
});