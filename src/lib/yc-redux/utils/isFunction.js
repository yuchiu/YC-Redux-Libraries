export default variable => {
  if (variable instanceof Function) {
    return true;
  }
  return false;
};
