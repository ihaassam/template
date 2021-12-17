import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import App from './App';
import './index.css';
import store from './store';
import * as serviceWorker from './serviceWorker';
import Fallback500 from './components/Fallbacks/Fallback500';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';


Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});



ReactDOM.render(
  <Provider store={store}>
        <Sentry.ErrorBoundary fallback={<Fallback500 />}>

      <App />
      </Sentry.ErrorBoundary>

  </Provider>,
  document.getElementById('root'),
);
serviceWorker.unregister();
