import React from 'react';
import { useEffect, useState } from 'react';
import PlayerDetails from '../components/PlayerDetails';
import {Typography} from "@material-tailwind/react";
import PlayerForm from '../components/PlayerForm';


const Home = () => {
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch("http://localhost:4000/api/players/");
      // Parse response into json which returns an array of abjects
      const json = await response.json();

      if(response.ok) {
        setPlayers(json);
      }
    }
    fetchPlayers();
  }, [])
  return (
    <>
      <Typography variant="h4" className="flex justify-center items-center mt-4 font-serif">Player's Bio</Typography>
      <div className='home'>
        <div className='players'>
          {
            players && players.map(player => (
              <PlayerDetails key={player._id} player={player} />
            ))
          }
        </div>
      {/* <PlayerForm /> */}
      </div>
    </>
  )
}

export default Home
