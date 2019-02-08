export const counterAction = {
  addCount: () => ({ type: "ADD_COUNT" }),

  minusCount: () => ({ type: "MINUS_COUNT" }),

  addCountAsync: () => dispatch => {
    setTimeout(() => {
      dispatch(counterAction.addCount());
    }, 1000);
  }
};
