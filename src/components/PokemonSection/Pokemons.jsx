import { useEffect, useState } from 'react'
import { API_ALLPOKEMONS } from '../../Endpoints/Endpoints'
// import { Categories } from '../FilterSection/Categories'
import SearchInput from '../FilterSection/SearchInput'
import Pagination from './Pagination'
import PokemonCard from './PokemonCard'
export const Pokemons = () => {
  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl] = useState(null)
  const [prevUrl, setPrevUrl] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(API_ALLPOKEMONS)
      const data = await res.json()

      const filteredPokemons = data.results.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      )

      setPokemons(filteredPokemons)
      setNextUrl(data.next)
      setPrevUrl(data.previous)
    }

    fetchData()
  }, [searchQuery])

  const goToNextPage = async () => {
    const res = await fetch(nextUrl)
    const data = await res.json()
    setPokemons(data.results)
    setNextUrl(data.next)
    setPrevUrl(data.previous)
  }

  const goToPrevPage = async () => {
    const res = await fetch(prevUrl)
    const data = await res.json()
    setPokemons(data.results)
    setNextUrl(data.next)
    setPrevUrl(data.previous)
  }

  return (
    <>
      <SearchInput onSearch={setSearchQuery} />
      {/* <Categories /> */}
      <section className="m-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center gap-4 p-2">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemonUrl={pokemon.url} />
          ))}
        </div>
        {<Pagination goToPrevPage={goToPrevPage} goToNextPage={goToNextPage} />}
      </section>
    </>
  )
}
