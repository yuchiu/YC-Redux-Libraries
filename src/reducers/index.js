const initialState = {
  count: 0
};

export const countReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "ADD_COUNT":
      newState.count += 1;
      console.log(
        `previous state: `,
        state,
        `\naction: `,
        action,
        `\ncurrent state: `,
        newState
      );
      return newState;
    case "MINUS_COUNT":
      newState.count -= 1;
      console.log(
        `previous state: `,
        state,
        `\naction: `,
        action,
        `\ncurrent state: `,
        newState
      );
      return newState;
    default:
      console.log(`action: `, action, `\ncurrent state: `, state);
      return initialState;
  }
};
