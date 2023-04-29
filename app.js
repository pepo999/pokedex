'use strict'

// let actualPage;

// loadNextPage();

// function loadNextPage() {
//     PokeService.getNextPokemon(actualPage).then(pokemon => {
//         actualPage = pokemon;
//         // console.log(actualPage);
//          display(actualPage);
//     })
// }

// function loadPreviousPage() {
//     PokeService.getPreviousPokemon(actualPage).then(pokemon => {
//         actualPage = pokemon;
//         display(actualPage);
//     })
// }

let actualPageIndex;

getNextPage();

function getNextPage() {
    if (actualPageIndex === undefined) {
        actualPageIndex = 0;
    } else {
        actualPageIndex++;
    }
    PokeService.getPage(actualPageIndex).then(pokemons => {
        displayPokemons(pokemons);
    })
}

function getPreviousPage() {
    actualPageIndex--;
    PokeService.getPage(actualPageIndex).then(pokemons => {
        displayPokemons(pokemons);
    })
}

function displayPokemons(pokemons) {    
    const pokemonList = document.getElementById('pokemon-list');
    pokemonList.innerHTML = '';
    for (let i = 0; i < pokemons.length; i++) {
        const element = pokemons[i];
        const pokemonName = element.name;
        const pokemonText = document.createTextNode(element.id + ' ' +  pokemonName);
        const pokemonLink=document.createElement('a');
        pokemonLink.href = `./detail.html?pokemon=${element.name}`;
        const pokemonImage = document.createElement('img');
        pokemonImage.src = element.sprites.front_default;
        const newLi = document.createElement('li');
        newLi.classList.add('poke-li');
        pokemonLink.appendChild(pokemonText);
        newLi.appendChild(pokemonLink);
        newLi.appendChild(pokemonImage);
        pokemonList.appendChild(newLi);
    }  
}

function scrollUp() {
    const pokemonList = document.getElementById('pokemon-list');
    pokemonList.scrollBy(0,-50); 
}

function scrollDown() {
    const pokemonList = document.getElementById('pokemon-list');
    pokemonList.scrollBy(0,50);
}