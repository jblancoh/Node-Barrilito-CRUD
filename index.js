const express = require('express');
const app = express();

app.use(express.json());
// create list of pokemon tcg cards
const pokemons = [
  {
    id: 1,
    name: 'Charizard',
    type: 'Fire',
    hp: 78,
    weakness: 'Water',
    resistance: 'Fighting',
    imageUrl: 'https://images.pokemontcg.io/base1/1.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base1/1_hires.png',
    number: '1',
    artist: 'Ken Sugimori',
    rarity: 'Rare Holo',
    series: 'Base',
    set: 'Base',
  },
  {
    id: 2,
    name: 'Blastoise',
    type: 'Water',
    hp: 79,
    weakness: 'Grass',
    resistance: 'Lightning',
    imageUrl: 'https://images.pokemontcg.io/base1/2.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base1/2_hires.png',
    number: '2',
    artist: 'Ken Sugimori',
    rarity: 'Rare Holo',
    series: 'Base',
    set: 'Base',
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
});

app.get('/api/pokemon', (request, response) => {
  response.json(pokemons);
});

app.get('/api/pokemon/:id', (request, response) => {
  const id = Number(request.params.id);
  const pokemon = pokemons.find(pokemon => pokemon.id === id);
  if (pokemon) {
    response.json(pokemon);
  } else {
    response.status(404).end();
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
})


