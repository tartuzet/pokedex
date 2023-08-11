import { View, Text,Button } from 'react-native'
import React, {useState, useEffect}from 'react'
import {getPokemonDetailsByIdApi} from '../api/pokemon'
 
export default function Pokemon(props) {

  const {route:{params},navigation} = props;
  const id  = params.id;
  console.log(id);

  const [pokemon,setPokemon] = useState(null)
  useEffect(()=>{

    (async()=>{
      try {
        const response = await getPokemonDetailsByIdApi(id)
        console.log(response);

        setPokemon(response);

      } catch (error) {
        navigation.goBack();
      }
    })()
  }
  ,[params])


  if (!pokemon) return null;

  return (
    <View>
      <Text>Pokemon: {pokemon.name} </Text>
      
      <Button title="Go to Pokedex" onPress={() => navigation.navigate('PokedexScreen')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />


    </View>
  )
}