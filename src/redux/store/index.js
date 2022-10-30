import { createStore, applyMiddleware } from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;