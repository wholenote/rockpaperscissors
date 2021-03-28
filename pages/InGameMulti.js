import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Pressable } from 'react-native';
import { Pages } from 'react-native-pages';
import * as firebase from 'firebase'
import 'firebase/firestore';


const db = firebase.firestore();
export default function InGameMulti() {
    const [score, setscore] = useState(0)
    const [gameId, startGame] = useState(0)
    const [opponentScore, setopponentScore] = useState(0)
    const [yourScore, setyourScore] = useState(0)
    const [yourMove, setyourMove] = useState(0)
    const [opponentMove, setopponentMove] = useState(0)
    const [player1, setPlayer] = useState(true)

    useEffect(() => {
        var listener = ()=>{}
        var waiting = true
        db.collection("matching").on
        var collection = db.collection("matching").get().then((snap) => {
            if (snap.size < 1) {
                var myMatchingId = ""
                db.collection("matching").add({user: global.user.uid}).then(docRef => {
                    myMatchingId = docRef.id
                })
                db.collection("users").doc(global.user.uid).onSnapshot((doc) => {
                    if(doc.data().currentGame != null) {
                        startGame(doc.data().currentGame)
                    }
                })
            }
            else {
                var opponent = snap.docs[0]
                var opponentDocId = opponent.id
                var opponentUserId = opponent.data().user
                if (opponentUserId != global.user.uid) {
                    db.collection("matching").doc(opponentDocId).delete()
                    listener()
                    db.collection('game').add({player2:opponentUserId, 
                                                player1: global.user.uid,
                                                player1Score: 0,
                                                player2Score: 0,
                                                player1Move: null,
                                                player2Move: null  
                                                }).then(docRef => {
                        startGame(docRef.id)
                        db.collection("users").doc(global.user.uid).update({currentGame:docRef.id})
                        db.collection("users").doc(opponentUserId).update({currentGame:docRef.id})
                    })
                }
            }
        });

    // Stop listening to changes
    return () => {
            listener();
    }
    }, [])

    if (gameId == 0) {
        return <View style={styles.container}>
            <Text> Waiting For Opponent</Text>
        </View>
    }

    db.collection('game').doc(gameId).get().then(docRef => {
        console.log(docRef.data().player1)
        if (docRef.data().player1 != global.user.uid){
            setPlayer(false)
        }
    })

    const makeMove = () => {
        console.log("MOVE")
        db.collection('game').doc(gameId).get().then(snap =>{
            if (player1) {
                db.collection('game').doc(gameId).update({player1Move: yourMove})
                if (snap.data().player2Move != null) {
                    checkWin(snap.data().player2Move, true)
                }
                else {
                    var listenForMove = db.collection('game').doc(gameId).onSnapshot((doc) => {
                    if(doc.data().player2Move != null) {
                        checkWin(doc.data().player2Move, true)
                        listenForMove()
                    }
                    })  
                }
            }
            else {
                db.collection('game').doc(gameId).update({player2Move: yourMove})
                if (snap.data().player1Move != null) {
                    checkWin(snap.data().player1Move, false)
                }
                else {
                    var listenForMove = db.collection('game').doc(gameId).onSnapshot((doc) => {
                    if(doc.data().player1Move != null) {
                        checkWin(doc.data().player1Move, false)
                        listenForMove()
                    }
                    })  
                }
            }
        })
    }

    const checkWin = (move, player1) => {
        if (player1) {
            switch (move) {
            case 0: // Paper
                setopponentMove(require('./../assets/paper.png'))
                if (yourMove == 2) {
                    setyourScore(yourScore + 1)
                    db.collection('game').doc(gameId).update({player1Score: yourScore + 1})
                }
                else if (yourMove == 1) {
                    setopponentScore(opponentScore + 1)
                    db.collection('game').doc(gameId).update({player2Score: opponentScore + 1})
                }
                break;
            case 1: // Rock
                setopponentMove(require('./../assets/rock.png'))
                if (yourMove == 0) {
                    setyourScore(yourScore + 1)
                    db.collection('game').doc(gameId).update({player1Score: yourScore + 1})
                }
                else if (yourMove == 2) {
                    setopponentScore(opponentScore + 1)
                    db.collection('game').doc(gameId).update({player2Score: opponentScore + 1})
                }
                break;
            case 2:// Scissors
                setopponentMove(require('./../assets/scissor.png'))
                if (yourMove == 1) {
                    setyourScore(yourScore + 1)
                    db.collection('game').doc(gameId).update({player1Score: yourScore + 1})
                }
                else if (yourMove == 0) {
                    setopponentScore(opponentScore + 1)
                    db.collection('game').doc(gameId).update({player2Score: opponentScore + 1})
                }
                break;
            }
        }
        else {
            switch (move) {
            case 0: // Paper
                setopponentMove(require('./../assets/paper.png'))
                if (yourMove == 2) {
                    setyourScore(yourScore + 1)
                    db.collection('game').doc(gameId).update({player2Score: yourScore + 1})
                }
                else if (yourMove == 1) {
                    setopponentScore(opponentScore + 1)
                    db.collection('game').doc(gameId).update({player1Score: opponentScore + 1})
                }
                break;
            case 1: // Rock
                setopponentMove(require('./../assets/rock.png'))
                if (yourMove == 0) {
                    setyourScore(yourScore + 1)
                    db.collection('game').doc(gameId).update({player2Score: yourScore + 1})
                }
                else if (yourMove == 2) {
                    setopponentScore(opponentScore + 1)
                    db.collection('game').doc(gameId).update({player1Score: opponentScore + 1})
                }
                break;
            case 2:// Scissors
                setopponentMove(require('./../assets/scissor.png'))
                if (yourMove == 1) {
                    setyourScore(yourScore + 1)
                    db.collection('game').doc(gameId).update({player2Score: yourScore + 1})
                }
                else if (yourMove == 0) {
                    setopponentScore(opponentScore + 1)
                    db.collection('game').doc(gameId).update({player1Score: opponentScore + 1})
                }
                break;
            }
        }
        db.collection('game').doc(gameId).update({player1Move: null, player2Move: null})
    }


    return (
        <View style={styles.container}>
            <View style={styles.playerView}>
                <PlayerView top={0} name='Player 2' image={opponentMove} score={opponentScore} ></PlayerView>
            </View>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 10}}/>
            <View style={styles.playerView}>
                <PlayerView top={1} name='Player 1' score={yourScore} move={setyourMove} makeMove={makeMove}></PlayerView>
            </View>
        </View>
    )
}

