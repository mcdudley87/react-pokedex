import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <h1>Pokedex: the Sequel</h1>
    </div>
  );
}

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const [item] = data.results;
    setData(item);
    setLoading(false);
  }, []);

  return { data, loading };
};

export default () => {
  const [count, setCount] = useState(0);
  const {data, loading} = useFetch("http://pokeapi.co/api/v2/pokemon/");

  return (
    <div> 
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
      {loading ? <div> ...loading</div> : <div>{data.name}</div>}
    </div>
  );
};






// export default App;


// function App() {
//   const [pokemon, setPokemon] = useState([])
//   let content;


//   useEffect(()=>{
//     console.log("running the effect!");
//     axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then((response)=> {
//       setPokemon(response.data.results);
//     })
//   },[])

//   content = pokemon.map((pokemon, id) => {
//     function handleClick(e) {
//       e.preventDefault();
//       axios.post('pokemon/', {
//         name: pokemon.name
//       })
//       console.log(`You have clicked ${pokemon.name}`)
//     }
//     return (
//     <div className="row">
//       <p key={id}>{pokemon.name}</p>
//       <button onClick={handleClick}>Add To Favorites</button>  
//     </div> 
//   );
// })
//   return (
//     <div className="App">
//       <h1>Pokemon!</h1>
//       {content}
//     </div>
//   );
// }

// export default App;