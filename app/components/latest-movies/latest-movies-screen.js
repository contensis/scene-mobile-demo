import React from 'react';
import { Text, View, ListView, Dimensions, Button } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../styles/styles';
import MovieTile from './movie-tile';
import { navigate } from '../../services/reducers/nav';
import { viewMovie } from '../../services/reducers/view-movie';
import { getStore } from '../../services/store/store';

const ds = ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

var getTileStyle = () => {
	const { width } = Dimensions.get('window');
	const margin = 5;
	const tilesPerRow = 2;
	let size = (width - margin * (tilesPerRow * 2)) / tilesPerRow;
	return {
		width: size,
		height: size,
		marginHorizontal: margin
	};
};

var LatestMoviesScreen = function ({ movies, viewMovie }) {
	let movieDs = ds.cloneWithRows(movies || []);
	let tileStyle = getTileStyle();

	let select = (movie) => {
		viewMovie(movie);
	};

	return (
		<View style={styles.container}>
			<ListView dataSource={movieDs} enableEmptySections={true} contentContainerStyle={styles.tileList}
				renderRow={(movie) => <MovieTile movie={movie} tileStyle={tileStyle} onPress={select} /> }
			/>
		</View>
	);
}

function navigateToSearch() {
	let store = getStore();
	store.dispatch(navigate('Search'));
}

LatestMoviesScreen.navigationOptions = {
	title: 'Latest Movies'
};

var mapStateToProps = (state) => {
	return {
		movies: state.latestMovies
	};
};

var mapDispatchToProps = (dispatch) => {
	return {
		viewMovie: (movie) => {
			dispatch(viewMovie(movie));
		}		
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LatestMoviesScreen);