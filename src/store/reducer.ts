import { ActionType, GlobalStateInterface } from './types'
import { ReducerActions } from '../constants/reducerActions'

const initialState = {
  searchKeyword: ''
}

const Reducer = (state: GlobalStateInterface, action: ActionType): any => {
  switch (action.type) {
    case ReducerActions.SET_KEYWORD:
      return {
        ...state,
        searchKeyword: action.value
      }
    case ReducerActions.PURGE_STATE:
      return initialState
    default:
      return state
  }
}

export default Reducer
