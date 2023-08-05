import { useEffect, useState } from 'react'
import { API_GETSPECIES } from '../Endpoints/Endpoints'

function extractSpeciesFromEvolutionChain(chain) {
  const speciesArray = []
  if (chain && chain.species) {
    speciesArray.push(chain.species)
  }
  if (chain && chain.evolves_to) {
    for (const evolution of chain.evolves_to) {
      speciesArray.push(...extractSpeciesFromEvolutionChain(evolution))
    }
  }
  return speciesArray
}

function useEvolutions(pokemonId) {
  const [evolvesToData, setEvolvesToData] = useState(null)

  useEffect(() => {
    const fetchPokemonSpeciesData = async () => {
      try {
        const response = await fetch(`${API_GETSPECIES}/${pokemonId}/`)
        const data = await response.json()
        const evolutionChainUrl = data.evolution_chain.url

        if (evolutionChainUrl) {
          const evolutionChainResponse = await fetch(evolutionChainUrl)
          const evolutionChainData = await evolutionChainResponse.json()
          if (evolutionChainData && evolutionChainData.chain) {
            if (evolutionChainData.chain.evolves_to.length > 0) {
              const evolves = extractSpeciesFromEvolutionChain(evolutionChainData.chain)
              setEvolvesToData(evolves)
            }
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchPokemonSpeciesData()
  }, [pokemonId])

  return evolvesToData
}

export default useEvolutions
