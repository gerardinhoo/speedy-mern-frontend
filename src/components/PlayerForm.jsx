import React from 'react';
import {useState} from 'react';
import {
  Card,
  Input,
  Button,
} from "@material-tailwind/react";

 
const PlayerForm = () => {
   const [fullName, setFullName] = useState('');
   const [origin, setOrigin] = useState('');
   const [favoriteNumber, setFavoriteNumber] = useState('');
   const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
     e.preventDefault();

     const player = {fullName, origin, favoriteNumber};

     const response = await fetch('http://localhost:4000/api/players/', {
       method: 'POST',
       body: JSON.stringify(player),
       headers: {
         'Content-Type': 'application/json'
       }
     })
     const json = await response.json();

     if(!response.ok) {
       setError(json.error)
     }
     if(response.ok) {
      setFullName('')
      setOrigin('')
      setFavoriteNumber('')
      setError(null)
      console.log('New Player Added', json)
     }
   }
  return (
    <div className="player-form">
        <Card color="transparent" shadow={false}>
          <form onSubmit={handleSubmit}>
            <div className="mb-1 flex flex-col gap-6">
              <label>Full Name:</label>
              <Input
                type="text"
                placeholder="full name"
                onChange={(e) => {setFullName(e.target.value)}}
                value={fullName}
              />

              <label>Origin:</label>
               <Input
                type="text"
                onChange={(e) => {setOrigin(e.target.value)}}
                value={origin}
              />

              <label>Favorite Number:</label>
               <Input
                type="number"
                onChange={(e) => {setFavoriteNumber(e.target.value)}}
                value={favoriteNumber}
              />
              <button className="player-button">Add player</button>
              {error && <div className="error">{error}</div>}
           </div>
          </form>
        </Card>
    </div>
  );
}


export default PlayerForm;