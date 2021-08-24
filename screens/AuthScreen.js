import React, { useEffect, useState } from 'react'
import { Button, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

import Input from '../components/UI/Input'

const formReducer = (state, action) => {

}



//Building the signing up at first, later we will add the login :)
const AuthScreen = props => {
    const [isSignup, setIsSignup] = useState(false)
     
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/endSly/world-universities-csv/master/world-universities.csv", {
            method: 'GET',
            body: '',
            redirect: 'follow'
        })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }, [])
    return (
        <KeyboardAvoidingView>
            <View>
                <Text style={styles.label}>{isSignup ? 'Sign Up' : 'Login'}</Text>
            </View>
            <View style={styles.inputForm}>
                <ScrollView>
                    <Input
                        required
                        email
                        placeholder="E-Mail"
                        keyboardType="email-address"
                        errorText="Please enter a valid email address."
                        initialValue=''
                    />
                    <Input
                        required
                        password
                        placeholder="Password"
                        keyboardType="default"
                        errorText="Please enter a valid password."
                        secureTextEntry={true}
                        initialValue=''
                    />
                    {isSignup && (
                        <>
                            <Input
                                required
                                placeholder="First Name"
                                keyboardType="default"
                                errorText="Please enter a valid name."
                                secureTextEntry={true}
                                initialValue=''
                            />
                            <Input
                                required
                                placeholder="Last Name"
                                keyboardType="default"
                                errorText="Please enter a valid name."
                                secureTextEntry={true}
                                initialValue=''
                            />
                            <Input
                                required
                                placeholder="Academic Institute"
                                keyboardType="default"
                                errorText="Please enter a valid institue name."
                                secureTextEntry={true}
                                initialValue=''
                            />
                        </>
                    )}
                </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title={'Submit'} color='#eb7134' />
                </View>
                <View style={styles.button}>
                    <Button
                        title={`Switch to ${isSignup ? 'Login' : 'Sign Up'}`}
                        onPress={() => {
                            setIsSignup(prevState => !prevState);
                        }}
                        color='#66a11f'
                    />
                </View>
            </View>
        </KeyboardAvoidingView >
    )
}

styles = StyleSheet.create({
    label: {
        fontSize: 20
    },
    inputForm: {
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        justifyContent: 'space-evenly',
        display: 'flex',
        alignItems: "center"
    },
    button: {
        marginVertical: 3
    }
})

export default AuthScreen
