const applyMiddleware = middleware => createStore => (...args) => {
  const store = createStore(...args);
  let dispatch = store.dispatch;
  const midAPI = {
    getState: store.getState,
    dispatch: (...ele) => dispatch(...ele)
  };
  dispatch = middleware(midAPI)(store.dispatch);
  return {
    ...store,
    dispatch
  };
};

export default applyMiddleware;
