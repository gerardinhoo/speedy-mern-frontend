import React from 'react';
import { Card, CardBody, Typography} from "@material-tailwind/react";
 
 
const PlayerDetails = ({player}) => {
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
    </div>
    
     
  );
}

export default PlayerDetails
