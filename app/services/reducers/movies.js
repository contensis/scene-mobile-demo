import { SEARCH_COMPLETE } from './search';

var moviesInitialState = null;

export function moviesReducer(state = moviesInitialState, action) {  
    switch (action.type) {   
		case SEARCH_COMPLETE: 
			return { ...state, ...action.movies };     
        default:
            return state;
    }
}