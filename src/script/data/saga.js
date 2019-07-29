import { all } from 'redux-saga/effects';


export default function* rootSaga(getState) {
    // const hms = gateway({
    //   application: 'hms-web',
    //   host: APIConfig.host,
    //   protocol: APIConfig.protocol,
    // });
yield all([
    //AuthSagas(hms),
   
  ]);
}