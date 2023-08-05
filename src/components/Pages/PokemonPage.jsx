import React from 'react'
import Header from '../Header'
import usePokemon from '../../Hooks/usePokemon'

export default function PokemonPage({ id }) {
  const { pokemonsData, loading } = usePokemon(id)
  if (loading) {
    return <span className="loading loading-dots loading-xs"></span>
  }

  const { id: pokemonID, name, sprites, abilities, base_experience, stats, types } = pokemonsData
  console.log(abilities)
  return (
    <>
      <Header />
      <section className="">
        <div className="container p-10 mx-auto">
          <div className="flex items-center justify-center gap-4">
            <img
              src={sprites.other['official-artwork']['front_default']}
              alt={name}
              className="object-contain w-80 h-80"
            />

            <div className="mt-8">
              <h1 className="text-2xl capitalize font-boldtext-white lg:text-3xl lg:w-96">{name}</h1>
              <p className="text-xl font-semibold">Pokedex Number #{pokemonID}</p>
              <div className="text-lg capitalize flex gap-4 items-center">
                {types.map(({ type: { name } }, slot) => (
                  <button className="btn btn-neutral no-animation" key={slot}>
                    {name}
                  </button>
                ))}
              </div>
              <div className="text-lg capitalize flex gap-4 items-center">
                abilities:
                {abilities.map(({ ability: { name } }, index) => (
                  <div class="badge badge-outline capitalize" key={index}>
                    {name}
                  </div>
                ))}
              </div>
              <div className="flex gap-2 items-center">
                Base Experience: {base_experience}
                <progress class="progress w-56" value={base_experience} max="100"></progress>
              </div>
              <div className="flex flex-col mt-4">
                <div className="text-lg font-semibold capitalize">stats</div>
                {stats.map(({ base_stat, stat: { name } }, index) => (
                  <div className="flex gap-2 items-center capitalize" key={index}>
                    {name} {base_stat}
                    <progress class="progress w-56" value={base_stat} max="100"></progress>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
