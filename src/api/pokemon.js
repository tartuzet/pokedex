// import { API_HOST} from '../utils/constans';
import {API_URL} from "@env"


export async function getPokemonsApi(){

    try {
        const url = `${API_URL}/pokemon?limit=26offset=0`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }

}

export async function getPokemonDetailsByUrlApi(url){
    try {
        const response = await fetch(url);
        const result = await  response.json();
        return result;
    } catch (error) {
        throw error;
    }
}