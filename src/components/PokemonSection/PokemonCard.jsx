import { Link } from 'wouter'
import usePokemonData from '../../Hooks/usePokemonData'
function PokemonCard({ pokemonUrl }) {
  const { pokemonsData, loading } = usePokemonData(pokemonUrl)

  if (loading) {
    return <span className="loading loading-dots loading-xs"></span>
  }

  const { id, name, sprites, types } = pokemonsData

  return (
    <div className="card w-96 h-70 p-5 bg-base-100 shadow-xl flex flex-col">
      <Link href={`/pokemon/${name}`}>
        <a className="cursor-pointer">
          <figure>
            <img src={sprites.front_default} alt={name} className="object-contain w-40 h-40" />
          </figure>
          <div className="card-body">
            <h2 className="card-title capitalize">{name}</h2>
            <p>Number of Pokedex {id}</p>
          </div>
          <div className="card-actions justify-center">
            {types.map(({ type: { name } }, slot) => (
              <button className="btn btn-neutral no-animation" key={slot}>
                {name}
              </button>
            ))}
          </div>
        </a>
      </Link>
    </div>
  )
}

export default PokemonCard
