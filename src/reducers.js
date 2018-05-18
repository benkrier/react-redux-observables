import {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  FETCH_USER_REPOS
} from "./actionCreators";
import { combineReducers } from "redux";

const initialState = {};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return action.payload.user;
    case FETCH_USER_FAILED:
      return {};
    case FETCH_USER_REPOS:
      return action.payload.repos;
    default:
      return state;
  }
};
export default combineReducers({
  user
});
