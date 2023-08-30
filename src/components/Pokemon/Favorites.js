import React,{useState,useEffect} from 'react'
import Icon from "react-native-vector-icons/FontAwesome5";
import {addPokemonFavoriteApi,isPokemonFavoriteApi} from '../../api/favorite';



export default function Favorites(props) {

    const {id} = props;
    const [isFavorite, setIsFavorite] = useState(undefined);


    useEffect(() => {
      (async()=>{

         try {
          const response = await isPokemonFavoriteApi(id);
          setIsFavorite(response);

         } catch (error) {
          throw error;
         }
      })()
    }, [id])
    
    

    const removeFavorite = ()=>{
      console.log('remove');
    }
  
    const addFavorite = async()=>{
        console.log('añadir favoritos',id);

        await addPokemonFavoriteApi(id);
    }


  return (
    <Icon name="heart" color="#fff" solid={isFavorite} size={20} onPress={isFavorite ? removeFavorite : addFavorite}  style={{marginRight:20}} />
  
  )
}