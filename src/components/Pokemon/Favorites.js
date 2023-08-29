import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5";


export default function Favorites(props) {

    const {id} = props;
  
    const addFavorite = ()=>{
        console.log('añadir favoritos',id);
    }

  return (
    <Icon name="heart" color="#fff" size={20} onPress={addFavorite}  style={{marginRight:20}} />

  )
}