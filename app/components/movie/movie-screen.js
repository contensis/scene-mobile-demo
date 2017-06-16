import React from 'react';
import { Text, View, ScrollView, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import styles, { LightColor } from '../../styles/styles';
import { posterImage, actorImage, releaseYear, releaseDate } from '../../services/movie';

var MovieScreen = function ({ movie }) {
	const { width } = Dimensions.get('window');
	let height = width * 1.5;

	let source = {
		uri: posterImage(movie, 500)
	};


	let imageStyle = {
		width: width / 3,
		height: (width / 3) * 1.5
	};
	let imageContainerStyle = { ...imageStyle };

	let textWidth = (imageStyle.width * 2) - 70;
	let textHeight = imageStyle.height - 50;
	let textContainerStyle = { margin: 10, width: textWidth, height: textHeight };

	return (
		<View style={styles.container}>
			<ScrollView>
				<Image source={source} style={{ width: width, height: height }} />

				<View style={styles.movie}>
					<Text style={styles.title}>{movie.entryTitle} ({releaseYear(movie)})</Text>
					<Text style={styles.movieItem}>{movie.tagline}</Text>
					<Text style={styles.movieItemHeader}>Overview</Text>
					<Text style={styles.movieItem}>{movie.overview}</Text>
					<Text style={styles.movieItemHeader}>Released</Text>
					<Text style={styles.movieItem}>{releaseDate(movie)}</Text>
					<Text style={styles.movieItemHeader}>Runtime</Text>
					<Text style={styles.movieItem}>{movie.runtime} mins</Text>
					<Text style={styles.movieItemHeader}>Actors</Text>

					{movie.actors && movie.actors.length && movie.actors
						.filter(actor => actor && actor.photo && actor.photo.asset && actor.photo.asset.sys && actor.photo.asset.sys.id)
						.map(actor => {
							let actorSource = {
								uri: actorImage(actor, 500)
							};
							return (
								<View key={actor.sys.id}>
									<View style={styles.movieItemRow}>
										<Image style={imageStyle} source={actorSource} />
										<View style={textContainerStyle}>
											<Text style={styles.movieItemText}>{actor && actor.entryTitle}</Text>
										</View>
									</View>
								</View>
							);
						})}
					
				</View>
			</ScrollView>
		</View>
	);
}

MovieScreen.navigationOptions = ({ navigation, screenProps }) => {
	return {
		title: navigation.state.params.title,
		headerStyle: styles.movieScreenHeader,
		headerTitleStyle: styles.headerTitle,
		headerTintColor: LightColor
	};
};

var mapStateToProps = (state) => {
	return {
		movie: state.viewMovie
	};
};

export default connect(mapStateToProps)(MovieScreen);