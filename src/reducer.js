const reducer = (state, action) => {
  switch(action.type) {
    case('COUNT_UP'):
      return {
        ...state,
        count: state.count + 1
      }
    case('COUNT_DOWN'):
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

export default reducer;