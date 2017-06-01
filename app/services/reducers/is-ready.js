var isReadyInitialState = false;

var IS_READY = 'IS_READY:IS_READY';

export function isReadyReducer(state = isReadyInitialState, action) {  
    switch (action.type) {   
		case IS_READY:
			return true;
        default:
            return state;
    }
}

export function isReady() {
	return { type: IS_READY };
}