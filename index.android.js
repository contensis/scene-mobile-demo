import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from './app/services/store/store';
import HomeScreen from './app/components/home/home-screen';

var store = configureStore();

var Scene = function () {
	return (
		<Provider store={store}>
			<HomeScreen />
		</Provider>
	);
}



AppRegistry.registerComponent('Scene', () => Scene);
