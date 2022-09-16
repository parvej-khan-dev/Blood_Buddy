import {
  searchUserError,
  searchUserSuccess,
  loadUsersSuccess,
  loadUsersError,
} from "./action";
import * as types from "./actionType";
import { searchUserApi, loadUsersApi } from "./api";
import { takeLatest, put, call, fork, all, delay } from "redux-saga/effects";

// load user

export function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadUsersApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUsersError(error));
  }
}

export function* onLoadUsers() {
  yield takeLatest(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

// search / fliter

function* onSearchUserStartAsync({ payload: query }) {
  try {
    const response = yield call(searchUserApi, query);
    console.log("responseCreate", response);
    if (response.status === 200) {
      yield put(searchUserSuccess(response.data));
      console.log("response.data", response.data);
    }
  } catch (error) {
    yield put(searchUserError(error));
  }
}

function* onSearchUser() {
  yield takeLatest(types.SEARCH_USER_START, onSearchUserStartAsync);
}

const userSagas = [fork(onSearchUser), fork(onLoadUsers)];

export default function* rootSaga() {
  yield all([...userSagas]);
}
