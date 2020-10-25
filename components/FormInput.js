import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default function FormInput({ labelValue, placeholderText, ...rest }) {
  return (
    <TextInput
      value={labelValue}
      style={styles.input}
      numberOfLines={1}
      placeholder={placeholderText}
      placeholderTextColor='#f6f6f6'
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        margin: 5,
        width: 340,
        height: 50,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        backgroundColor: '#f6f6f6'
    }
})