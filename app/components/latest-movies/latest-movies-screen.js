import React from 'react';
import { Text, View, ListView, Dimensions, Button } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../styles/styles';
import MovieTile from './movie-tile';
import { navigate } from '../../services/reducers/nav';
import { viewMovie } from '../../services/reducers/view-movie';
import { getStore } from '../../services/store/store';

const ds = new ListView.DataSource({
	rowHasChanged: (r1, r2) => {		
		if (r1.length !== r2.length) {
			return true;
		}
		for (let i =0, ilen = r1.length; i < ilen; i++) {
			if (r1[i] !== r2[i]) {
				return true;
			}
		}
		return false;
	}
});

var getTileStyle = () => {
	const { width } = Dimensions.get('window');
	const margin = 5;
	const tilesPerRow = 2;
	let tileWidth = (width - margin * (tilesPerRow * 2)) / tilesPerRow;
	let tileHeight = tileWidth * 1.5;
	return {
		width: tileWidth,
		height: tileHeight,
		marginHorizontal: margin
	};
};

var toRows = (movies) => {
	return (movies || []).filter(m => !!m).reduce((result, movie, index) => {
		if ((index % 2) == 0) {
			result.push([movie]);
		} else {
			result[result.length - 1][1] = movie;
		}
		return result;
	}, []);
};

var LatestMoviesScreen = function ({ movies, viewMovie }) {
	let movieDs = ds.cloneWithRows(toRows(movies));
	let tileStyle = getTileStyle();

	let select = (movie) => {
		viewMovie(movie);
	};

	let renderRow = (movies) => {
		let images = movies.map(movie => (<MovieTile key={movie.sys.id} movie={movie} tileStyle={tileStyle} onPress={select} />));
		return (
			<View style={styles.tileRow}>				
				{images}
			</View>
		);		
	};

	return (
		<View style={styles.container}>
			<ListView dataSource={movieDs} enableEmptySections={true} contentContainerStyle={styles.tileList}
				renderRow={renderRow}
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