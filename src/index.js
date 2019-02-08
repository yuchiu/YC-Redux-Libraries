import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "./lib/yc-redux";
import { Provider } from "./lib/yc-react-redux";

import Counter from "./components/Counter";
import { countReducer } from "./reducers";

const store = createStore(countReducer);

const App = (
  <Provider store={store}>
    <Counter />
  </Provider>
);
ReactDOM.render(App, document.getElementById("root"));
