import { useEffect, useState } from 'react'

function usePokemonData(pokemonUrl) {
  const [pokemonsData, setPokemonsData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const res = await fetch(pokemonUrl)
        const data = await res.json()
        setPokemonsData(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching Pokemon data:', error)
        setLoading(false)
      }
    }

    fetchPokemonData()
  }, [pokemonUrl])

  return { pokemonsData, loading }
}

export default usePokemonData
