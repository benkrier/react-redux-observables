import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import store from "./store";
import routes from "./routes";

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <div className="App">{routes}</div>
    </HashRouter>
  </Provider>
);

export default App;
