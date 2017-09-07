import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import promise from 'redux-promise';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './components/App';
import daysIndex from './components/days_index';

import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <App />
        <Switch>
          <Route path="/" component={daysIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
