import React, { useEffect, useState, useCallback, useReducer } from 'react'
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from '@react-navigation/native';

import HeaderButton from '../components/UI/HeaderButton';
import Input from '../components/UI/Input'
import { ScrollView } from 'react-native-gesture-handler';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
    }
    return state;
};

const UpdateUserPage = props => {

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            bio: '',

        },
        inputValidities: {
            bio: false
        },
        formIsValid: false
    });

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputIdentifier
            })
        },
        [dispatchFormState]
    )

    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={20}
            style={styles.screen}
        >
            <Text>
                Update user data page
            </Text>
            <View style={styles.inputForm}>
                <ScrollView>
                    <Input
                        id="bio"
                        isTextArea={true}
                        numberOfLines={4}
                        multiline
                        placeholder='Type a short bio about yourself :)'
                        initialValue=""
                        onInputChange={inputChangeHandler}
                        maxLength={100}
                        style={styles.bio}
                    />
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}

// export const screenOptions = navData => {
//     return {
//         headerTitle: 'Students Scheduler',
//         headerLeft: () => (
//             <HeaderButtons HeaderButtonComponent={HeaderButton}>
//                 <Item
//                     title="Menu"
//                     onPress={() => {
//                         navData.navigation.dispatch(DrawerActions.toggleDrawer());
//                     }}
//                 />
//             </HeaderButtons>
//         )
//     }
// }

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    inputForm: {
        width: '100%',
        padding: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    bio: {
        borderColor: '#000000',
        borderWidth: 1,
    }
})

export default UpdateUserPage