const PokemonStats = ({ stats }) => {
  return (
    <>
      {stats.map(({ base_stat, stat: { name } }, index) => (
        <div className="flex gap-2 items-center capitalize" key={index}>
          {name} {base_stat}
          <progress className="progress w-56" value={base_stat} max="100"></progress>
        </div>
      ))}
    </>
  )
}

export default PokemonStats
