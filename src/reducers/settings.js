import * as types from '../actions/types'

export const settings = (state = {}, action) => {
  console.log(action)
  switch (action.type) {
    case types.TOGGLE_COLLAPSED_NAV:
      const newCollapsedStatus = state.isNavCollapsed ? false: true
      return {...state, isNavCollapsed : newCollapsedStatus}
      break;
  
    default:
      return state
      break;
  }

}