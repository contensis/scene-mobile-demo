import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2f2f2f',
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
		backgroundColor: '#F5FCFF',
	},
	movieList: {
		justifyContent: "flex-start",
		flexDirection: "row",
		flexWrap: "wrap",
		backgroundColor: '#F5FCFF',
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
		fontWeight: 'bold'
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