import React,{useState,useEffect} from 'react'
import Icon from "react-native-vector-icons/FontAwesome5";
import {addPokemonFavoriteApi,isPokemonFavoriteApi} from '../../api/favorite';



export default function Favorites(props) {

    const {id} = props;
    const [isFavorite, setIsFavorite] = useState(undefined); //Este estado sirve para ver si existe o no y agregar o remover el elemento
    const [reloadCheck, setReloadCheck] = useState(false); //Este estado sirve para cambiar en tiempo real el corazon



    useEffect(() => {
      (async()=>{

         try {
          const response = await isPokemonFavoriteApi(id);
          setIsFavorite(response);

         } catch (error) {
          throw error;
         }
      })()
    }, [id,reloadCheck])
    
    
    const onReloadCheckFavorite = () =>{
      setReloadCheck(prev => !prev );
    }

    const removeFavorite = ()=>{
      console.log('remove');
    }
  
    const addFavorite = async()=>{
        console.log('añadir favoritos',id);

        try {
          await addPokemonFavoriteApi(id);
          onReloadCheckFavorite();
        } catch (error) {
          console.log(error);
        }
    }


  return (
    <Icon name="heart" color="#fff" solid={isFavorite} size={20} onPress={isFavorite ? removeFavorite : addFavorite}  style={{marginRight:20}} />
  
  )
}