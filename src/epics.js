import "rxjs";
import { combineEpics } from "redux-observable";
import { FETCH_USER } from "./actions";
import {
  fetchUserSuccess,
  fetchUserFailed,
  fetchReposSuccess,
  fetchReposFailed
} from "./actionCreators";
import { ajax } from "rxjs/observable/dom/ajax";
import { Observable } from "rxjs";

export const fetchUser = actions$ =>
  actions$.ofType(FETCH_USER).mergeMap(action =>
    ajax
      .getJSON(`https://api.github.com/users/${action.payload.username}`)
      .map(user => fetchUserSuccess(user))
      .takeUntil(actions$.ofType(FETCH_USER))
      .retry(2)
      .catch(error => Observable.of(fetchUserFailed()))
  );

export const fetchRepos = actions$ =>
  actions$.ofType(FETCH_USER).mergeMap(action =>
    ajax
      .getJSON(`https://api.github.com/users/${action.payload.username}/repos`)
      .map(repos => fetchReposSuccess(repos))
      .catch(error => Observable.of(fetchReposFailed()))
  );

export default combineEpics(fetchUser, fetchRepos);
