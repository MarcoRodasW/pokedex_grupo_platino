import { Link, useRoute } from 'wouter'
import usePokemon from '../../Hooks/usePokemon'
import Header from '../Header'
import PokemonEvolutions from '../PokemonSection/PokemonEvolutions'
import PokemonHeader from '../PokemonSection/PokemonHeader'
import PokemonStats from '../PokemonSection/PokemonStats'

export default function PokemonPage({ id }) {
  const [match, params] = useRoute('/pokemon/:id')
  const isMatch = match && id ? id : params.id
  const { pokemonsData, loading } = usePokemon(isMatch)
  if (loading) {
    return <span className="loading loading-dots loading-xs"></span>
  }
  const { id: pokemonID, name, sprites, abilities, base_experience, stats, types } = pokemonsData

  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center">
        <Link href="/">
          <button className="btn btn-dark">
            <div className="flex items-center gap-2 ">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
                />
              </svg>
              <span className="mx-1">Home</span>
            </div>
          </button>
        </Link>
        <div className="container mx-auto ">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row lg:flex-row">
            <img
              src={sprites.other['official-artwork'].front_default}
              alt={name}
              className="object-contain w-80 h-80"
            />

            <div className="mt-8">
              <PokemonHeader
                abilities={abilities}
                name={name}
                base_experience={base_experience}
                pokemonID={pokemonID}
                types={types}
              />
              <div className="flex flex-col mt-4">
                <div className="text-lg font-semibold capitalize">stats</div>
                <PokemonStats stats={stats} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="m-5 p-4">
        <h2 className="text-2xl font-semibold text-center">Evolutions</h2>
        <div className="flex lg:flex-row sm:flex-col md:flex-col items-center justify-center mt-2 gap-4">
          <PokemonEvolutions pokemonId={pokemonID} />
        </div>
      </section>
    </>
  )
}
