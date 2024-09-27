import {useState} from 'react';

const PlayerForm = () => {
   const [fullName, setFullName] = useState('');
   const [origin, setOrigin] = useState('');
   const [favoriteNumber, setFavoriteNumber] = useState('');
   const [error, setError] = useState(null);

   const handleSubmit = async (e) => {
     e.preventDefault();

     const player = {fullName, origin, favoriteNumber};

     const response = await fetch('/api/players', {
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
    <form className='create' onSubmit={handleSubmit}>
      <h2>Add A New Player</h2>

      <label>Player Full Name:</label>
      <input
        type='text'
        onChange={(e) => {setFullName(e.target.value)}}
        value={fullName}
      />

      <label>Player Origin:</label>
      <input
        type='text'
        onChange={(e) => {setOrigin(e.target.value)}}
        value={origin}
      />

      <label>Favorite Number:</label>
      <input
        type='number'
        onChange={(e) => {setFavoriteNumber(e.target.value)}}
        value={favoriteNumber}
      />

      <button>Add Player</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default PlayerForm
