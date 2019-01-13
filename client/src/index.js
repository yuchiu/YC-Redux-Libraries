// eslint-disable-next-line import/named

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "../../yc-redux";

const counterReducer = (state = 0, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return 10;
  }
};

const store = createStore(counterReducer);

const init = store.getState();

console.log(`init with num:${init}.`);

// pass in listener function into subscribe
const listener = () => {
  const current = store.getState();
  console.log(`current with num:${current}.`);
};

store.subscribe(listener);

store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "MINUS" });
store.dispatch({ type: "MINUS" });

const title = "My Minimal React Webpack Babel Setup";

ReactDOM.render(<div>{title}</div>, document.getElementById("app"));
