import { StyleSheet } from 'react-native'
export const colors = {
	background_light: "#ffffff",
	background_green: "#5DB075",
	text: "#000000",
	text_light: "#ffffff"
};

export const values = {
	font_size: 14
}

export const global = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: colors.text_light,
		padding: 8
	},
	text: {
		color: 'black',
		fontSize: values.font_size,
		fontFamily: values.font,
		marginTop: 4,
		marginLeft: 8,
		marginRight: 8,
		marginBottom: 8
	},
	text_info: {
		color: 'black',
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
		width: 100,
		height: 100
	}
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
