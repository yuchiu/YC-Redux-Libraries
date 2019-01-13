import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "../../yc-redux";
import { Provider } from "../../yc-react-redux";
import couterReducer from "./reducers/counterReducer";
import Counter from "./components/Counter";

const store = createStore(couterReducer);

const App = (
  <Provider store={store}>
    <Counter />
  </Provider>
);

ReactDOM.render(App, document.getElementById("app"));
