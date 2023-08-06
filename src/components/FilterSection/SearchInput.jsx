import { useState } from 'react' // Don't forget to import React

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
    <div className="flex justify-center mb-5">
      <form
        action=""
        className="flex flex-row justify-evenly items-center space-x-5 w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search Pokemon"
          className="input input-bordered w-full max-w-lg"
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
