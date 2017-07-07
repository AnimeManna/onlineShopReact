const initialState = {
  menuIsActive: true,
}

export default (state = initialState, action) => {
  if (action.type === 'TOGGLE_SIDEBAR') {
    const newState = {
      menuIsActive: !state.menuIsActive
    }
    return {
      ...state,
      ...newState,
    }
  }
  return state
}