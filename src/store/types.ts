import { Dispatch } from 'react'

export interface GlobalStateInterface {
  searchKeyword: string
}

export interface ActionType {
  type: string
  value: any
}

export interface ContextType {
  globalState: GlobalStateInterface
  dispatch: Dispatch<ActionType>
}
