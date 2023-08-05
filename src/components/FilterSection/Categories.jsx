import { useEffect, useState } from 'react'
import { API_TYPE } from '../../Endpoints/Endpoints'

export const Categories = () => {
  const [types, setTypes] = useState([])

  useEffect(() => {
    fetch(API_TYPE)
      .then((response) => response.json())
      .then((data) => {
        setTypes(data.results)
      })
      .catch((error) => {
        console.error('Error fetching types:', error)
      })
  }, [])

  return (
    <div className="flex flex-row w-full gap-4 items-center justify-center">
      <div className="">Search for Categories:</div>
      <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-4">
        {types.map((type, index) => (
          <button key={index} className="btn btn-neutral transition duration-300 ease-in-out hover:scale-110">
            {type.name}
          </button>
        ))}
      </div>
    </div>
  )
}
