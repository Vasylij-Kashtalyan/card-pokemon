import { SearchPokemon } from 'components/SearchPokemon/SearchPokemon';
// import { Container } from 'components/Container/Container';
import { AppBar } from 'components/AppBar/AppBar';
import { Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchPokemon } from 'api/API';
import { PokemonList } from 'components/ViewPokemonList/ViewPokemonList';
import { PokemonListId } from 'components/PokemonListId/PokemonListId';
import { Container } from '@mui/material';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [name, setName] = useState('');

  useEffect(() => {
    if (!name) {
      return;
    }
    fetchPokemon(name)
      .then(pokemon => {
        setPokemon(pokemon);
      })
      .catch(error => error.message);
  }, [name]);

  const handlerSubmit = name => {
    setName(name);
  };
  return (
    <Container xs={12} sm={6} md={4}>
      <AppBar />
      <Suspense>
        <Routes>
          <Route
            path="/"
            exact="true"
            element={
              <SearchPokemon onSubmit={handlerSubmit} pokemon={pokemon} />
            }
          />
          <Route path="/pokemons" element={<PokemonList />} />
          <Route path="/pokemons/:name" element={<PokemonListId />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
