import * as types from "./actionType";

export const searchUserStart = (query) => ({
  type: types.SEARCH_USER_START,
  payload: query,
});
export const searchUserSuccess = (users) => ({
  type: types.SEARCH_USER_SUCCESS,
  payload: users,
});
export const searchUserError = (error) => ({
  type: types.SEARCH_USER_ERROR,
  payload: error,
});

// loading user start

export const loadUsersStart = () => ({
  type: types.LOAD_USERS_START,
});

export const loadUsersSuccess = (users) => ({
  type: types.LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersError = (error) => ({
  type: types.LOAD_USERS_ERROR,
  payload: error,
});
