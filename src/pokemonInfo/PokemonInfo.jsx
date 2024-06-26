import React from 'react';
import styles from './pokemonInfo.module.css';

const PokemonInfo = ({ pokemon }) => {
  if (!pokemon) {
    return null;
  };

  return (
    <div className={styles.pokemon}>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
    </div>
  );
};

export default PokemonInfo;
