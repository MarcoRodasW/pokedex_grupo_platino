import { API_GETPOKEMON } from '../../Endpoints/Endpoints'
import useEvolutions from '../../Hooks/useEvolutions'
import PokemonCard from './PokemonCard'

export default function PokemonEvolutions({ pokemonId }) {
  const evolvesToData = useEvolutions(pokemonId)

  return (
    <div className="flex gap-4">
      {evolvesToData &&
        evolvesToData.map(({ name }, index) => <PokemonCard key={index} pokemonUrl={`${API_GETPOKEMON}/${name}`} />)}
    </div>
  )
}
