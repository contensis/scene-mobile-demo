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
		backgroundColor: DarkColor,
		alignItems: 'center'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#FFFFFF',
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
		backgroundColor: LightColor,
	},
	movieList: {
		justifyContent: "flex-start",
		flexDirection: "row",
		flexWrap: "wrap",
		backgroundColor: LightColor,
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
		fontWeight: 'bold'
	},	
	movieItem: {
		fontSize: 15,
		marginBottom: 5
	},
	textInput: {
		marginBottom: 1
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
		fontWeight: 'bold'
	}
});


export default styles;