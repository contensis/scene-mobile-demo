import React from 'react';
import { Text, View, Image, TouchableHighlight, Dimensions } from 'react-native';
import styles from '../../styles/styles';
import { posterImage, releaseYear } from '../../services/movie';

var MovieItem = function ({ movie, onPress }) {
	let source = {
		uri: posterImage(movie, 500)
	};

	let { width } = Dimensions.get('window');

	let imageStyle = {
		width: width / 3,
		height: (width / 3) * 1.5
	};
	let imageContainerStyle = { ...imageStyle };

	let textWidth = (imageStyle.width * 2) - 20;
	let textHeight = imageStyle.height - 20;
	let textContainerStyle = { margin: 10, width: textWidth, height: textHeight };

	let _onPress = () => {
		if (onPress) {
			onPress(movie);
		}
	};

	return (
		<View>
			<TouchableHighlight onPress={_onPress}>
				<View style={styles.movieItemRow}>
					<Image style={imageStyle} source={source} />
					<View style={textContainerStyle}>
						<Text style={styles.movieItemText}>{movie && movie.entryTitle}</Text>
						<Text style={styles.movieItemText}>{releaseYear(movie)}</Text>					
					</View>
				</View>
			</TouchableHighlight>
		</View>
	);
}

export default MovieItem;