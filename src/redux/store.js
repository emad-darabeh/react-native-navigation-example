import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';

// middleware
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

// root reducer
import rootReducer from './root-reducer';

// root saga
import rootSaga from './root-saga';

const INITIAL_STATE = {};
export const store = createStore(
  rootReducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default {store, persistor};
