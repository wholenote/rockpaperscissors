import React from 'react';
import { Image, StyleSheet, Text, View, StatusBar, SafeAreaView, FlatList } from 'react-native';

import DATA from "../data/playerData.json";

var count = 1;

const Item = ({ title, elo, country_flag }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{count++}) {title}  <Image style={styles.tinyLogo} source={{uri: country_flag}}/></Text>
        <Text style={styles.elo}>{elo} </Text>
    </View>
);

export default function Leaderboard() {
    const renderItem = ({ item }) => (
        <Item title={item.title} Item elo={item.elo} Item country_flag={item.country_flag}/>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>TOP 50</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.title}
            />
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        //backgroundColor: "#f6f6f6",
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#C0C0C0',
        padding: 5,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 20,
    },
    elo: {
        fontSize: 17,
        marginVertical: 10,
    },
    titleText: {
        fontSize: 45,
        fontWeight: "bold",
        padding: 15,
        textAlign: "center"
    },
    tinyLogo: {
        width: 30,
        height: 30,
    },
});