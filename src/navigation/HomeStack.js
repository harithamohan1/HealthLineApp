import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colors, header } from 'res/style'
import DataPage from '../screens/main/CovidInfo'
import Resources from '../screens/main/Resources'
import HomePage from '../screens/main/HomeScreen'
import News from '../screens/main/News'
import ProfileStack from '../screens/main/Profile/ProfileNavigator'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function HomeStack() {
    return (
				<Stack.Navigator initialRouteName = 'Home' screenOptions={header} headerMode='float'>
            <Stack.Screen name=' ' component={MainTabNavigator} />
        </Stack.Navigator>
    )
}

export function MainTabNavigator(){
    return(
			<Tab.Navigator>
				<Tab.Screen name="Home" component={HomePage}/>
				<Tab.Screen name="CovidData" component={DataPage} options={{title:'Covid Data'}}/>
				<Tab.Screen name="News" component={News} />
				<Tab.Screen name="Resources" component={Resources} />
				<Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>

    )
}

