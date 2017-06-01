import { SEARCH, SEARCH_COMPLETE, SEARCH_ERROR } from './search';

var isSearchingInitialState = false;

export function isSearchingReducer(state = isSearchingInitialState, action) {  
    switch (action.type) {   
		case SEARCH:
			return true;
		case SEARCH_COMPLETE:
		case SEARCH_ERROR: 
			return false;     
        default:
            return state;
    }
}