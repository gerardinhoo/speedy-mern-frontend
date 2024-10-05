import { PlayersContext } from "../context/playerContext";
import {useContext} from "react";


export const usePlayersContext = () => {
   const context = useContext(PlayersContext);

   if(!context) {
      throw Error("usePlayersContext must be used inside an PlayersContextProvider")
   }

   return context;
}