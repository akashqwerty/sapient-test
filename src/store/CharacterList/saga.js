import { call, put, takeEvery } from 'redux-saga/effects';
import { SAVE_CHARACTER_LIST, GET_CHARACTER_LIST } from './action';
import { endpoints } from '../../services/baseAPI/index'

export function* getCharacterList() {
  const endpoint = endpoints.getCharacterName
    const response = yield call(fetch, endpoint);
  const data = yield response.json();
  console.log("data", data)
  yield put({ type: SAVE_CHARACTER_LIST, payload: data });
}

export function* loadCharacterList() {
  yield takeEvery(GET_CHARACTER_LIST, getCharacterList);
}

