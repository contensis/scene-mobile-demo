import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../../navigation/app-navigator';

var navInitialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('List'));

export function navReducer(state = navInitialState, action) {
	const nextState = AppNavigator.router.getStateForAction(action, state);
	return nextState || state;
}

export function navigate(routeName) {
	return NavigationActions.navigate({ routeName });
}