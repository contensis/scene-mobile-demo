import { StyleSheet } from 'react-native';

export var LightColor = '#F4F4F4';
export var DarkColor = '#2F2F2F';
export var TabColor = '#444444';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: DarkColor,
	},
	header: {
		padding: 5,
		backgroundColor: DarkColor
	},
	headerTitle: {
		color: LightColor
	},
	headerBackTitle: {
		color: LightColor
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: LightColor,
		marginBottom: 30,
	},
	tileList: {
		justifyContent: "flex-start",
//		flexDirection: "row",
//		flexWrap: "wrap"
	},
	tileRow: {
		flexDirection: "row"
	},
	centering: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
	},	
	movieListContainer: {
		flex: 1,
		//justifyContent: 'left',
		//alignItems: 'left',
		backgroundColor: DarkColor,
	},
	movieList: {
		justifyContent: "flex-start",
		flexDirection: "row",
		flexWrap: "wrap",
		backgroundColor: DarkColor,
	},
	movie: {
		margin: 20
	},
	text: {
		fontSize: 15,
		padding: 50
	},
	title: {
		fontSize: 20,
		marginBottom: 5,
		fontWeight: 'bold',
		color: LightColor
	},
	movieItemHeader: {
		fontSize: 15,
		marginBottom: 5,
		fontWeight: 'bold',
		color: LightColor
	},	
	movieItem: {
		fontSize: 15,
		marginBottom: 5,
		color: LightColor
	},
	textInputContainer: {
		marginBottom: 1
	},
	textInput: {		
		fontSize: 15,
		color: LightColor
	},
	movieItemRow: {
		justifyContent: "flex-start",
		flexDirection: "row",
		flexWrap: "wrap",
	},	
	movieItemTextContainer: {
		margin: 10
	},
	movieItemText: {
		fontSize: 15,
		fontWeight: 'bold',
		color: LightColor		
	}
});


export default styles;