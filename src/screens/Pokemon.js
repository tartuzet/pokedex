import {ScrollView } from 'react-native'
import React, {useState, useEffect}from 'react'
import {getPokemonDetailsByIdApi} from '../api/pokemon'
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats';
import Icon from "react-native-vector-icons/FontAwesome5";
import Favorites from '../components/Pokemon/Favorites';
import useAuth from '../hooks/useAuth';


 
export default function Pokemon(props) {

  const {route:{params},navigation} = props;
  const id  = params.id;
  const [pokemon,setPokemon] = useState(null)
  const {auth} = useAuth();

  //Se agrega useEffect para que cuando entre o se cambie de pokemon agregue icono
  useEffect(()=>{
    navigation.setOptions({
      headerRight:()=> (auth ? <Favorites id={pokemon?.id} /> : undefined),
      headerLeft:()=>
      <Icon 
      name='arrow-left' 
      color="#fff" 
      size={20} 
      style={{marginLeft:20}}    
      onPress={() => navigation.goBack()} 
      />
    })
  },[navigation,params,pokemon,auth])

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

      <Stats stats = {pokemon.stats} />


    </ScrollView>
  )
}