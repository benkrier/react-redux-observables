import {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILED,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_FAILED,
  CURRENCY_DATA_SUCCESS,
  CURRENCY_DATA_FAILED
} from "./actions";
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

export const searchResults = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USERS_SUCCESS:
      return action.payload.searchResults;
    case SEARCH_USERS_FAILED:
      return {};
    default:
      return state;
  }
};

export const currencyData = (state = initialState, action) => {
  switch (action.type) {
    case CURRENCY_DATA_SUCCESS:
      return action.payload.currencyData;
    case CURRENCY_DATA_FAILED:
      return {};
    default:
      return state;
  }
};

export default combineReducers({
  user,
  repos,
  searchResults,
  currencyData
});
