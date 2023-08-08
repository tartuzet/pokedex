import { View, Text } from 'react-native'
import React, { useState,useEffect } from 'react'
import {getPokemonsApi,getPokemonDetailsByUrlApi} from '../api/pokemon'


export default function   () {

const [pokemons, setPokemons] = useState([]);
console.log('pokemons -->',pokemons);


useEffect(()=>{

  (async()=>{
    await loadPokemons();
  })()

},[])


const loadPokemons = async () =>{

  try {
    const response = await getPokemonsApi();
    // console.log(response);
    const pokemonsArray =[];
    
    for await (const pokemon of response.results){

      // console.log(pokemon);
      const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
      // console.log(pokemonDetails);
      pokemonsArray.push({
        id: pokemonDetails.id,
        name: pokemonDetails.name,
        type: pokemonDetails.types[0].type.name,
        order: pokemonDetails.order,
        imagen:
          pokemonDetails.sprites.other["official-artwork"].front_default,
      });
    }
    setPokemons([...pokemons, ...pokemonsArray]);

  } catch (error) {
    console.error(error);
  }

}
  return (
    <View>
      <Text>  </Text>
    </View>
  )
}
