
const offset = 0
const limit = 10
const url =  `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById('loadMoreButton');

function convertPokemonToLi(pokemon){
    const firstType = pokemon.types[0] || '';

    return `
        <li class="pokemon ${firstType}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" 
                alt=${pokemon.name}>
            </div>
        </li>
    `
}

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})

    
    