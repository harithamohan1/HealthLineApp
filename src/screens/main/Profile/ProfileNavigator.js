import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import { AuthContext } from 'navigation/AuthProvider'
import { global, colors } from 'res/style'
import AccSetting from './AccSetting'
import Notifications from './Notifications'
import Privacy from './Privacy'
import FeedbackSupport from './FeedbackSupport'

const Stack = createStackNavigator()

export default function ProfileStack(){
	return(
			<Stack.Navigator initialRouteName='Profile'>
				<Stack.Screen name='Profile' component={Profile} />
				<Stack.Screen name='Settings' component={AccSetting} />
				<Stack.Screen name='Notifications' component={Notifications} />
				<Stack.Screen name='Privacy' component={Privacy} />
				<Stack.Screen name='FeedbackSupport' component={FeedbackSupport} />
			</Stack.Navigator>
	)
}


const Profile = ({navigation}) => {
	const { user } = useContext(AuthContext)

	return(
		<ScrollView>
			<View style={global.userRow}>
			<View> 
				<Text style={global.text_title}>{user.email}!</Text>
			</View>
			</View>
			<View>
				<ListItem
					title="Account Settings"
					onPress={() => navigation.navigate('Settings')} 
					containerStyle={global.listItemContainer} 
				/>
				<ListItem
					title="Notifications"
					onPress={() => navigation.navigate('Notifications')} 
					containerStyle={global.listItemContainer} 
				/>
				<ListItem
					title="Privacy"
					onPress={() => navigation.navigate('Privacy')} 
					containerStyle={global.listItemContainer} 
				/>
				<View style={{padding: 20,}}></View>
				<ListItem
					title="Feedback & Support"
					onPress={() => navigation.navigate('FeedbackSupport')} 
					containerStyle={global.listItemContainer} 
				/>
			</View>
		</ScrollView>
	);
}
