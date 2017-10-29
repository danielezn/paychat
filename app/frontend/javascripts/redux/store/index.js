import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../reducers';
// import { createLogger } from 'redux-logger';
import reduxThunk from 'redux-thunk';

// let finalCreateStore = compose(
// 	applyMiddleware(
// 		createLogger()
// 	)
// )(createStore);

// export default function configureStore(initialState = {}) {
// 	return finalCreateStore(reducer, initialState);
// }

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
export const store = createStoreWithMiddleware(rootReducer);