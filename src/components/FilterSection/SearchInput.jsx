import { useState } from 'react'

const SearchInput = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch(inputValue)
  }

  return (
    <div className="flex justify-center">
      <form action="" className="flex flex-row items-center w-1/2 justify-center gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Pokemon"
          className="input input-bordered lg:w-1/2 sm:w-1/2 md:w-1/3"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchInput
