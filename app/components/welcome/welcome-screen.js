import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../../styles/styles';

var WelcomeScreen = function () {
	return (
		<View style={styles.container}>
			<View style={styles.container}>
				<Image source={require('../../img/scene_large.png')} style={{marginBottom:100}}></Image>
			</View>

			<Text style={styles.instructions}>
				Powered by the Movie DB
			</Text>
			<Image source={require('../../img/contensis.png')} style={{width:70}} resizeMode={'contain'}></Image>
		</View>
	);
}

export default WelcomeScreen;