import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import styles from '../../styles/styles';
import { posterImage } from '../../services/movie';

var MovieTile = function ({ movie, tileStyle, onPress }) {
	let source = {
		uri: posterImage(movie, 500)
	};

	let imageStyle = {
		width: tileStyle.width - (tileStyle.marginHorizontal * 2),
		height: tileStyle.height - (tileStyle.marginHorizontal * 2)
	};

	let _onPress = () => {
		if (onPress) {
			onPress(movie);
		}
	};

	return (
		<View style={tileStyle}>
			<TouchableHighlight onPress={_onPress}>
				<View>
					<Image style={imageStyle} source={source} />
				</View>
			</TouchableHighlight>
		</View>
	);
}

export default MovieTile;