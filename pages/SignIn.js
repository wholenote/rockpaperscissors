import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';

export default function SignIn(props) {
    const [signup, setSignUp] = useState(false);
    //login vars
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");

    //sign up vars
    const [username, onChangeUsername] = useState("");
    const [newemail, onChangeNewEmail] = useState("");
    const [newpassword, onChangeNewPassword] = useState("");

    if (!signup) {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TextInput
                    style={styles.input}
                    placeholder="email"
                    onChangeText={onChangeEmail}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={onChangePassword}
                    value={password}
                />
                <Pressable 
                    onPress={()=>{
                        
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
                    <Text style={styles.buttonText}>sign in</Text>
                </Pressable>
                <Pressable 
                    onPress={()=>{
                        setSignUp(true);
                    }}
                >
                    <Text style={{color: 'blue'}}>not signed up? sign up here</Text>
                </Pressable>
            </View>
        )
    } else {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TextInput
                    style={styles.input}
                    placeholder="username"
                    onChangeText={onChangeUsername}
                    value={username}
                />
                <TextInput
                    style={styles.input}
                    placeholder="email"
                    onChangeText={onChangeNewEmail}
                    value={newemail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={onChangeNewPassword}
                    value={newpassword}
                />
                <Pressable 
                    onPress={()=>{
                        
                    }}
                    style={({ pressed }) => [
                        {
                        backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'white'
                        },
                        styles.buttonPress
                    ]}
                    hitSlop={40}
                    >
                    <Text style={styles.buttonText}>sign up</Text>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 30,
    },
    buttonText: {
        fontSize: 30,
        padding: 10,
        textAlign: 'center'
    },
    buttonPress: {
        borderRadius: 15,
        backgroundColor: 'pink',
        padding: 6,
        margin: 10,
        width: "40%"
    }
});