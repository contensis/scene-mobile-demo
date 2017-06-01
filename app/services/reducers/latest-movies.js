import { latest10Movies } from '../api/movies';

var LATEST_MOVIES = 'LATEST_MOVIES:LATEST_MOVIES';
var LATEST_MOVIES_COMPLETE = 'LATEST_MOVIES:LATEST_MOVIES_COMPLETE';
var LATEST_MOVIES_ERROR = 'LATEST_MOVIES:LATEST_MOVIES_ERROR';

var latestMoviesInitialState = [];

export function latestMoviesReducer(state = latestMoviesInitialState, action) {
	switch (action.type) {
		case LATEST_MOVIES_COMPLETE:
			return action.movies;
		case LATEST_MOVIES_ERROR:
			return action.error;
		default:
			return state;
	}
}

export async function latestMovies(dispatch, getState) {
	let movies = null;
	dispatch({ type: LATEST_MOVIES });
	try {
		movies = await latest10Movies();
		dispatch({ type: LATEST_MOVIES_COMPLETE, movies });		
	} catch (error) {
		dispatch({ type: LATEST_MOVIES_ERROR, error });
	}
	return movies;
}
