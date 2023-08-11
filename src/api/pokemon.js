import {API_URL} from "@env"

export async function getPokemonsApi(endpointUrl){

    try {
        const url = `${API_URL}/pokemon?limit=20offset=0`;
        const response = await fetch(endpointUrl || url);
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

export async function getPokemonDetailsByIdApi(id){
    try {
        const url = `${API_URL}/pokemon/${id}`;

        const response = await fetch(url);

        const result = await  response.json();

        return result;
        
    } catch (error) {
        throw error;
    }
}
