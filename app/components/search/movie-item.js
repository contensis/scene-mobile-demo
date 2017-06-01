import React from 'react';
import { Text, View, Image, TouchableHighlight, Dimensions } from 'react-native';
import styles from '../../styles/styles';
import { posterImage } from '../../services/movie';

var MovieItem = function ({ movie, tileStyle, onPress }) {
	let source = {
		uri: posterImage(movie, 500)
	};

	let { width } = Dimensions.get('window');

	let imageStyle = {
		width: width / 3,
		height: width / 3
	};
	let imageContainerStyle = { ...imageStyle, backgroundColor: '#FF0000' };

	let textStyle = { ...imageStyle };

	let _onPress = () => {
		if (onPress) {
			onPress(movie);
		}
	};

	return (
		<View>
			<TouchableHighlight onPress={_onPress}>
				<View>
					<View style={imageContainerStyle}>
						<Image style={imageStyle} source={source} />
					</View>
					<View style={textStyle}>
						<Text>{movie && movie.entryTitle} {movie && movie.releaseDate}</Text>
					</View>
				</View>
			</TouchableHighlight>
		</View>
	);
}

export default MovieItem;