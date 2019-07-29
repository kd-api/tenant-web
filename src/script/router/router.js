import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { MainRouteEnpoint } from '../constants/AppRouteEnpoint';
import home from '../containers/home';
import signin from '../containers/page/signin';
import error404 from '../containers/page/404';
import error500 from '../containers/page/500';
import comingsoon from '../containers/page/comingSoon';
import forgotPassword from '../containers/page/forgotPassword';
import resetPassword from '../containers/page/resetPassword';

export default class PublicRoutes extends React.Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div>
          <Route
            exact={true}
            path={MainRouteEnpoint.default}
            component={home}
          />
          <Route
            exact={true}
            path={MainRouteEnpoint.signin}
            component={signin}
          />
          <Route
            exact={true}
            path={MainRouteEnpoint.error404}
            component={error404}
          />
          <Route
            exact={true}
            path={MainRouteEnpoint.error500}
            component={error500}
          />
          <Route
            exact={true}
            path={MainRouteEnpoint.comingsoon}
            component={comingsoon}
          />

          <Route
            exact={true}
            path={MainRouteEnpoint.forgotPassword}
            component={forgotPassword}
          />
          <Route
            exact={true}
            path={MainRouteEnpoint.resetPassword}
            component={resetPassword}
          />
          {/* <RestrictedRoute
              path="/dashboard"
              component={App}
              isLoggedIn={this.props.isLoggedIn}
            /> */}
        </div>
      </ConnectedRouter>
    );
  }
}
