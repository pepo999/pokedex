const urlSearchParams = new URLSearchParams(window.location.search)

const pokemonName = urlSearchParams.get('pokemon')

PokeService.getDetail(pokemonName).then(pokemon => {
    displayPokemon(pokemon);
})

// PokeService.getDetail(pokemonName).then(pokemonObject => {
//     console.log('data from db', pokemonObject);

//     const newPokemon = createNewPokemon(pokemonObject);
//     displayPokemon1(newPokemon)
// })

function displayPokemon(pokemon) {
    const content = document.getElementById('content');
    const nameText = document.createTextNode(pokemon.id + ' ' + pokemon.name);
    const textContainer = document.createElement('h2');
    const typeOfPokemon = document.createElement('span');
    const type = pokemon.types[0].type.name;
    const typeText = document.createTextNode('main type: ' + type);
    typeOfPokemon.appendChild(typeText);
    textContainer.appendChild(nameText);
    const pokemonImg = document.createElement('img');
    pokemonImg.src = pokemon.sprites.front_default;
    pokemonImg.classList.add('pokemon-image');
    content.appendChild(textContainer);
    content.appendChild(typeOfPokemon);
    content.appendChild(pokemonImg);
    console.log(pokemon)
    //change color of background based on type
    // if (type === 'normal') {
    //     pokemonImg.style.backgroundColor = 'blanchedalmond'
    // }
    // if (type === 'fire') {
    //     pokemonImg.style.backgroundColor = 'firebrick'
    // }
    // if (type === 'water') {
    //     pokemonImg.style.backgroundColor = 'aqua'
    // }
    // if (type === 'grass') {
    //     pokemonImg.style.backgroundColor = 'forestgreen'
    // }
    // if (type === 'bug') {
    //     pokemonImg.style.backgroundColor = 'darkolivegreen'
    // }
    // if (type === 'flying') {
    //     pokemonImg.style.backgroundColor = 'lightsteelblue'
    // }
    // if (type === 'electric') {
    //     pokemonImg.style.backgroundColor = 'gold'
    // }
    // if (type === 'fighting') {
    //     pokemonImg.style.backgroundColor = 'brown'
    // }
    // if (type === 'psychic') {
    //     pokemonImg.style.backgroundColor = 'mediumorchid'
    // }
    // if (type === 'normal') {
    //     pokemonImg.style.backgroundColor = 'rosybrown'
    // }
    // if (type === 'rock') {
    //     pokemonImg.style.backgroundColor = 'saddlebrown'
    // }
    // if (type === 'ghost') {
    //     pokemonImg.style.backgroundColor = 'darkslateblue'
    // }
    // if (type === 'poison') {
    //     pokemonImg.style.backgroundColor = 'blueviolet'
    // }
    getStats(pokemon.stats)
}

function getStats(statsArray) {
    const statsUl = document.createElement('ul');
    for (let index = 0; index < statsArray.length; index++) {
        const newLi = document.createElement('li');
        const element = statsArray[index];
        const statText = document.createTextNode(element.stat.name + ': ' + element.base_stat)
        newLi.appendChild(statText);
        statsUl.appendChild(newLi);
        content.appendChild(statsUl)
    }
}

//-------------------------------------------------------------------------

// function createNewPokemon(pokemonObject) {
//     const myPokemon = new Pokemon(pokemonObject.name, pokemonObject.stats, pokemonObject.types);

//     for (let i = 0; i < pokemonObject.stats.length; i++) {
//         const statObject = pokemonObject.stats[i];
//         myPokemon.addStats(statObject.name, statObject.base_stat)
//     }

//     for (let i = 0; i < pokemonObject.types.length; i++) {
//         const typeObj = pokemonObject.types[i];
//         myPokemon.addTypes(typeObj.type.name, typeObj.type.url)
//     }
//     return myPokemon;
// }

// function displayPokemon1(pokemon) {
//     document.getElementById('pokemon-name').innerHTML = pokemon.name;

//     const statsContainer = document.getElementById('pokemon-stats');
//     for (const stat of pokemon.stats) {
//         statsContainer.innerHTML += `<li><strong>${stat.name}</strong>: ${stat.baseValue}</li>`;
//     }

//     const typesContainer = document.getElementById('pokemon-types');
//    for (const type of pokemon.types) {
//     typesContainer.innerHTML += `<li><strong>${type.name}</strong>: ${type.url}</li>`;
//    }

// }