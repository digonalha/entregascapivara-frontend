import { all } from 'redux-saga/effects';
import delivery from './delivery/sagas';

export default function* rootSaga() {
  return yield all([delivery]);
}
