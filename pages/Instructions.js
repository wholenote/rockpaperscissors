import React from "react";
import { Alert, StyleSheet, Text, View, Modal, Pressable } from 'react-native';


export default function Instructions(props) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}> 
            <Text style={styles.titleText}> 
                About
            </Text>
            <Text>Developed by: </Text>
            <Text> 
            Andy Weng, Brian Wang, Joshua Arrojado
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