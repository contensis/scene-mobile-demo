import { NavigationActions } from 'react-navigation';

var VIEW_MOVIE = 'VIEW_MOVIE:VIEW_MOVIE';
var VIEW_MOVIE_COMPLETE = 'VIEW_MOVIE:VIEW_MOVIE_COMPLETE';
var VIEW_MOVIE_ERROR = 'VIEW_MOVIE:VIEW_MOVIE_ERROR';

var viewMovieInitialState = null;

export function viewMovieReducer(state = viewMovieInitialState, action) {
	switch (action.type) {
		case VIEW_MOVIE_COMPLETE:
			return action.movie;
		default:
			return state;
	}
}

export function viewMovie(movie) {
	return async (dispatch, getState) => {
		let result = null;
		dispatch({ type: VIEW_MOVIE });
		try {
			result = await Promise.resolve(movie);
			dispatch({ type: VIEW_MOVIE_COMPLETE, movie });
			dispatch(NavigationActions.navigate({ routeName: 'Movie', params: { title: movie.entryTitle } }));
		} catch (error) {
			dispatch({ type: VIEW_MOVIE_ERROR, error });
		}		
		return result;
	};
}
