'use strict'

let actualPage;

loadNextPage();

function loadNextPage() {
    PokeService.getNextPokemon(actualPage).then(pokemon => {
        actualPage = pokemon;
        // console.log(actualPage);
         display(actualPage) 
    })
}

function loadPreviousPage() {
    PokeService.getPreviousPokemon(actualPage).then(pokemon => {
        actualPage = pokemon;
        display(actualPage) 
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
        const pokemonUrl = element.url;
        const pokemonImg = document.createElement('img')
        pokemonImg.src = pokemonUrl;
        const newLi = document.createElement('li');
        newLi.classList.add('poke-li');
        newLi.appendChild(pokemonText);
        newLi.appendChild(pokemonImg);
        pokemonList.appendChild(newLi);
    }  
}

// function displayAndre() {
//     const html = actualPage.results
//     .map(pokemon => `<div><strong>${pokemon.name}</strong></div>`).join('');
//     document.getElementById('pokemon-container').innerHTML = html;
// }