import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';

import userReducer from 'store/reducers/userReducer';


const rootReducer = combineReducers({ user: userReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
