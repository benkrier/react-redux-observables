import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducers";
import { createEpicMiddleware } from "redux-observable";
import epics from "./epics";

const epicMiddleware = createEpicMiddleware(epics);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);
export default store;
