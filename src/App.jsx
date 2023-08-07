import Header from './components/Header'
import { Pokemons } from './components/PokemonSection/Pokemons'

function App() {
  return (
    <main className="container md:container md:mx-auto sm:container sm:mx-auto mx-auto lg:w-screen md:h-screen">
      <Header />
      <Pokemons />
    </main>
  )
}

export default App
