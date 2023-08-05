import { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'
import Pagination from './Pagination'
import { API_ALLPOKEMONS } from '../../Endpoints/Endpoints'

export const Pokemons = () => {
  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl] = useState(null)
  const [prevUrl, setPrevUrl] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(API_ALLPOKEMONS)
      const data = await res.json()
      setPokemons(data.results)
      setNextUrl(data.next)
      setPrevUrl(data.previous)
    }

    fetchData()
  }, [])

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
    <section className="m-10">
      <div className="grid grid-cols-3 gap-4">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemonUrl={pokemon.url} />
        ))}
      </div>
      <Pagination goToPrevPage={goToPrevPage} goToNextPage={goToNextPage} />
    </section>
  )
}
