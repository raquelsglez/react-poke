import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from './form/Form';
import PokemonInfo from './pokemonInfo/PokemonInfo';
import './App.css';

function App () {
  const [query, setQuery] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [chargingStatus, setChargingStatus] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getPokemon = async () => {      
      if (query === '') {
        setError('');
        setPokemon(null);
        return;
      }
      setChargingStatus(true);

      let response;
      try {
        response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
        setPokemon(response.data);
        setError('');
      } catch (error) {
        setError('Pokemon no encontrado');
        setPokemon(null);
      }
      setChargingStatus(false);

    };
    getPokemon();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  let chargingMessage = '';
  if (chargingStatus) {
    chargingMessage = <p className='charging-message'>Cargando..</p>;
  }

  let errorMessage = '';
  if (error) {
    errorMessage = <p className='error-message'>{error}</p>;
  }

  return(
    <>
      <h1>Buscador de Pokemon</h1>
      <p className='phrase'>¡Encuentra tu pokemon favorito!</p>
      <Form query={query} setQuery={setQuery} handleSubmit={handleSubmit}/>
      {chargingMessage}
      {errorMessage}
      <PokemonInfo pokemon={pokemon}/>
    </>
  );
};

export default App;
