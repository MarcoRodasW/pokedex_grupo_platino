import Header from './components/Header'
import { FilterSection } from './components/FilterSection/FilterSection'
import { Pokemons } from './components/PokemonSection/Pokemons'

function App() {
  return (
    <main className="container mx-auto w-screen h-screen">
      <Header />
      <Pokemons />
    </main>
  )
}

export default App
