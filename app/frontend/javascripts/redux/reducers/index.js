import { combineReducers } from 'redux';
import { layout } from '../../scenes/layout/reducers';
import { authentication } from '../../scenes/authentication/reducers';
import { chat } from '../../scenes/chat/reducers';
import { settings } from '../../scenes/settings/reducers';

let reducer = (state = {}, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	layout,
  authentication,
  chat,
  settings
});

export default rootReducer;