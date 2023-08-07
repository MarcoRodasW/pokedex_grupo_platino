const PokemonTypes = ({ types }) => {
  return (
    <>
      {types.map(({ type: { name } }, slot) => (
        <button className="btn btn-neutral no-animation" key={slot}>
          {name}
        </button>
      ))}
    </>
  )
}

export default PokemonTypes
