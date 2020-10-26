import { StyleSheet } from 'react-native'
export const colors = {
	background_light: "#ffffff",
	background_green: "#5DB075",
	text: "#000000",
	text_light: "#ffffff",
	main: "#5DB075",
	gray_light: 'gray'
};

export const values = {
	font_size: 14,
	font_title: 18,
	title_weight: "600"
}

export const global = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: colors.text_light,
		padding: 8
	},
	text: {
		color: colors.text,
		fontSize: values.font_size,
		fontFamily: values.font,
		marginTop: 4,
		marginLeft: 8,
		marginRight: 8,
		marginBottom: 8
	},
	text_title: {
		color: colors.text,
		textAlign: 'center',
		fontSize: values.font_title,
		fontFamily: values.font,
		fontWeight: values.title_weight
	},
	text_info: {
		color: colors.text,
		textAlign: 'left',
		fontSize: values.font_size,
		fontFamily: values.font,
		marginTop: 4,
		marginLeft: 8,
		marginRight: 8,
		marginBottom: 8,
		padding: 20
	},
	img: {
		width: 300,
		height: 300
	},
	userRow: {
		alignItems: 'center',
		paddingBottom: 20,
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 20,
	},
	listItemContainer:{
		height: 55,
		borderWidth: 0.5,
		borderColor: '#ECECEC',
		paddingBottom: 15,
	},
});

export const header ={
	headerStyle: {
		backgroundColor: colors.background_green
	},
	headerTintColor: colors.text_light,
	};


export const pickerSelectStyles = StyleSheet.create({
	    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 15,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
				margin: 15
    },
});
