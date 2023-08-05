import { useEffect, useState } from 'react'
import { API_GETPOKEMON } from '../Endpoints/Endpoints'

function usePokemon(pokemonID) {
  const [pokemonsData, setPokemonsData] = useState(null)
  const [loading, setLoading] = useState(true)
  const url = `${API_GETPOKEMON}/${pokemonID}`
  useEffect(() => {
    async function fetchSinglePokemonData() {
      try {
        const res = await fetch(url)
        const data = await res.json()
        setPokemonsData(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching Pokemon data:', error)
        setLoading(false)
      }
    }

    fetchSinglePokemonData()
  }, [url])

  return { pokemonsData, loading }
}

export default usePokemon
