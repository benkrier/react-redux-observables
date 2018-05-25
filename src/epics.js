import "rxjs";
import { combineEpics } from "redux-observable";
import { FETCH_USER, SEARCH_USERS, CURRENCY_DATA } from "./actions";
import {
  fetchUserSuccess,
  fetchUserFailed,
  fetchReposSuccess,
  fetchReposFailed,
  searchUsersSuccess,
  searchUsersFailed,
  currencyDataSuccess,
  currencyDataFailed
} from "./actionCreators";
import { ajax } from "rxjs/observable/dom/ajax";
import { Observable } from "rxjs";

// Epic to fetch a single user
export const fetchUser = actions$ =>
  actions$.ofType(FETCH_USER).mergeMap(action =>
    ajax
      .getJSON(`https://api.github.com/users/${action.payload.username}`)
      .map(user => fetchUserSuccess(user))
      .takeUntil(actions$.ofType(FETCH_USER))
      .retry(2)
      .catch(error => Observable.of(fetchUserFailed()))
  );

// Epic to search users
export const searchUsers = actions$ =>
  actions$
    .ofType(SEARCH_USERS)
    .filter(
      action =>
        action.payload.searchName && action.payload.searchName.length > 0
    )
    .debounceTime(300)
    .mergeMap(action =>
      ajax
        .getJSON(
          `https://api.github.com/search/users?q=${action.payload.searchName}`
        )
        .map(searchResults => searchUsersSuccess(searchResults))
        .takeUntil(actions$.ofType(SEARCH_USERS))
        .retry(2)
        .catch(error => Observable.of(searchUsersFailed()))
    );

// Epic to fetch a user's public repos
export const fetchRepos = actions$ =>
  actions$.ofType(FETCH_USER).mergeMap(action =>
    ajax
      .getJSON(`https://api.github.com/users/${action.payload.username}/repos`)
      .map(repos => fetchReposSuccess(repos))
      .takeUntil(actions$.ofType(FETCH_USER))
      .catch(error => Observable.of(fetchReposFailed()))
  );

// Epic to fetch a user's public repos
export const currencyData = actions$ =>
  actions$
    .ofType(CURRENCY_DATA)
    .filter(
      action =>
        action.payload.currencyPairs &&
        action.payload.currencyPairs.length === 6
    )
    // .debounceTime(1000)
    .mergeMap(action =>
      ajax
        .getJSON(
          `https://forex.1forge.com/1.0.3/quotes?pairs=${
            action.payload.currencyPairs
          }&api_key=LvPO0pkaenVR8hfkhmkrmbMWl0UjxLAa`
        )
        .map(currencyData => currencyDataSuccess(currencyData))
        .takeUntil(actions$.ofType(CURRENCY_DATA))
        .retry(2)
        .catch(error => Observable.of(currencyDataFailed()))
    );
export default combineEpics(fetchUser, fetchRepos, searchUsers, currencyData);
