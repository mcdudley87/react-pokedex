import React from 'react';
import axios from 'axios';

function PokeDetail({pokemonName, pokemon}) {
	let content;
	console.log(pokemon)
	content = (
		<>
			<h1>Stats:</h1>
			<h3>{pokemonName}</h3>
			<h3>Height: {pokemon.height}</h3>
			<h3>Weight: {pokemon.weight}</h3>
			<button onClick={savorite}> Save to Fave </button>
		</>
	)

	function savorite() {
		axios.post('pokemon/', {
			name: pokemon.name
		})
	}

	return(
		<div className="App">
			{content}
		</div>
	)

}

export default PokeDetail;


