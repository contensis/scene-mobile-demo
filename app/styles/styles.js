import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	tileList: {
		justifyContent: "flex-start",
		flexDirection: "row",
		flexWrap: "wrap"
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
		flexWrap: "wrap"
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
});


export default styles;