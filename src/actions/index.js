import * as types from './types'

export function toggleCollapsedNav(isNavCollapsed) {
  return { type: types.TOGGLE_COLLAPSED_NAV, isNavCollapsed };
}