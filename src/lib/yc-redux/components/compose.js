const compose = (...middlewares) => {
  if (middlewares.length === 0) {
    return func => func;
  }
  if (middlewares.length === 1) {
    return middlewares[0];
  }
  return middlewares.reduce((result, item) => (...args) =>
    result(item(...args))
  );
};

export default compose;
