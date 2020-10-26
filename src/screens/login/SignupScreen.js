import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from 'library/components/PrimaryButton';
import SecondaryButton from 'library/components/SecondaryButton'
import FormInput from 'library/components/FormInput';
import { AuthContext } from 'navigation/AuthProvider'

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
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
      <PrimaryButton buttonTitle='Create Account' onPress={() => register(email,password)} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
    color: '#5db075'
  }
});
