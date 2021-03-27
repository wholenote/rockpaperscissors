import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Pressable } from 'react-native';
import { Pages } from 'react-native-pages';

export default function InGame() {
    const [score, setScore] = useState({yourScore: 0, opponentScore: 0});
    const [opponentMove, setopponentMove] = useState('');
    const [yourMove, setyourMove] = useState(0);
    const makeMove = () => {
        var randomMove = Math.floor(Math.random() * 3);
        switch (randomMove) {
            case 0: // Paper
                if (yourMove == 2) {
                    setScore({yourScore: score.yourScore + 1, opponentScore: score.opponentScore})
                }
                else if (yourMove == 1) {
                    setScore({yourScore: score.yourScore, opponentScore: score.opponentScore + 1})
                }
                else
                setopponentMove(require('./../assets/paper.png'))
                break;
            case 1: // Rock
                if (yourMove == 0) {
                    setScore({yourScore: score.yourScore + 1, opponentScore: score.opponentScore})
                }
                else if (yourMove == 2) {
                    setScore({yourScore: score.yourScore, opponentScore: score.opponentScore + 1})
                }
                setopponentMove(require('./../assets/rock.png'))
                break;
            case 2:// Scissors
                if (yourMove == 1) {
                    setScore({yourScore: score.yourScore + 1, opponentScore: score.opponentScore})
                }
                else if (yourMove == 0) {
                    setScore({yourScore: score.yourScore, opponentScore: score.opponentScore + 1})
                }
                setopponentMove(require('./../assets/scissor.png'))
                break;
        }    
    }
    return (
        <View style={styles.container}>
            <View style={styles.playerView}>
                <PlayerView top={0} name='Player 2' image={opponentMove} score={score.opponentScore}></PlayerView>
            </View>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 10}}/>
            <View style={styles.playerView}>
                <PlayerView top={1} name='Player 1' score={score.yourScore} move={makeMove} selectMove={setyourMove}></PlayerView>
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
                {prop.top == 1 ? <Pages indicatorColor="rgb(0, 0, 0)" onScrollEnd={(index) => {
                    prop.selectMove(index)
                }}>
                    <Image source={require('./../assets/paper.png')} style={{width: "100%", height: "90%", resizeMode: 'contain'}}/>
                    <Image source={require('./../assets/rock.png')} style={{ width: "100%", height: "90%", resizeMode: 'contain'}}/>
                    <Image source={require('./../assets/scissor.png')} style={{ width: "100%", height: "90%", resizeMode: 'contain' }}/>
                </Pages> : <Image source={prop.image} style={{ width: "100%", height: "85%", resizeMode: 'contain' }}/>}
                {prop.top != 1 ? 
                    <Text style={styles.score}>{prop.score}</Text>
                        :
                    <View>
                        <Pressable onPress={()=>{
                            prop.move()

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