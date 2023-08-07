import PokemonAbilities from './PokemonAbilities'
import PokemonTypes from './PokemonTypes'

const PokemonHeader = ({ name, pokemonID, types, abilities, base_experience }) => {
  return (
    <>
      <h1 className="text-2xl capitalize font-boldtext-white lg:text-3xl lg:w-96">{name}</h1>
      <p className="text-xl font-semibold">Pokedex Number #{pokemonID}</p>
      <div className="text-lg capitalize flex gap-4 items-center">
        <PokemonTypes types={types} />
      </div>
      <div className="text-lg capitalize flex gap-4 items-center">
        abilities:
        <PokemonAbilities abilities={abilities} />
      </div>
      <div className="flex gap-2 items-center">
        Base Experience: {base_experience}
        <progress className="progress w-56" value={base_experience} max="100"></progress>
      </div>
    </>
  )
}

export default PokemonHeader
