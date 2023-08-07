const PokemonAbilities = ({ abilities }) => {
  return (
    <>
      {abilities.map(({ ability: { name } }, index) => (
        <div className="badge badge-outline capitalize" key={index}>
          {name}
        </div>
      ))}
    </>
  )
}

export default PokemonAbilities
