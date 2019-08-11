import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import PokeList from './components/PokeList';
import PokeDetail from './components/PokeDetail';
import PokeFaves from './components/PokeFaves';

function App() {
  const [pokemonCollection, setPokemonCollection] = useState([])
  const [pokemonName, setPokemonName] = useState([])
  const [pokemon, setPokemon] = useState({})
  const [pokemonFavorites, setPokemonFavorites] = useState({})

  useEffect (() => {
    console.log("running axios to get 151 pkmn")
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then( (response) => {
      setPokemonCollection(response.data.results);
    })
  }, [])

  useEffect(() => {
    axios.get('/pokemon/').then( (response) => {
      setPokemonFavorites(response.data);
    })
  },[pokemonFavorites.length])

  useEffect (() => {
    console.log("running pkmn details check")
    console.log({pokemonName})
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then( (response) => {
      setPokemon(response.data);
    })
  }, [pokemonName])

  return (
    <div className='App'>
      <PokeDetail pokemonName={pokemonName} pokemon={pokemon} />
      <hr />
      <PokeFaves pokemonFavorites={pokemonFavorites} handlePokemonSelect={setPokemonName} />
      <hr />
      <PokeList pokemonCollection={pokemonCollection} handlePokemonSelect={setPokemonName} />
    </div>
  );

}

export default App;