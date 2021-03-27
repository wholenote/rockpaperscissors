import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, VirtualizedList } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const HEADER_EXPANDED_HEIGHT = 300;
const HEADER_COLLAPSED_HEIGHT = 60;

export default function Profile() {
    const [scrollY, setScrollY] = useState(new Animated.Value(0))
    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
        outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
        extrapolate: 'clamp'
    });

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={styles.topSection}>
                <Image style={styles.profileImage} source={require('./../assets/paper.png')}/>
                <Text style={styles.username}>Username</Text>
                <Image style={styles.rankImage} source={require('./../assets/rank.png')}/>
                <Text style={{fontSize: 18, marginBottom: 50}}>Challenger 1000LP</Text>
                <Text style={{fontSize:20, fontWeight: "bold", alignSelf:"center"}}>Match History</Text>
            </Animated.View>
                <FlatList style ={styles.matchHistory} 
        data={[
            {Opponent: 'Devin', key: 1},
            {Opponent: 'Dan', key: 2},
            {Opponent: 'Dominic', key: 3},
            {Opponent: 'Jackson', key: 4},
            {Opponent: 'James', key: 5},
            {Opponent: 'Joel', key: 6},
            {Opponent: 'John', key: 7},
            {Opponent: 'Jillian', key: 8},
            {Opponent: 'Jimmy', key: 9},
            {Opponent: 'Julie', key: 10},
        ]}
        renderItem={({item, index}) => 
            <View style={{flex:1, flexDirection:'row'}}>
                <Text style={[styles.item, {paddingRight:10}]}>{index + 1}.</Text>
                <Text style={[styles.item ,{paddingRight:20}]}>{item.Opponent} vs Username</Text>
                <Text style={[styles.item, {flex: 1, textAlign:'right'}]}>{item.Opponent}</Text>
            </View>}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        resizeMode: 'contain'
    },
    rankImage: {
        marginTop: 50,
        width: 200,
        height: 200,
        overflow: "hidden",
        resizeMode: 'contain'
    },
    username: {
        fontSize: 40
    },
    container: {
        flex: 1,
        width:"100%",
        height: "100%",
    },
    topSection: {
        alignItems: "center", 
        marginBottom: 20
    },
    matchHistory: {
        margin: 10
    },
    item:{
        marginVertical:5,
        fontSize: 18,
        backgroundColor:'yellow',
        padding: 10
    }
});