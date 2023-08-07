import usePokemonEncounters from '../../Hooks/usePokemonEncounters'

const PokemonEncounters = ({ encounterUrl }) => {
  const { pokemonEncounters, isLoading } = usePokemonEncounters(encounterUrl)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (pokemonEncounters.length === 0) {
    return (
      <div className="alert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>There are no encounters</span>
      </div>
    )
  }

  return (
    <>
      {pokemonEncounters.map((encounter, index) => (
        <div key={index} className="card w-64 bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <p className="text-lg font-bold">Location:</p>
            <p className="capitalize font-medium">{encounter.location_area.name}</p>
            <p className="text-lg font-bold">Game Version:</p>
            <p className="break-all capitalize font-medium">
              {encounter.version_details.map((versionDetail) => versionDetail.version.name).join(',')}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}
export default PokemonEncounters
