import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

export default function PrimaryButton({ buttonTitle, ...rest }) {
    return(
        <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: 250,
        height: 50,
        backgroundColor: '#f6f6f6',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    buttonText: {
        fontSize: 16,
        color: '#5DB075'
    }
})