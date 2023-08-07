const PokemonMoves = ({ moves }) => {
  return (
    <>
      {moves.map(({ move }, index) => (
        <button className="btn btn-sm btn-dark no-animation" key={index}>
          {move.name}
        </button>
      ))}
    </>
  )
}
export default PokemonMoves
