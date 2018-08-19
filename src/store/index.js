import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk';

import userReducer from 'store/reducers/userReducer';
import recipeReducer from 'store/reducers/recipeReducer';


const rootReducer = combineReducers({ user: userReducer, recipe: recipeReducer});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
