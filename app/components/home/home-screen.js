import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import AppNavigation from '../../navigation/app-navigator';
import WelcomeScreen from '../welcome/welcome-screen'
import styles from '../../styles/styles';

var HomeScreen = function ({ isReady, nav }) {
	if (isReady) {
		return (<AppNavigation />);
	} else {
		return (
			<View style={styles.container}>
				<WelcomeScreen />
			</View>
		);
	}
}

var mapStateToProps = (state) => {
	return {
		isReady: state.isReady,
		nav: state.nav
	};
};

export default connect(mapStateToProps)(HomeScreen);
