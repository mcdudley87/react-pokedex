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


// //=========================================================================//

// function App() {
//   const [pokemon, setPokemon] = useState([])
//   let content;

 
//   useEffect(()=>{
//     console.log("running the effect!");
//     axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then((resopnce)=>{
//       setPokemon(resopnce.data.results);
//     })
//   },[])

//   content = pokemon.map((pokemon,id)=>{
//     function handleClick(e){
//       e.preventDefault();
//       axios.post('pokemon/', {
//         name: pokemon.name
//       })
//       console.log(`You have clicked ${pokemon.name}`)
//     }
//     return <div>
//       <p key={id}>{pokemon.name}</p>
//       <button onClick={handleClick}>Add To Favorites</button>
      
//       </div>
// })
  
//   return (
//     <div className="App">
//       <h1>Pokemon!</h1>
//       {content}
//     </div>
//   );
// }

// export default App;
