import compose from "./compose";

const applyMiddleware = (...middlewares) => createStore => (...args) => {
  const store = createStore(...args);
  let dispatch = store.dispatch;
  const midAPI = {
    getState: store.getState,
    dispatch: (...ele) => dispatch(...ele)
  };
  const middlewareChain = middlewares.map(middleware => middleware(midAPI));
  dispatch = compose(...middlewareChain)(store.dispatch);
  return {
    ...store,
    dispatch
  };
};

export default applyMiddleware;
