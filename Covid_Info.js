import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Button } from 'react-native';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';
import { global, pickerSelectStyles } from './style';

export default class DataPage extends Component{
	constructor(){
		super();
		this.state = {
		selectedCountry: undefined,
		items: [
					{ label:'Azerbaijan', value: 'Azerbaijan'},
					{ label:'Afghanistan', value: 'Afghanistan'},
					{ label: 'Albania', value: 'Albania'},
					{ label: 'Algeria', value: 'Algeria'},
					{ label: 'Andorra', value: 'Andorra'},
					{ label: 'Angola', value: 'Angola'},
					{ label: 'Antigua and Barbuda', value: 'Antigua and Barbuda'},
					{ label: 'Argentina', value: 'Argentina'},
					{ label: 'Armenia', value: 'Armenia'},
					{ label: 'Aruba', value: 'Aruba'},
					{ label: 'Australia', value: 'Australia'},
					{ label: 'Austria', value: 'Austria'},
					{ label: 'Azerbaijan', value: 'Azerbaijan'},
					{ label: 'Bahamas', value: 'Bahamas'},
					{ label: 'Bahamas, The', value: 'Bahamas, The'},
					{ label: 'Bahrain', value: 'Bahrain'},
					{ label: 'Bangladesh', value: 'Bangladesh'},
					{ label: 'Barbados', value: 'Barbados'},
					{ label: 'Belarus', value: 'Belarus'},
					{ label: 'Belgium', value: 'Belgium'},
					{ label: 'Belize', value: 'Belize'},
					{ label: 'Benin', value: 'Benin'},
					{ label: 'Bhutan', value: 'Bhutan'},
					{ label: 'Bolivia', value: 'Bolivia'},
					{ label: 'Bosnia and Herzegovina', value: 'Bosnia and Herzegovina'},
					{ label: 'Botswana', value: 'Botswana'},
					{ label: 'Brazil', value: 'Brazil'},
					{ label: 'Brunei', value: 'Brunei'},
					{ label: 'Bulgaria', value: 'Bulgaria'},
					{ label: 'Burkina Faso', value: 'Burkina Faso'},
					{ label: 'Burma', value: 'Burma'},
					{ label: 'Burundi', value: 'Burundi'},
					{ label: 'Cabo Verde', value: 'Cabo Verde'},
					{ label: 'Cambodia', value: 'Cambodia'},
					{ label: 'Cameroon', value: 'Cameroon'},
					{ label: 'Canada', value: 'Canada'},
					{ label: 'Cape Verde', value: 'Cape Verde'},
					{ label: 'Cayman Islands', value: 'Cayman Islands'},
					{ label: 'Central African Republic', value: 'Central African Republic'},
					{ label: 'Chad', value: 'Chad'},
					{ label: 'Channel Islands', value: 'Channel Islands'},
					{ label: 'Chile', value: 'Chile'},
					{ label: 'China', value: 'China'},
					{ label: 'Colombia', value: 'Colombia'},
					{ label: 'Comoros', value: 'Comoros'},
					{ label: 'Congo (Brazzaville)', value: 'Congo (Brazzaville)'},
					{ label: 'Congo (Kinshasa)', value: 'Congo (Kinshasa)'},
					{ label: 'Costa Rica', value: 'Costa Rica'},
					{ label: "Cote d'Ivoire", value: "Cote d'Ivoire"},
					{ label: 'Croatia', value: 'Croatia'},
					{ label: 'Cruise Ship', value: 'Cruise Ship'},
					{ label: 'Cuba', value: 'Cuba'},
					{ label: 'Curacao', value: 'Curacao'},
					{ label: 'Cyprus', value: 'Cyprus'},
					{ label: 'Czech Republic', value: 'Czech Republic'},
					{ label: 'Czechia', value: 'Czechia'},
					{ label: 'Denmark', value: 'Denmark'},
					{ label: 'Diamond Princess', value: 'Diamond Princess'},
					{ label: 'Djibouti', value: 'Djibouti'},
					{ label: 'Dominica', value: 'Dominica'},
					{ label: 'Dominican Republic', value: 'Dominican Republic'},
					{ label: 'East Timor', value: 'East Timor'},
					{ label: 'Ecuador', value: 'Ecuador'},
					{ label: 'Egypt', value: 'Egypt'},
					{ label: 'El Salvador', value: 'El Salvador'},
					{ label: 'Equatorial Guinea', value: 'Equatorial Guinea'},
					{ label: 'Eritrea', value: 'Eritrea'},
					{ label: 'Estonia', value: 'Estonia'},
					{ label: 'Eswatini', value: 'Eswatini'},
					{ label: 'Ethiopia', value: 'Ethiopia'},
					{ label: 'Faroe Islands', value: 'Faroe Islands'},
					{ label: 'Fiji', value: 'Fiji'},
					{ label: 'Finland', value: 'Finland'},
					{ label: 'France', value: 'France'},
					{ label: 'French Guiana', value: 'French Guiana'},
					{ label: 'Gabon', value: 'Gabon'},
					{ label: 'Gambia', value: 'Gambia'},
					{ label: 'Gambia, The', value: 'Gambia, The'},
					{ label: 'Georgia', value: 'Georgia'},
					{ label: 'Germany', value: 'Germany'},
					{ label: 'Ghana', value: 'Ghana'},
					{ label: 'Gibraltar', value: 'Gibraltar'},
					{ label: 'Greece', value: 'Greece'},
					{ label: 'Greenland', value: 'Greenland'},
					{ label: 'Grenada', value: 'Grenada'},
					{ label: 'Guadeloupe', value: 'Guadeloupe'},
					{ label: 'Guam', value: 'Guam'},
					{ label: 'Guatemala', value: 'Guatemala'},
					{ label: 'Guernsey', value: 'Guernsey'},
					{ label: 'Guinea', value: 'Guinea'},
					{ label: 'Guinea-Bissau', value: 'Guinea-Bissau'},
					{ label: 'Guyana', value: 'Guyana'},
					{ label: 'Haiti', value: 'Haiti'},
					{ label: 'Holy See', value: 'Holy See'},
					{ label: 'Honduras', value: 'Honduras'},
					{ label: 'Hong Kong', value: 'Hong Kong'},
					{ label: 'Hong Kong SAR', value: 'Hong Kong SAR'},
					{ label: 'Hungary', value: 'Hungary'},
					{ label: 'Iceland', value: 'Iceland'},
					{ label: 'India', value: 'India'},
					{ label: 'Indonesia', value: 'Indonesia'},
					{ label: 'Iran', value: 'Iran'},
					{ label: 'Iran (Islamic Republic of)', value: 'Iran (Islamic Republic of)'},
					{ label: 'Iraq', value: 'Iraq'},
					{ label: 'Ireland', value: 'Ireland'},
					{ label: 'Israel', value: 'Israel'},
					{ label: 'Italy', value: 'Italy'},
					{ label: 'Ivory Coast', value: 'Ivory Coast'},
					{ label: 'Jamaica', value: 'Jamaica'},
					{ label: 'Japan', value: 'Japan'},
					{ label: 'Jersey', value: 'Jersey'},
					{ label: 'Jordan', value: 'Jordan'},
					{ label: 'Kazakhstan', value: 'Kazakhstan'},
					{ label: 'Kenya', value: 'Kenya'},
					{ label: 'Korea, South', value: 'Korea, South'},
					{ label: 'Kosovo', value: 'Kosovo'},
					{ label: 'Kuwait', value: 'Kuwait'},
					{ label: 'Kyrgyzstan', value: 'Kyrgyzstan'},
					{ label: 'Laos', value: 'Laos'},
					{ label: 'Latvia', value: 'Latvia'},
					{ label: 'Lebanon', value: 'Lebanon'},
					{ label: 'Lesotho', value: 'Lesotho'},
					{ label: 'Liberia', value: 'Liberia'},
					{ label: 'Libya', value: 'Libya'},
					{ label: 'Liechtenstein', value: 'Liechtenstein'},
					{ label: 'Lithuania', value: 'Lithuania'},
					{ label: 'Luxembourg', value: 'Luxembourg'},
					{ label: 'Macao SAR', value: 'Macao SAR'},
					{ label: 'Macau', value: 'Macau'},
					{ label: 'Madagascar', value: 'Madagascar'},
					{ label: 'Mainland China', value: 'Mainland China'},
					{ label: 'Malawi', value: 'Malawi'},
					{ label: 'Malaysia', value: 'Malaysia'},
					{ label: 'Maldives', value: 'Maldives'},
					{ label: 'Mali', value: 'Mali'},
					{ label: 'Malta', value: 'Malta'},
					{ label: 'Martinique', value: 'Martinique'},
					{ label: 'Mauritania', value: 'Mauritania'},
					{ label: 'Mauritius', value: 'Mauritius'},
					{ label: 'Mayotte', value: 'Mayotte'},
					{ label: 'Mexico', value: 'Mexico'},
					{ label: 'Moldova', value: 'Moldova'},
					{ label: 'Monaco', value: 'Monaco'},
					{ label: 'Mongolia', value: 'Mongolia'},
					{ label: 'Montenegro', value: 'Montenegro'},
					{ label: 'Morocco', value: 'Morocco'},
					{ label: 'Mozambique', value: 'Mozambique'},
					{ label: 'MS Zaandam', value: 'MS Zaandam'},
					{ label: 'Namibia', value: 'Namibia'},
					{ label: 'Nepal', value: 'Nepal'},
					{ label: 'Netherlands', value: 'Netherlands'},
					{ label: 'New Zealand', value: 'New Zealand'},
					{ label: 'Nicaragua', value: 'Nicaragua'},
					{ label: 'Niger', value: 'Niger'},
					{ label: 'Nigeria', value: 'Nigeria'},
					{ label: 'North Ireland', value: 'North Ireland'},
					{ label: 'North Macedonia', value: 'North Macedonia'},
					{ label: 'Norway', value: 'Norway'},
					{ label: 'occupied Palestinian territory', value: 'occupied Palestinian territory'},
					{ label: 'Oman', value: 'Oman'},
					{ label: 'Others', value: 'Others'},
					{ label: 'Pakistan', value: 'Pakistan'},
					{ label: 'Palestine', value: 'Palestine'},
					{ label: 'Panama', value: 'Panama'},
					{ label: 'Papua New Guinea', value: 'Papua New Guinea'},
					{ label: 'Paraguay', value: 'Paraguay'},
					{ label: 'Peru', value: 'Peru'},
					{ label: 'Philippines', value: 'Philippines'},
					{ label: 'Poland', value: 'Poland'},
					{ label: 'Portugal', value: 'Portugal'},
					{ label: 'Puerto Rico', value: 'Puerto Rico'},
					{ label: 'Qatar', value: 'Qatar'},
					{ label: 'Republic of Ireland', value: 'Republic of Ireland'},
					{ label: 'Republic of Korea', value: 'Republic of Korea'},
					{ label: 'Republic of Moldova', value: 'Republic of Moldova'},
					{ label: 'Republic of the Congo', value: 'Republic of the Congo'},
					{ label: 'Reunion', value: 'Reunion'},
					{ label: 'Romania', value: 'Romania'},
					{ label: 'Russia', value: 'Russia'},
					{ label: 'Russian Federation', value: 'Russian Federation'},
					{ label: 'Rwanda', value: 'Rwanda'},
					{ label: 'Saint Barthelemy', value: 'Saint Barthelemy'},
					{ label: 'Saint Kitts and Nevis', value: 'Saint Kitts and Nevis'},
					{ label: 'Saint Lucia', value: 'Saint Lucia'},
					{ label: 'Saint Martin', value: 'Saint Martin'},
					{ label: 'Saint Vincent and the Grenadines', value: 'Saint Vincent and the Grenadines'},
					{ label: 'San Marino', value: 'San Marino'},
					{ label: 'Sao Tome and Principe', value: 'Sao Tome and Principe'},
					{ label: 'Saudi Arabia', value: 'Saudi Arabia'},
					{ label: 'Senegal', value: 'Senegal'},
					{ label: 'Serbia', value: 'Serbia'},
					{ label: 'Seychelles', value: 'Seychelles'},
					{ label: 'Sierra Leone', value: 'Sierra Leone'},
					{ label: 'Singapore', value: 'Singapore'},
					{ label: 'Slovakia', value: 'Slovakia'},
					{ label: 'Slovenia', value: 'Slovenia'},
					{ label: 'Solomon Islands', value: 'Solomon Islands'},
					{ label: 'Somalia', value: 'Somalia'},
					{ label: 'South Africa', value: 'South Africa'},
					{ label: 'South Korea', value: 'South Korea'},
					{ label: 'South Sudan', value: 'South Sudan'},
					{ label: 'Spain', value: 'Spain'},
					{ label: 'Sri Lanka', value: 'Sri Lanka'},
					{ label: 'St. Martin', value: 'St. Martin'},
					{ label: 'Sudan', value: 'Sudan'},
					{ label: 'Suriname', value: 'Suriname'},
					{ label: 'Sweden', value: 'Sweden'},
					{ label: 'Switzerland', value: 'Switzerland'},
					{ label: 'Syria', value: 'Syria'},
					{ label: 'Taipei and environs', value: 'Taipei and environs'},
					{ label: 'Taiwan', value: 'Taiwan'},
					{ label: 'Taiwan*', value: 'Taiwan*'},
					{ label: 'Tajikistan', value: 'Tajikistan'},
					{ label: 'Tanzania', value: 'Tanzania'},
					{ label: 'Thailand', value: 'Thailand'},
					{ label: 'The Bahamas', value: 'The Bahamas'},
					{ label: 'The Gambia', value: 'The Gambia'},
					{ label: 'Timor-Leste', value: 'Timor-Leste'},
					{ label: 'Togo', value: 'Togo'},
					{ label: 'Trinidad and Tobago', value: 'Trinidad and Tobago'},
					{ label: 'Tunisia', value: 'Tunisia'},
					{ label: 'Turkey', value: 'Turkey'},
					{ label: 'Uganda', value: 'Uganda'},
					{ label: 'UK', value: 'UK'},
					{ label: 'Ukraine', value: 'Ukraine'},
					{ label: 'United Arab Emirates', value: 'United Arab Emirates'},
					{ label: 'United Kingdom', value: 'United Kingdom'},
					{ label: 'Uruguay', value: 'Uruguay'},
					{ label: 'US', value: 'US'},
					{ label: 'Uzbekistan', value: 'Uzbekistan'},
					{ label: 'Vatican City', value: 'Vatican City'},
					{ label: 'Venezuela', value: 'Venezuela'},
					{ label: 'Viet Nam', value: 'Viet Nam'},
					{ label: 'Vietnam', value: 'Vietnam'},
					{ label: 'West Bank and Gaza', value: 'West Bank and Gaza'},
					{ label: 'Western Sahara', value: 'Western Sahara'},
					{ label: 'Yemen', value: 'Yemen'},
					{ label: 'Zambia', value: 'Zambia'},
					{ label: 'Zimbabwe', value: 'Zimbabwe'},		
		],
			country: '',
			date: '',
			latest_confirm: '',
			latest_deaths: '',
			latest_recovered: '',
			latest_active: '',
			daily_increases: '',
		}
		this.onPressButton= this.onPressButton.bind(this);
	}

