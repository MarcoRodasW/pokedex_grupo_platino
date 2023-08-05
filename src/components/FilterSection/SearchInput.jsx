const SearchInput = () => {
  return (
    <>
      <div className=" flex justify-center mb-5">
        <form action="" className="flex flex-row justify-evenly items-center space-x-5 w-full max-w-lg">
          <input type="text" placeholder="Search Pokemon" className="input input-bordered w-full max-w-lg" />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
    </>
  )
}

export default SearchInput
