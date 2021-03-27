import React, { useState } from "react";
import { Alert, StyleSheet, Text, View, Modal, Pressable } from 'react-native';

export default function About(props) {

    return (
        <View style={styles.container}> 
            <Text style={styles.titleText}>About</Text>
            <Text style={styles.headerText}>What is Rock Paper Scissors? </Text>
            <Text style={styles.baseText}>A game based on luck and deception. It can have more than 2 players per game.</Text>
            <Text style={styles.baseText}>Usually played out either by rounds or by elimination {"\n"}</Text>

            <Text style={styles.headerText}>How To Play: </Text>
            <Text style={styles.baseText}>Each player must pick between three items: rock, paper or scissors.</Text>
            <Text style={styles.baseText}>If a player plays rock and the other plays paper, paper wins. And so on...</Text>
            <Text style={styles.baseText}>The general rule is: rock beats scissors, scissors beat paper, and paper beats rock </Text>
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
        padding: 15
    },
    headerText: {
        fontSize: 18,
        fontWeight: "normal",

    },
    baseText: {
        fontSize: 15,
    },
});