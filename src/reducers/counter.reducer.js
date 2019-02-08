const counterReducer = (state = 0, action) => {
  console.log(`state:${state}`, action);
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return 10;
  }
};
export default counterReducer;
