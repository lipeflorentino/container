import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { Store } from 'redux';

import createStore from './createStore';
import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import { ApplicationState } from './store.interface';

const sagaMiddleware = createSagaMiddleware({});

const middlewares = [sagaMiddleware];

const persistedReducer = persistReducers(rootReducer);

const store: Store<ApplicationState> = createStore(
  persistedReducer,
  middlewares,
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
