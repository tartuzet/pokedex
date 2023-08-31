import AsyncStorage from "@react-native-async-storage/async-storage";
import {FAVORITE_STORAGE} from '../utils/constans';


export async function getPokemonsFavoriteApi(){
    try {
    
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE)
        const responseJSON = JSON.parse(response)
        return responseJSON ? responseJSON : []


    } catch (error) {
        throw error;
        
    }

}


export async function addPokemonFavoriteApi(id){

    try {
        const favorites = await getPokemonsFavoriteApi();
        favorites.push(id);

        await AsyncStorage.setItem(FAVORITE_STORAGE,JSON.stringify(favorites));

    } catch (error) {
        throw error
    }

}


export async function isPokemonFavoriteApi(id){
    try {
        const response = await getPokemonsFavoriteApi();
        return response.includes(id);
    } catch (error) {
        throw error;
    }

}

export async function removePokemonFavoriteApi(id){

    try {
        const favorites = await getPokemonsFavoriteApi();
        const newFavorites = favorites.filter(item => item != id);
        // console.log('favorites',favorites);
        // console.log('newFavorites', newFavorites);

        await AsyncStorage.setItem(FAVORITE_STORAGE,JSON.stringify(newFavorites));


    } catch (error) {
        throw error;
    }

}