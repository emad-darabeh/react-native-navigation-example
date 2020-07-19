import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// reducers
import appReducer from './app/app.reducer';
import authReducer from './auth/auth.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['app', 'auth'],
};

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
