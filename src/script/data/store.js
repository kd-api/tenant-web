import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
  } from 'redux';
  import createHistory from 'history/createBrowserHistory';
  import {
    routerMiddleware,
    connectRouter,
  } from 'connected-react-router';
  import createSagaMiddleware from 'redux-saga';
  import reducers from './reducers';
  import rootSaga from './saga';
  //import { AuthData } from './auth/type';
  
  const history = createHistory();
  
  const composeEnhancers =
    typeof window === 'object' &&
    (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? 
        (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        })
      : compose;
  
  const sagaMiddleware = createSagaMiddleware();
  const routeMiddleware = routerMiddleware(history);
  const middlewares = [sagaMiddleware, routeMiddleware];
  
  const appReducer = combineReducers({
    ...reducers,
  });
  
  // tslint:disable-next-line:no-any
  const rootReducer = (state, action) => {
    // if (action.type === AuthData.AT.LOGOUT) {
    //   state = undefined;
    // }
  
    return appReducer(state, action);
  };
  
  const store = createStore(
    combineReducers({
      ...reducers,
      router: (connectRouter(history)) 
    //   as Reducer<
    //     RouterState,
    //     LocationChangeAction
    //   >,
    }),
    composeEnhancers(applyMiddleware(...middlewares)),
  );
  
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');
      store.replaceReducer(nextReducer);
    });
  }
  
  // tslint:disable-next-line:no-any
  const rootTask = sagaMiddleware.run(rootSaga);
  // tslint:disable-next-line:no-any
//   rootTask.done.catch(function(e) {
//     console.log('Error in Sagas', e);
//   });
  
  export { store, history };
  