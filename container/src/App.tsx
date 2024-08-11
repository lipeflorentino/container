import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { boticarioTheme } from '@grupoboticario/flora';

import history from 'services/utils/history';

import globalStyles from 'assets/styles/global';
import Routes from './routes';
import { store, persistor } from './store';

const App: React.FC = () => {
  globalStyles();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className={boticarioTheme}>
          <Router history={history}>
            <Routes />
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
