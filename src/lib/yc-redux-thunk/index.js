import isFunction from "./utils/isFunction";

// next is store.dispatch
const thunk = ({ dispatch, getState }) => next => action => {
  // execute if action is func instead of obj, pass in dispatch and get state
  if (isFunction(action)) {
    return action(dispatch, getState);
  }
  return next(action);
};

export default thunk;
