import React, {useContext} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DataPage from './Covid_Info';
import Resources from './Resources';
import {global, header} from './style';
import PrimaryButton from './components/PrimaryButton';
import { AuthContext } from './navigation/AuthProvider'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
        <Stack.Navigator initialRouteName = 'Home' screenOptions={header} headerMode='float'>
			<Stack.Screen name = ' ' component={MainTabNavigator} />
		</Stack.Navigator>
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
                <Tab.Screen name="CovidData" component={DataPage} options={{title:'Covid Data'}}/>
                <Tab.Screen name="Resources" component={Resources} />
            </Tab.Navigator>

    )
}


const HomeScreen = ({navigation}) => {
	return (
    <View style={styles.container}> 
      <Text style={styles.text}>Welcome to HealthLine</Text>
      <Image source={require('./assets/images/home.png')} style={styles.img}/>
	  <PrimaryButton buttonTitle="Covid" onPress={() => navigation.navigate('CovidData')} />
    </View>
	);
};


const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    text: {
        fontSize: 20,
        color: '#333333'
    },
    img: {
        width: 300,
        height: 300,
    }
})

export default App;
