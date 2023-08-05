import { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'
import Pagination from './Pagination'
import { API_ALLPOKEMONS, API_GETPOKEMON } from '../../Endpoints/Endpoints'
import { FilterSection } from '../FilterSection/FilterSection'
import SearchInput from '../FilterSection/SearchInput'
import { Categories } from '../FilterSection/Categories'

export const Pokemons = () => {
  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl] = useState(null)
  const [prevUrl, setPrevUrl] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  console.log(searchQuery)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(API_ALLPOKEMONS)
      const data = await res.json()

      // Filter Pokemons based on the search query
      const filteredPokemons = data.results.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()),
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
      <Categories />
      <section className="m-10">
        <div className="grid grid-cols-3 gap-4">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemonUrl={pokemon.url} />
          ))}
        </div>
        {<Pagination goToPrevPage={goToPrevPage} goToNextPage={goToNextPage} />}
      </section>
    </>
  )
}
