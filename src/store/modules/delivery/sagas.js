import { put, call, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addSuccess, removeSuccess } from './actions';

function* addPending({ delivery }) {
  const response = yield call(api.post, '/delivery', delivery);

  if (response) {
    yield put(addSuccess(response.data));
  }
}

function* removePending({ id }) {
  const response = yield call(api.delete, `/delivery/${id}`);

  if (response) {
    yield put(removeSuccess(id));
  }
}

export default all(
  [takeLatest('@delivery/ADD_PENDING', addPending)],
  [takeLatest('@delivery/REMOVE_PENDING', removePending)]
);
