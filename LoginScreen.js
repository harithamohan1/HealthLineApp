import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PrimaryButton from './components/PrimaryButton';
import SecondaryButton from './components/SecondaryButton'
import FormInput from './components/FormInput';
import { AuthContext } from './navigation/AuthProvider'

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <FormInput
                value={email}
                placeholderText='Email'
                onChangeText={userEmail => setEmail(userEmail)}
                autoCapitalize='none'
                keyboardType='email-address'
                autoCorrect={false}
            />
            <FormInput
                value={password}
                placeholderText='Password'
                onChangeText={userPassword => setPassword(userPassword)}
                secureTextEntry={true}
            />
            <PrimaryButton buttonTitle='Log In' onPress={() => login(email,password)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 36,
        color: '#5db075'
    },
    subtitleText: {
        fontSize: 12,
        color: '#7c7c7c'
    }
})