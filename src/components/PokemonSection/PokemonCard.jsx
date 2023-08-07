import { Link } from 'wouter'
import usePokemonData from '../../Hooks/usePokemonData'
import PokemonTypes from './PokemonTypes'
function PokemonCard({ pokemonUrl }) {
  const { pokemonsData, loading } = usePokemonData(pokemonUrl)

  if (loading) {
    return <span className="loading loading-dots loading-xs"></span>
  }

  const { id, name, sprites, types } = pokemonsData

  return (
    <div className="card w-96 h-70 p-5 bg-base-100 shadow-xl flex flex-col items-center justify-center transition duration-300 ease-in-out hover:scale-105">
      <Link href={`/pokemon/${name}`}>
        <a className="cursor-pointer">
          <figure>
            <img src={sprites.front_default} alt={name} className="object-contain w-40 h-40" />
          </figure>
          <div className="card-body flex flex-col items-center justify-center">
            <h2 className="card-title capitalize">{name}</h2>
            <p>Number of Pokedex {id}</p>
          </div>
          <div className="card-actions justify-center">
            <PokemonTypes types={types} />
          </div>
        </a>
      </Link>
    </div>
  )
}

export default PokemonCard
