import * as React from 'react';
import { Provider } from 'react-redux';
import { store, history } from '../data/store';
import PublicRoutes from '../router/router';


const DashApp = () => (
    <Provider store={store}>
      <PublicRoutes history={history} />
    </Provider>
);
// Boot()
// .then(() => DashApp())
// .catch(error => console.error(error));

export default DashApp;
//export { AppLocale };