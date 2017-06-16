import { NavigationActions } from 'react-navigation';
import { getMovie } from '../api/movies';

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
			result = await getMovie(movie.sys.id);
			dispatch({ type: VIEW_MOVIE_COMPLETE, movie: result });
			dispatch(NavigationActions.navigate({ routeName: 'Movie', params: { title: result.title } }));
		} catch (error) {
			dispatch({ type: VIEW_MOVIE_ERROR, error });
		}		
		return result;
	};
}
