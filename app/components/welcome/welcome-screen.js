import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles/styles';

var WelcomeScreen = function () {
	return (
		<View style={styles.container}>
			<Text style={styles.welcome}>
				Scene Logo.
        	</Text>
			<Text style={styles.instructions}>
				Powered by the Movie DB
        	</Text>
			<Text style={styles.instructions}>
				Contensis
        	</Text>
		</View>
	);
}

export default WelcomeScreen;