const bindActionCreator = (creator, dispatch) => (...args) =>
  dispatch(creator(...args));

const bindActionCreators = (creators, dispatch) => {
  const bound = {};
  Object.keys(creators).forEach(actionFunc => {
    const creator = creators[actionFunc];
    bound[actionFunc] = bindActionCreator(creator, dispatch);
  });
  return bound;
};

export default bindActionCreators;
