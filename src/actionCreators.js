import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILED,
  SEARCH_USERS,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_FAILED
} from "./actions";

// Action creators for fetching one user
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

// Action creators for using fetchUser to fetch that user's public repos
export const fetchReposSuccess = repos => ({
  type: FETCH_REPOS_SUCCESS,
  payload: { repos }
});

export const fetchReposFailed = () => ({
  type: FETCH_REPOS_FAILED
});

// Action creators for searching all users
export const searchUsers = searchName => ({
  type: SEARCH_USERS,
  payload: { searchName }
});

export const searchUsersSuccess = searchResults => ({
  type: SEARCH_USERS_SUCCESS,
  payload: { searchResults }
});

export const searchUsersFailed = () => ({
  type: SEARCH_USERS_FAILED
});
