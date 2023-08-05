import { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'
import useEvolutions from '../../Hooks/useEvolutions'
import { API_GETPOKEMON } from '../../Endpoints/Endpoints'

export default function PokemonEvolutions({ pokemonId }) {
  const evolvesToData = useEvolutions(pokemonId)

  return (
    <div className="flex gap-4">
      {evolvesToData &&
        evolvesToData.map(({ name }, index) => <PokemonCard key={index} pokemonUrl={`${API_GETPOKEMON}/${name}`} />)}
    </div>
  )
}
