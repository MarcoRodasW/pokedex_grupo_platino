import { useEffect, useState } from 'react'

const usePokemonEncounters = (encountersURL) => {
  const [pokemonEncounters, setPokemonEncounters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPokemonEncounters = async () => {
      try {
        const response = await fetch(encountersURL)
        const data = await response.json()
        setPokemonEncounters(data.slice(0, 5))
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setIsLoading(false)
      }
    }

    fetchPokemonEncounters()
  }, [encountersURL])

  return { pokemonEncounters, isLoading }
}

export default usePokemonEncounters
