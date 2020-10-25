import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../SignupScreen';
import LoginScreen from '../LoginScreen';
import InitialScreen from '../InitialScreen'

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Initial'>
      <Stack.Screen
        name='Initial'
        component={InitialScreen}
        options={{ header: () => null, title: "Back" }}
      />
      <Stack.Screen name='Signup' component={SignupScreen} options={{ title: "Sign Up" }}/>
      <Stack.Screen name='Login' component={LoginScreen} options={{ title: "Log In" }}/>
    </Stack.Navigator>
  );
}