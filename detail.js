const urlSearchParams = new URLSearchParams(window.location.search)

const pokemonName = urlSearchParams.get('pokemon')

PokeService.getDetail(pokemonName).then(pokemon => {
    displayPokemon(pokemon);
})

function displayPokemon(pokemon) {
    const content = document.getElementById('content');
    const nameText = document.createTextNode(pokemon.id + ' ' + pokemon.name);
    const textContainer = document.createElement('h2');
    textContainer.classList.add('title-detail')
    textContainer.appendChild(nameText);
    const pokemonImg = document.createElement('img');
    pokemonImg.src = pokemon.sprites.front_default;
    pokemonImg.classList.add('pokemon-image');
    content.appendChild(textContainer);
    getTypes(pokemon.types)
    content.appendChild(pokemonImg);
    const detailsContainer = document.getElementById('details-container');
    getStats(pokemon.stats);
    getAbilities(pokemon.abilities);
    content.appendChild(detailsContainer)
}

function getTypes(typesArray) {
const typesSpan = document.createElement('span');
let typeText = document.createTextNode('');
if(typesArray.length === 1) {
typeText = document.createTextNode('type: ');
} else {
    typeText = document.createTextNode('types: ');
}
typesSpan.appendChild(typeText)
for (const type of typesArray) {
    const typeTextNode = document.createTextNode(type.type.name + ' ')
    typesSpan.appendChild(typeTextNode);        
}
content.appendChild(typesSpan);
}

function getStats(statsArray) {
    const detailsContainer = document.getElementById('details-container')
    const statsTitle = document.createTextNode('Stats');
    const br = document.createElement('hr');
    const hr = document.createElement('hr');
    const statsUl = document.createElement('ul');
    statsUl.appendChild(hr)
    statsUl.appendChild(statsTitle)
    statsUl.appendChild(br)
    for (let index = 0; index < statsArray.length; index++) {
        const newLi = document.createElement('li');
        const element = statsArray[index];
        const statText = document.createTextNode(element.stat.name + ': ' + element.base_stat);    
        newLi.appendChild(statText);
        statsUl.appendChild(newLi);
detailsContainer.appendChild(statsUl);
    }
}

function getAbilities(abilitiesArray) {
    const detailsContainer = document.getElementById('details-container')
    const abilitiesTitle = document.createTextNode('Abilities');
    const br = document.createElement('hr');
    const hr = document.createElement('hr');
    const abilitiesUl = document.createElement('ul');
    abilitiesUl.appendChild(hr)
    abilitiesUl.appendChild(abilitiesTitle)
    abilitiesUl.appendChild(br)
    for (let index = 0; index < abilitiesArray.length; index++) {
        const newLi = document.createElement('li');
        const element = abilitiesArray[index];
        const statText = document.createTextNode(element.ability.name)
        newLi.appendChild(statText);
        abilitiesUl.appendChild(newLi);
        detailsContainer.appendChild(abilitiesUl)
    }
}

function scrollUp() {
    content.scrollBy(0,-50); 
}

function scrollDown() {
    content.scrollBy(0,50);
}

