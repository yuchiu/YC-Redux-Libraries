import React from "react";
import ReactDOM from "react-dom";
import thunk from "./lib/yc-redux-thunk";
import { createStore, applyMiddleware } from "./lib/yc-redux";
import { Provider } from "./lib/yc-react-redux";

import Counter from "./components/Counter";
import { countReducer } from "./reducers";

const store = createStore(countReducer, applyMiddleware(thunk));

const App = (
  <Provider store={store}>
    <Counter />
  </Provider>
);
ReactDOM.render(App, document.getElementById("root"));