	onPressButton(){
		axios
			.post('https://us-central1-technica-293516.cloudfunctions.net/covid_data', { country: this.state.selectedCountry })
			.then((response) => {
				//handle success
				var data = JSON.stringify(response.data);
				var data2 = JSON.parse(data);
				this.setState({ 
					country:data2.country, 
					date:data2.date, 
					latest_confirm:data2.latest_confirmed, 
					latest_deaths:data2.latest_deaths,
					latest_recovered:data2.latest_recovered,
					latest_active:data2.latest_active,
					daily_increases:data2.daily_increase
				});
			})
			.catch(function(error){
				//handle error
				console.log("error");
				alert(error.message);
			});
	};

	render(){
	return (
		<View style={global.container}>
      <Text style={{ fontSize: 30, textAlign: 'center', padding: 10 }}>
       covid data!
      </Text>

			<RNPickerSelect 
				placeholder={{ label: 'Select a country...', value: null, }}
				items={this.state.items}
				onValueChange={(value) => {
					this.setState({ selectedCountry: value })
				}}
				style={{ ...pickerSelectStyles }}
				value={this.state.selectedCountry}
			/>
			<Button
				onPress={ this.onPressButton }
				color="#5DB075"
				title="Get Data"
			/>
		
			<Text style={global.text_info}>
			Country: {"\t"}{"\t"}{"\t"}{"\t"}{"\t"} {this.state.country} {"\n"}
			Date: {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} {this.state.date} {"\n"}
			Total Confirmed Case: {"\t"}{"\t"} {this.state.latest_confirm} {"\n"}
			Total Death: {"\t"}{"\t"}{"\t"}{"\t"}{"\t"} {this.state.latest_deaths} {"\n"}
			Total Recovered: {"\t"}{"\t"}{"\t"}{"\t"} {this.state.latest_recovered} {"\n"}
			Total Current Active Case: {"\t"} {this.state.latest_active} {"\n"}
			Daily Increases: {"\t"}{"\t"}{"\t"}{"\t"} {this.state.daily_increases} {"\n"}
      </Text>
    </View>
	);
	}
}

