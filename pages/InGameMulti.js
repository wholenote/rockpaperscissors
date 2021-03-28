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

    useEffect(() => {
        var listener = ()=>{}
        db.collection("matching").on
        var collection = db.collection("matching").get().then((snap) => {
            if (snap.size < 1) {
                var myMatchingId = ""
                db.collection("matching").add({user: global.user.uid}).then(docRef => {
                    myMatchingId = docRef.id
                })
                listener = db.collection("matching")
                    .onSnapshot((docs) => {
                        docs.docs.forEach((doc) => {
                            var opponentId = doc.data().user
                            if (opponentId != global.user.uid) {
                                db.collection("matching").doc(myMatchingId).delete()
                                db.collection("matching").doc(doc.id).delete()
                                listener()
                                db.collection('game').add({opponent:opponentId, 
                                                you: global.user.uid, 
                                                opponentScore: 0,
                                                yourScore: 0,
                                                }).then(docRef => {
                                    startGame(docRef.id)
                                })
                            }
                        })
                });
            }
            else {
                var opponent = snap.docs[0]
                var opponentDocId = opponent.id
                var opponentUserId = opponent.data().user
                if (opponentUserId != global.user.uid) {
                    db.collection("matching").doc(opponentDocId).delete()
                    listener()
                    db.collection('game').add({opponent:opponentUserId, 
                                                you: global.user.uid,
                                                opponentScore: 0,
                                                yourScore: 0, 
                                                }).then(docRef => {
                        startGame(docRef.id)
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

    const makeMove = () => {
        db.collection('game').doc(gameId).get().then(snap =>{
            if (snap.data().opponentMove != null) {
                checkWin(snap.data().opponentMove)
            }
            else {
                console.log("waiting")
                db.collection('game').doc(gameId).update({yourMove: yourMove})
                var listenForMove = db.collection('game').doc(gameId).onSnapshot((doc) => {
                    if(doc.data().opponentMove != null) {
                        checkWin(doc.data().opponentMove)
                        listenForMove()
                    }
                })
            }
        })
        console.log(yourMove)
    }

    const checkWin = (move) => {
        switch (move) {
            case 0: // Paper
                setopponentMove(require('./../assets/paper.png'))
                if (yourMove == 2) {
                    setyourScore(yourScore + 1)
                    db.collection('game').doc(gameId).update({yourScore: yourScore + 1})
                }
                else if (yourMove == 1) {
                    setopponentScore(opponentScore + 1)
                    db.collection('game').doc(gameId).update({opponentScore: opponentScore + 1})
                }
                break;
            case 1: // Rock
                setopponentMove(require('./../assets/rock.png'))
                if (yourMove == 0) {
                    setyourScore(yourScore + 1)
                    db.collection('game').doc(gameId).update({yourScore: yourScore + 1})
                }
                else if (yourMove == 2) {
                    setopponentScore(opponentScore + 1)
                    db.collection('game').doc(gameId).update({opponentScore: opponentScore + 1})
                }
                break;
            case 2:// Scissors
                setopponentMove(require('./../assets/scissor.png'))
                if (yourMove == 1) {
                    setyourScore(yourScore + 1)
                    db.collection('game').doc(gameId).update({yourScore: yourScore + 1})
                }
                else if (yourMove == 0) {
                    setopponentScore(opponentScore + 1)
                    db.collection('game').doc(gameId).update({opponentScore: opponentScore + 1})
                }
                break;
        }
        db.collection('game').doc(gameId).update({yourMove: null, opponentMove: null})
    }
    return (
        <View style={styles.container}>
            <View style={styles.playerView}>
                <PlayerView top={0} name='Player 2' image={'./../assets/paper.png'} score={opponentScore}></PlayerView>
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