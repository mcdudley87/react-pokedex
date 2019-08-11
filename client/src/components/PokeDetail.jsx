import React from 'react';

function PokeDetail({pokemonName, pokemon}) {
	let content;
	console.log(pokemon)
	content = (
		<>
			<h1>Stats:</h1>
			<h3>{pokemonName}</h3>
			<h3>Height: {pokemon.height}</h3>
			<h3>Weight: {pokemon.weight}</h3>
			<button> Save to Fave </button>
		</>
	)

	return(
		<div className="App">
			{content}
		</div>
	)

}

export default PokeDetail;


