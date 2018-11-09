import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import listsReducer from '../reducers/lists';
import wishesReducer from '../reducers/wishes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      lists: listsReducer,
      wishes: wishesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
