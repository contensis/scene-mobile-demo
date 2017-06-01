import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import WelcomeScreen from '../components/welcome/welcome-screen';
import LatestMoviesScreen from '../components/latest-movies/latest-movies-screen';
import MovieScreen from '../components/movie/movie-screen';
import SearchScreen from '../components/search/search-screen';

export const ListNavigator = TabNavigator({
	'LatestMovies': { screen: LatestMoviesScreen },
	'Search': {screen: SearchScreen }
});

var ListScreen = () => {
	return (<ListNavigator />);
};

ListScreen.navigationOptions = {
	title: 'Movies'
};

export const AppNavigator = StackNavigator({	
	'List': { screen: ListScreen },
	'Movie': { screen: MovieScreen }
});

var AppWithNavigationState = ({ dispatch, nav }) => {	
	return (<AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />);	
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);