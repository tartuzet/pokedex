import {Text,SafeAreaView } from 'react-native'
import {useFocusEffect} from '@react-navigation/native';
import React,{useState,useEffect,useCallback} from 'react'
import {getPokemonsFavoriteApi} from '../api/favorite';
import {getPokemonDetailsByIdApi} from '../api/pokemon';
import useAuth from '../hooks/useAuth'
import PokemonList from '../components/PokemonList';
import NoLogged from '../components/NoLogged';


export default function Favorite() {

  const [pokemons, setPokemons] = useState([])
  const {auth} = useAuth();


  useFocusEffect( //Sirve para que se actualize cuando entre a favoritos

    useCallback(()=>{ //Sirve para que se actualize cuando entre a favoritos

      if(auth){
        (async()=>{
          const response = await getPokemonsFavoriteApi();
  
          const pokemonsArray =[];
  
          // console.log('response',response);
  
          for await (const id of response) {
  
            //console.log(id);
            const pokemonDetails = await getPokemonDetailsByIdApi(id);
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image: pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }
  
          setPokemons([...pokemons, ...pokemonsArray]);
  
          // console.log(pokemons);

        })()
      }
    },[auth])

  )




  return (

    !auth ? 
    <NoLogged/> : 
    <SafeAreaView>
      <PokemonList 
      pokemons={pokemons} 
      />
    </SafeAreaView>
  )
}