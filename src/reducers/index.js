const reducers = (state, action) => {
  switch (action.type) {
    case 'SET_USER_SEX':
      return {
        ...state,
        user: action.payload
      }
    case 'SET_USER_INFO':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

export default reducers