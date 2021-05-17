import { APP_TOGGELE_SIDEBAR } from '../action-types'

const initState = {
  collapsed: false,
  // aa: '12',
}

export default function app(state = initState, action) {
  switch (action.type) {
    case APP_TOGGELE_SIDEBAR:
      return {
        ...state,
        collapsed: !state.collapsed,
      }
    default:
      return state
  }
}

// export function addTodo(text) {
//   return { type: ADD_TODO, text }
// }

// export function toggleTodo(index) {
//   return { type: TOGGLE_TODO, index }
// }

// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter }
// }

// {
//   visibilityFilter: 'SHOW_ALL',
//   todos: [
//     {
//       text: 'Consider using Redux',
//       completed: true,
//     },
//     {
//       text: 'Keep all state in a single tree',
//       completed: false
//     }
//   ]
// }
