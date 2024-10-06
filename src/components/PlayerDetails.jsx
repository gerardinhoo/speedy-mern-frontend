import React from 'react';
import { Card, CardBody, Typography} from "@material-tailwind/react";
import {usePlayersContext} from "../hooks/usePlayersContext";
 
 
const PlayerDetails = ({player}) => {
  const {dispatch} = usePlayersContext();

  const deletePlayer = async () => {
    const response = await fetch("http://localhost:4000/api/players/" + player._id, {
      method: "DELETE"
    })
    const json = await response.json()

    if(response.ok) {
      dispatch({type: "DELETE_PLAYER", payload: json})
    }
  }
  return (
    <div>
    <Card className="w-96 mt-5">
        <CardBody>
            <div>
              <Typography color="blue-gray" variant="h6">
                Name: {player.fullName}
              </Typography>
              <Typography variant="small">
                Nationality(ies): {player.origin}
              </Typography>
              <Typography variant="small">
                Favorite Number: {player.favoriteNumber}
              </Typography> <Typography variant="small">
                Date: {player.createdAt}
              </Typography>
            </div>
       </CardBody>
    </Card>
    <button type="submit" className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900" onClick={deletePlayer}>
      X
    </button>    
    </div>
    
     
  );
}

export default PlayerDetails
