import React from 'react';
import { Text, View, ListView, Dimensions, TextInput, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../styles/styles';
import { search } from '../../services/reducers/search';
import { viewMovie } from '../../services/reducers/view-movie';
import MovieItem from './movie-item';

const ds = ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

var SearchScreen = function ({ movies, search, isSearching, viewMovie, searchMovies }) {
	let movieDs = ds.cloneWithRows((movies && movies.items) || []);

	let select = (movie) => {
		viewMovie(movie);
	};

	let onChangeText = (input) => {
		searchMovies(input);
	};

	let textStyle = { width: Dimensions.get('window').width - 20 };
	let searchText = (search && search.searchText) || '';

	return (
		<View style={styles.movieListContainer}>
			<TextInput 
				placeholder={'Search...'} 
				value={searchText} 
				onChangeText={onChangeText} 
				style={textStyle} 
			/>
			<ActivityIndicator
				animating={isSearching}
				style={styles.centering}
				size="large"
			/>
			<ListView 
				dataSource={movieDs} 
				enableEmptySections={true} 
				contentContainerStyle={styles.movieList}
				renderRow={(movie) => <MovieItem movie={movie} onPress={select} />}
			/>
		</View>
	);
}

SearchScreen.navigationOptions = {
	title: 'Search',
};

var mapStateToProps = (state) => {
	return {
		search: state.search,
		movies: state.movies,
		isSearching: state.isSearching
	};
};

var mapDispatchToProps = (dispatch) => {
	return {
		searchMovies: (text) => {
			dispatch(search(text));
		},
		viewMovie: (movie) => {
			dispatch(viewMovie(movie));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);