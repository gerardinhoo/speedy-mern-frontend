import {createContext, useReducer} from "react";


export const PlayersContext = createContext();

export const playersReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PLAYERS':
      return {
         players: action.payload
      }
    case 'CREATE_PLAYERS': {
      return {
         players: [action.payload, ...state.players]
      }
    }
   default:
      return state
  }
}

export const PlayersContextProvider = ({children}) => {

   const [state, dispatch] = useReducer(playersReducer, {players: null}
   )
   return (
      <PlayersContext.Provider value={{...state, dispatch}}>
        {children}
      </PlayersContext.Provider>
   )
}