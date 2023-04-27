const urlSerchParams = new URLSearchParams(window.location.search)

const pokemonName= urlSerchParams.get('pokemon')

PokeService.getDetail(pokemonName).then(pokemon=>{
    displayPokemon(pokemon);
})

function displayPokemon(pokemon) {
    const content = document.getElementById('content');
    const nameText = document.createTextNode(pokemon.name);
    const textContainer = document.createElement('h2');
    const weight=document.createElement('span');
    const weightText = document.createTextNode(pokemon.weight);
    weight.appendChild(weightText);
    textContainer.appendChild(nameText);
    const pokemonImg = document.createElement('img');
    pokemonImg.src = pokemon.sprites.front_default;
    content.appendChild(textContainer);
    content.appendChild(weight)
    content.appendChild(pokemonImg);
}