const initialState = {
  sidebarIsActive: true,
}

export default (state = initialState, action) => {
  if (action.type === 'TOGGLE_SIDEBAR') {
    const newState = {
      sidebarIsActive: !state.sidebarIsActive
    }
    return {
      ...state,
      ...newState,
    }
  }
  return state
}