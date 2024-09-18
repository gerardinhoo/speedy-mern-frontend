import React from 'react';
import { useEffect, useState } from 'react';

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
    <div className='home'>
      <div className='players'>
         {
          players && players.map(player => (
            <p key={player._id}>{player.fullName}</p>
          ))
         }
      </div>
    </div>
  )
}

export default Home
