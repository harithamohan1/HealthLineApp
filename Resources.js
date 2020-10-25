import React, {Component} from 'react';
import {View, Text } from 'react-native';
import {global } from './style';

export default class Resources extends Component{
render(){
	return(
		<View style={global.container}>
      <Text style={{ fontSize: 30, textAlign: 'left', padding: 10 }}>
       Protect Yourself!
      </Text>
			<Text style={global.text_info}>
There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19). The best way to prevent illness is to avoid being exposed to this virus. The virus is thought to spread mainly from person-to-person.
		{"\t"}• Wash your hands often{"\n"}
		{"\t"}• Avoid close contact{"\n"}
		{"\t"}• Cover your mouth and nose with a mask when around others{"\n"}
		{"\t"}• Cover coughs and sneezes{"\n"}
		{"\t"}• Clean disinfect frequently touched surfaces daily{"\n"}
		{"\t"}• Monitor your health daily{"\n"}
		</Text>
      <Text style={{ fontSize: 30, textAlign: 'left', padding: 10 }}>
       What To Do If You Are Sick?
      </Text>
			<Text style={global.text_info}>
There is currddently no vaccine to prevent coronavirus disease 2019 (COVID-19). The best way to prevent illness is to avoid being exposed to this virus. The virus is thought to spread mainly from person-to-person.
		{"\t"}• Stay home except to get medical care {"\n"}
		{"\t"}• Separate yourself from other people {"\n"}
		{"\t"}• Monitor your symptoms{"\n"}
		</Text>
	</View>
	);
}
}
