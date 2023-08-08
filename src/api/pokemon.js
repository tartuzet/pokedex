// import { API_HOST} from '../utils/constans';
import {API_URL} from "@env"


export async function getPokemonsApi(){

    try {
        const url = `${API_URL}/pokemon?limit=20offset=0`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }

}