'use strict'

let actualPage;

loadNextPage();

function loadNextPage() {
    PokeService.getNextPokemon(actualPage).then(pokemon => {
        actualPage = pokemon;
        // console.log(actualPage);
         display(actualPage);
    })
}

function loadPreviousPage() {
    PokeService.getPreviousPokemon(actualPage).then(pokemon => {
        actualPage = pokemon;
        display(actualPage);
    })
}

function display(page) {    
    const pokemonList = document.getElementById('pokemon-list');
    pokemonList.innerHTML = '';
    const pokemonArr = page.results;
    for (let i = 0; i < pokemonArr.length; i++) {
        const element = pokemonArr[i];
        const pokemonName = element.name;
        const pokemonText = document.createTextNode(pokemonName);
        const pokemonLink=document.createElement('a');
        pokemonLink.href = `./detail.html?pokemon=${element.name}`;
        const newLi = document.createElement('li');
        newLi.classList.add('poke-li');
        pokemonLink.appendChild(pokemonText);
        newLi.appendChild(pokemonLink);
        pokemonList.appendChild(newLi);
    }  
}

function displayWithDetails(page) {

}