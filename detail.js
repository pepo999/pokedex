const urlSerchParams = new URLSearchParams(window.location.search)

const pokemonName= urlSerchParams.get('pokemon')

PokeService.getDetail(pokemonName).then(pokemon=>{
    displayPokemon(pokemon);
})

function displayPokemon(pokemon) {
    const content = document.getElementById('content');
    const nameText = document.createTextNode(pokemon.id + ' ' + pokemon.name);
    const textContainer = document.createElement('h2');
    const typeOfPokemon = document.createElement('span');
    const type = pokemon.types[0].type.name;
    const typeText = document.createTextNode(type);
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
    if(type === 'normal') {
        pokemonImg.style.backgroundColor = 'blanchedalmond'
    }
    if(type === 'fire') {
        pokemonImg.style.backgroundColor = 'firebrick'
    }
    if(type === 'water') {
        pokemonImg.style.backgroundColor = 'aqua'
    }
    if(type === 'grass') {
        pokemonImg.style.backgroundColor = 'forestgreen'
    }
    if(type === 'bug') {
        pokemonImg.style.backgroundColor = 'darkolivegreen'
    }
    if(type === 'flying') {
        pokemonImg.style.backgroundColor = 'lightsteelblue'
    }
    if(type === 'electric') {
        pokemonImg.style.backgroundColor = 'gold'
    }
    if(type === 'fighting') {
        pokemonImg.style.backgroundColor = 'brown'
    }
    // if(type === 'bug') {
    //     pokemonImg.style.backgroundColor = 'darkolivegreen'
    // }
    // if(type === 'flying') {
    //     pokemonImg.style.backgroundColor = 'lightsteelblue'
    // }
    getStats(pokemon.stats)
}

function getStats(statsArray) {
    const statsUl = document.createElement('ul');
    let returnArr = [];
    for (let index = 0; index < statsArray.length; index++) {
        const newLi = document.createElement('li');
        const element = statsArray[index];
        const statText = document.createTextNode(element.stat.name + ': ' + element.base_stat)
        newLi.appendChild(statText);
        statsUl.appendChild(newLi);
       content.appendChild(statsUl)
    }
}