import React from 'react';

function PokeList ({pokemonCollection, handlePokemonSelect}) {
	let content;
	if (pokemonCollection.length) {
		content = pokemonCollection.map((pokemon, id) => {
			return <p onClick={() => handlePokemonSelect(pokemon.name)} key={id}>{pokemon.name}</p>
		})
	} else {
		content = <p>...collection of Pokemon</p>
	}

	return (
		<div className="App" > 
			{content}
		</div>
	);
}



export default PokeList;