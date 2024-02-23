
const limit = 20
let offset = 0

const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById('loadMoreButton');
const url =  `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


function loadPokemonItens (offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHTML = pokemons.map((pokemon) => `
                    <li class="pokemon ${pokemon.type[0]}">
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
                `).join('')
        pokemonList.innerHTML += newHTML
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
    })
    