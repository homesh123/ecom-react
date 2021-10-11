import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from  './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer,applyMiddleware(...middlewares))

// created persisted version of store , it is used to store in localstorage or sessionstorage
export const persistor = persistStore(store);

export default store;