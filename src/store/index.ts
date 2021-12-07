import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from './rootReducer';

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk, logger)
));
