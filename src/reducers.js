import {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILED
} from "./actionCreators";
import { combineReducers } from "redux";

const initialState = {};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return action.payload.user;
    case FETCH_USER_FAILED:
      return {};
    default:
      return state;
  }
};

export const repos = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPOS_SUCCESS:
      return action.payload.repos;
    case FETCH_REPOS_FAILED:
      return {};
    default:
      return state;
  }
};
export default combineReducers({
  user,
  repos
});
