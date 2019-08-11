import React from 'react';

function PokeList ({pokemonFavorites, handlePokemonSelect}) {
	let content;
	if (pokemonFavorites.length) {
		content = pokemonFavorites.map((pokemon, id) => {
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