import {ScrollView } from 'react-native'
import React, {useState, useEffect}from 'react'
import {getPokemonDetailsByIdApi} from '../api/pokemon'
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';

 
export default function Pokemon(props) {

  const {route:{params},navigation} = props;
  const id  = params.id;

  const [pokemon,setPokemon] = useState(null)
  useEffect(()=>{

    (async()=>{
      try {
        const response = await getPokemonDetailsByIdApi(id)
        setPokemon(response);

      } catch (error) {
        navigation.goBack();
      }
    })()
  }
  ,[params])


  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header 
      name={pokemon.name} 
      order={pokemon.order} 
      image={pokemon.sprites.other["official-artwork"].front_default} 
      type={pokemon.types[0].type.name}
      id={pokemon.id}
      />


      <Type types= {pokemon.types} /> 



    </ScrollView>
  )
}