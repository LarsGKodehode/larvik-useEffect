import { useState, useEffect } from "react"

const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon"

function FetchData() {
  const [data, setData] = useState(null)

  useEffect(
    () => {
      // Do fetch logic here
      async function getData() {
        const response = await fetch(API_ENDPOINT)
        const data = await response.json()
        
        console.log(data)
        setData(data)
      }

      getData()
    },
    []
  )

  return (
    <div>
      {
        data &&
        data.results.map(
          (pokemon) => <div>{pokemon.name}</div>
        )
      }
    </div>
  )
}

export default FetchData