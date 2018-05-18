import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILED
} from "./actionCreators";

export const fetchUser = username => ({
  type: FETCH_USER,
  payload: { username }
});

export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  payload: { user }
});

export const fetchUserFailed = () => ({
  type: FETCH_USER_FAILED
});

export const fetchReposSuccess = repos => ({
  type: FETCH_REPOS_SUCCESS,
  payload: { repos }
});

export const fetchReposFailed = () => ({
  type: FETCH_REPOS_FAILED
});
