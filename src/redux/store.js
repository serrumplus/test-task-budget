import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { budget } from './reducers/budget';
import { projects } from './reducers/projects';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const enhancer = composeEnhancers(
);

const reducers = combineReducers({
  budget,
  projects
});

export const store = createStore(reducers, enhancer);