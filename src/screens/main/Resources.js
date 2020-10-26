import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PrimaryButton from 'library/components/PrimaryButton'
import { global } from 'res/style';

export default class Resources extends Component{
render(){
	return(
		<View style={styles.container}>
      <Text style={styles.titleText}>
       Protect Yourself!
      </Text>
			<Text style={styles.text_info}>
There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19). The best way to prevent illness is to avoid being exposed to this virus. The virus is thought to spread mainly from person-to-person.{"\n"}
		{"\t"}• Wash your hands often{"\n"}
		{"\t"}• Avoid close contact{"\n"}
		{"\t"}• Cover your mouth and nose with a mask when around others{"\n"}
		{"\t"}• Cover coughs and sneezes{"\n"}
		{"\t"}• Clean disinfect frequently touched surfaces daily{"\n"}
		{"\t"}• Monitor your health daily{"\n"}
		</Text>
      <Text style={styles.titleText}>
       What To Do If You Are Sick?
      </Text>
			<Text style={styles.text_info}>
There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19). The best way to prevent illness is to avoid being exposed to this virus. The virus is thought to spread mainly from person-to-person.{"\n"}
		{"\t"}• Stay home except to get medical care {"\n"}
		{"\t"}• Separate yourself from other people {"\n"}
		{"\t"}• Monitor your symptoms{"\n"}
		</Text>
	</View>
	);
}
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center'
	},
	titleText: {
	  fontSize: 30,
	  padding: 10,
	},
	text_info: {
	   fontSize: 14
	}
  });
