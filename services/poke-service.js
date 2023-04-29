class PokeService {

    // static POKE_URL = 'https://pokeapi.co/api/v2/pokemon'

    // static getNextPokemon(page) {
    //     if(page === undefined || page.next === null) {
    //         return fetch(this.POKE_URL).then(resp => resp.json());
    //     } else if(page !== undefined){
    //        return fetch(page.next).then(resp => resp.json())
    //        .then(pokemonPage => this.getDetails(pokemonPage.results));
    //     }       
    // }

    // static getPreviousPokemon(page) { 
    //     if(page === undefined || page.previous === null) {
    //         return fetch(this.POKE_URL).then(resp => resp.json());
    //     } else if(page !== undefined){
    //        return fetch(page.previous).then(resp => resp.json())
    //     }       
    // }

    static PAGE_COUNTER = 20;

    static BASE_URL = 'https://pokeapi.co/api/v2/';

    static getDetail(name){
        const url=this.BASE_URL + 'pokemon/' + name;
        return fetch(url).then(resp => resp.json())
    }

    static getPage(index) {
        const url = this.BASE_URL + 'pokemon?limit=' + this.PAGE_COUNTER + '&offset=' + this.PAGE_COUNTER * index;
        return fetch(url)
            .then(resp => resp.json())
            .then(pokemonPage => this.getDetails(pokemonPage.results));
    }

    static getDetails(pokemonNames) {
        const requests = [];
        for (const pokemon of pokemonNames) {
            const url = this.BASE_URL + 'pokemon/' + pokemon.name;
            const request = fetch(url).then(resp => resp.json());
            requests.push(request);
        }
        return Promise.all(requests);
    }

}