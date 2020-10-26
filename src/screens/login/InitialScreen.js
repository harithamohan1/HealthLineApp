import React, { useState, useContext } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PrimaryButton from 'library/components/PrimaryButton';
import SecondaryButton from 'library/components/SecondaryButton'

export default function InitialScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Healthline</Text>
            <Text style={styles.subtitleText}>Your personal healthline at your fingertips</Text>
            <Image source={require('res/assets/images/home.png')} style={styles.img}/>
            <PrimaryButton buttonTitle='Get Started'
                onPress={() => navigation.navigate('Signup')} />
            <SecondaryButton buttonTitle='Log In' onPress={() => navigation.navigate('Login')} />
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
    },
    img: {
        width: 300,
        height: 300,
    }
})
