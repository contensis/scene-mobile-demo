import { searchMovies } from '../api/movies';
import { debounce } from '../api/debounce';

export var SEARCH = 'SEARCH:SEARCH';
export var SEARCH_COMPLETE = 'SEARCH:SEARCH_COMPLETE';
export var SEARCH_ERROR = 'SEARCH:SEARCH_ERROR';

var searchInitialState = {
	searchText: ''
};

export function searchReducer(state = searchInitialState, action) {
	switch (action.type) {
		case SEARCH:
			return { ...state, searchText: action.searchText }
		default:
			return state;
	}
}

async function dispatchSearch(searchText, dispatch, getState) {
	let movies = null;	
	try {
		movies = await searchMovies(searchText);
		dispatch({ type: SEARCH_COMPLETE, movies });
	} catch (error) {
		dispatch({ type: SEARCH_ERROR, error });
	}
	return movies;
};

export var debouncedSearch = debounce(dispatchSearch, 300);

export function search(searchText) {
	return (dispatch, getState) => {
		dispatch({ type: SEARCH, searchText });
		debouncedSearch(searchText, dispatch, getState);
	};
}

