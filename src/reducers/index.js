export function counter(state=0, action) {
  console.log(`state:${state}`, action);
  switch (action.type) {
    case 'ADD_COUNT':
      return state + 1
    case 'MINUS_COUNT':
      return state - 1
    default:
      return 10
  }
}