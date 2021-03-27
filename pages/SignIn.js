import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, TextInput, StatusBar, Button, View } from 'react-native';

export default function SignIn(props) {
    const [signup, setSignUp] = useState(false);
    if (!signup) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.headerText}>email</Text>
                <TextInput
                    style={styles.input}
                />
                <Text style={styles.headerText}>password</Text>
                <TextInput
                    style={styles.input}
                />
                <View> 
                    <Button
                        title="Sign In"
                        
                    />
                </View>
                <Text>not signed up?</Text> 
                <Pressable 
                    onPress={()=>{
                        setSignUp(true);
                    }}
                    style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'white'
                        },
                        styles.buttonPress
                    ]}
                >
                    <Text style={styles.buttonText}>sign up here</Text>
                </Pressable>
            </SafeAreaView>
        )
    } else {
        <SafeAreaView style={styles.container}>
                <Text style={styles.headerText}>email</Text>
                <TextInput
                    style={styles.input}
                />
                <Text style={styles.headerText}>password</Text>
                <TextInput
                    style={styles.input}
                />
                <View> 
                    <Button
                        title="Sign In"
                        
                    />
                </View>
                
            </SafeAreaView>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        margin: 10,
        padding: 10,
        justifyContent: "center"
    },
    headerText: {
        fontSize: 30,
        //padding: 15,
        marginHorizontal: 15,
    },
    input: {
        height: 30,
        margin: 15,
        borderWidth: 1,
    },
    button: {

    },
    buttonText: {

    },
    buttonPress: {
        
    }
});