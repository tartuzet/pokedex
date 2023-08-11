import { SafeAreaView } from 'react-native'
import React, { useCallback,useState,useEffect } from 'react'
import {getPokemonsApi,getPokemonDetailsByUrlApi} from '../api/pokemon'
import PokemonList from '../components/PokemonList';

export default function Pokedex() {

  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{(async()=>{await loadPokemons();})()},[])
  const loadPokemons = useCallback (async () =>{
    try {
      setLoading(true);
      // const response = await getPokemonsApi(nextUrl);
      // setNextUrl(response.next);

      const {results: pokemonsResponse, next: nextPokemonListUrl} = await getPokemonsApi(nextUrl);
      setNextUrl(nextPokemonListUrl);

      const pokemonsArray =[];


      // for await (const pokemon of response.results){
      for await (const pokemon of pokemonsResponse) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);

    } catch (error) {
      console.error(error);
    }finally {
      // regresamos loading a false
          setLoading(false);
    }

  },[pokemons, nextUrl]);

  return (
    <SafeAreaView>
      <PokemonList 
      pokemons={pokemons} 
      loadPokemons={loadPokemons} 
      isNext={nextUrl} 
      isLoading={loading}
      />

    </SafeAreaView>
  )
}
