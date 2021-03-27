import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function About(props) {
    const {titleTest, setTitleText} = useState("About Page");
    const header1 = "What is Rock Paper Scissors?"
    const header2 = "How to Play?"

    const text1 = ""
    const text2 = ""

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>About
                {"\n"}
                {"\n"}
            </Text>
            <Text style={styles.headerText}></Text>
            <Text style={styles.titleText}></Text>
            <Text style={styles.headerText}></Text>
            <Text style={styles.titleText}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Cochin"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    headerText: {
        fontSize: 15,
        fontWeight: "100"
    },
    container: {
        textAlign: "left"
    }
});