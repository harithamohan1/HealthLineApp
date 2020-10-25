import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DataPage from './Covid_Info';
import Resources from './Resources';
import {global, header} from './style';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName = 'Home' screenOptions={header} headerMode='float'>
			<Stack.Screen name = ' ' component={MainTabNavigator} />
			</Stack.Navigator>
		</NavigationContainer>
  );
};

export function MainTabNavigator(){
	return(
			<Tab.Navigator>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
					options={{title:'Welcome'}}
				/>
				<Tab.Screen name="CovidData" component={DataPage} />
				<Tab.Screen name="Resources" component={Resources} />
			</Tab.Navigator>

	)
}

const HomeScreen = ({navigation}) => {
	return (
    <View style={global.container}> 
      <Text style={global.text}>Welcome to HealthLine</Text>
      <Image source={{uri: 'https://www.tc.columbia.edu/media/news/images/2020/may/covid-doctors-istock.jpg'}} style={global.img}/>
			<Button title="covid" onPress={() => navigation.navigate('CovidData')} />
    </View>
	);
};
 
export default App;
