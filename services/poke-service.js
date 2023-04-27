class PokeService {

    static POKE_URL = ' https://pokeapi.co/api/v2/pokemon';
    // static POKE_IMAGE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
    static POKE_ID = 'https://pokeapi.co/api/v2/pokemon-form/1/'

    static getNextPokemon(page) {
        if(page === undefined || page.next === null) {
            return fetch(this.POKE_URL).then(resp => resp.json());
        } else if(page !== undefined){
           return fetch(page.next).then(resp => resp.json());
        }       
    }

    static getPreviousPokemon(page) { 
        if(page === undefined || page.previous === null) {
            return fetch(this.POKE_URL).then(resp => resp.json());
        } else if(page !== undefined){
           return fetch(page.previous).then(resp => resp.json());
        }       
    }

    // static getImagePokemon(pokemonId) {     
    //         return fetch(this.POKE_IMAGE + pokemonId).then(resp => resp.json());      
    // }

}