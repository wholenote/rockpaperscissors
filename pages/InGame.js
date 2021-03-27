import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Pages } from 'react-native-pages';

export default function InGame() {
    return (
        <View style={styles.container}>
            <View style={styles.playerViewTop}>
                <PlayerView top={0} name="Player 2"></PlayerView>
            </View>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 10}}/>
            <View style={styles.playerViewBot}>
                <PlayerView top={1} name="Player 1"></PlayerView>
            </View>
        </View>
    )
}

const PlayerView = (prop) =>{
    return (
        <View style={{width: "100%", height: "100%"}}>
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', width: "100%"}}>
                {prop.top == 1? 
                    <Text style={styles.score}>5</Text>:
                    <Text style={styles.title}>{prop.name}</Text>}
                <Pages indicatorColor="rgb(0, 0, 0)">
                    <Image source={require('./../assets/paper.png')} style={{width: "100%", height: "90%", resizeMode: 'contain'}}/>
                    <Image source={require('./../assets/rock.png')} style={{ width: "100%", height: "90%", resizeMode: 'contain'}}/>
                    <Image source={require('./../assets/scissor.png')} style={{ width: "100%", height: "90%", resizeMode: 'contain' }}/>
                </Pages>
                {prop.top == 0 ? 
                    <Text style={styles.score}>5</Text>:
                    <Text style={styles.title}>{prop.name}</Text>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: "center",
        position: 'relative'
    },
    score: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: "center",
        position: 'relative'
    },
    playerViewTop: {
        flex: 1,
    },
    playerViewBot: {
        flex: 1,
    },
    container: {
        flex: 1,
    }
});