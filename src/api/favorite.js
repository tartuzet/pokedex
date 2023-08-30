import AsyncStorage from "@react-native-async-storage/async-storage";
import {FAVORITE_STORAGE} from '../utils/constans';


export async function getPokemonsFavoriteApi(){
    try {
        
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return response;


    } catch (error) {
        throw error;
        
    }

}


export async function addPokemonFavoriteApi(id){

    try {
        const favorites = [];
        favorites.push(id);
        
        //
        console.log('stringify',JSON.stringify(favorites));
        const  prueba = favorites.join(' ')
        console.log('join',prueba);
        const pruebaconflat = favorites.flat();
        console.log('flat',pruebaconflat);
        //

        await AsyncStorage.setItem(FAVORITE_STORAGE,JSON.stringify(favorites));

    } catch (error) {
        throw error
    }

}

