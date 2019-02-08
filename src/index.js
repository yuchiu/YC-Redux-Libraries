import React from "react";
import ReactDOM from "react-dom";
import dotenv from "dotenv";
import { Provider } from "react-redux";

import { createStore } from "./lib/yc-redux";
import Routes from "./components";
import * as serviceWorker from "./serviceWorker";
import counterReducer from "./reducers/counter.reducer";

dotenv.config();
const store = createStore(counterReducer);

const App = (
  <Provider store={store}>
    <Routes />
  </Provider>
);
ReactDOM.render(App, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
