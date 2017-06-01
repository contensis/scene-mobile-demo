import React from 'react';
import { Text, View, ScrollView, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../styles/styles';
import { posterImage, releaseYear, releaseDate } from '../../services/movie';

var MovieScreen = function ({ movie }) {
	const { width } = Dimensions.get('window');

	let source = {
		uri: posterImage(movie, 500)
	};

	return (
		<View style={styles.container}>
			<ScrollView>
				<Image source={source} style={{ width: width, height: width }} />

				<View style={styles.movie}>
					<Text style={styles.title}>{movie.entryTitle} ({releaseYear(movie)})</Text>
					<Text style={styles.movieItemHeader}>Overview</Text>
					<Text style={styles.movieItem}>{movie.overview}</Text>
					<Text style={styles.movieItemHeader}>Released</Text>
					<Text style={styles.movieItem}>{releaseDate(movie)}</Text>
					<Text style={styles.movieItemHeader}>Runtime</Text>
					<Text style={styles.movieItem}>{movie.runtime}</Text>
				</View>
			</ScrollView>
		</View>
	);
}

MovieScreen.navigationOptions = ({ navigation, screenProps }) => {
	return { title: navigation.state.params.title };
};

var mapStateToProps = (state) => {
	return {
		movie: state.viewMovie
	};
};

export default connect(mapStateToProps)(MovieScreen);