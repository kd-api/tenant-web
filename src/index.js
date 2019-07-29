import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from '././script/App';
import * as serviceWorker from './serviceWorker';

import DashApp from './script/containers/dashApp';

ReactDOM.render(<DashApp />, document.getElementById('root'));

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./script/containers/dashApp.js', () => {
    const NextApp = require('./script/containers/dashApp').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}
//registerServiceWorker();
serviceWorker.unregister();
