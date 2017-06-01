import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { NavigationActions } from 'react-navigation';
import { moviesReducer } from '../reducers/movies';
import { latestMoviesReducer, latestMovies } from '../reducers/latest-movies';
import { searchReducer } from '../reducers/search';
import { navReducer } from '../reducers/nav';
import { viewMovieReducer } from '../reducers/view-movie';
import { isSearchingReducer } from '../reducers/is-searching';
import { isReadyReducer, isReady} from '../reducers/is-ready';

let stateReducer = combineReducers({
    movies: moviesReducer,
    latestMovies: latestMoviesReducer,
    search: searchReducer,
	nav: navReducer,
	viewMovie: viewMovieReducer,
	isSearching: isSearchingReducer,
	isReady: isReadyReducer
});

var store = createStore(
    stateReducer,
    //initialState,
    applyMiddleware(thunk)
);


function wait() {
	return new Promise(resolve => {
		setTimeout(() => { resolve('Timer Resolved'); }, 3000);
	});
}

export function initialise() {
	return async (dispatch, getState) => {
		let result = await Promise.all([latestMovies(dispatch, getState), wait()]);
		dispatch(isReady());
	};
}

export function configureStore() { 
	store.dispatch(initialise());
    return store;
}

export function getStore() {
	return store;
}