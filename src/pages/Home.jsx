import React from 'react';
import { useEffect, useState } from 'react';
import {Typography} from "@material-tailwind/react";
import PlayerDetails from '../components/PlayerDetails';
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
      <h1 className='player-infos'>Players Infos</h1>
      <div className='home'>
        <div className='players'>
          {
            players && players.map(player => (
              <PlayerDetails key={player._id} player={player} />
            ))
          }
        </div>
      </div>
      <PlayerForm />
    </>
  )
}

export default Home
