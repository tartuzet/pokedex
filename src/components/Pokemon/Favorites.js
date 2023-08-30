import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5";
import {addPokemonFavoriteApi} from '../../api/favorite';



export default function Favorites(props) {

    const {id} = props;
  
    const addFavorite = async()=>{
        console.log('añadir favoritos',id);

        await addPokemonFavoriteApi(id);
    }


  return (
    <Icon name="heart" color="#fff" size={20} onPress={addFavorite}  style={{marginRight:20}} />
  
  )
}