const PlayerView = (prop) =>{
    return (
        <View style={{width: "100%", height: "100%"}}>
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', width: "100%"}}>
                {prop.top == 1? 
                    <Text style={styles.score}>{prop.score}</Text>:
                    <Text style={styles.title}>{prop.name}</Text>}
                {prop.top == 1 ? <Pages indicatorColor="rgb(0, 0, 0)" onScrollEnd={(index) => prop.move(index)}>
                    <Image source={require('./../assets/paper.png')} style={{width: "100%", height: "90%", resizeMode: 'contain'}}/>
                    <Image source={require('./../assets/rock.png')} style={{ width: "100%", height: "90%", resizeMode: 'contain'}}/>
                    <Image source={require('./../assets/scissor.png')} style={{ width: "100%", height: "90%", resizeMode: 'contain' }}/>
                </Pages> : <Image source={prop.image} style={{ width: "100%", height: "85%", resizeMode: 'contain' }}/>}
                {prop.top != 1 ? 
                    <Text style={styles.score}>{prop.score}</Text>
                        :
                    <View>
                        <Pressable onPress={()=>{
                            prop.makeMove()
                        }}><Text style={styles.attack}>ATTACK!</Text></Pressable> 
                        <Text style={styles.title}>{prop.name}</Text>
                    </View>}
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
    playerView: {
        flex: 1,
        margin: 10,
        alignItems:'center'
    },
    container: {
        flex: 1,
    },
    attack: {
        padding: 10,
        textAlign: 'center',
        fontSize: 30,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor:'red',
        overflow: 'hidden',
        alignSelf:'center'
    }
});