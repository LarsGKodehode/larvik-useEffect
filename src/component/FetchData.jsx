import { useState, useEffect } from "react"
import PokemonCard from "./PokemonCard"

const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon"

function FetchData() {
  const [data, setData] = useState(null)

  useEffect(
    () => {
      // Do fetch logic here
      async function getData() {
        const response = await fetch(API_ENDPOINT)
        const data = await response.json()
        
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
          (pokemon, index) => <PokemonCard key={index} {...pokemon} />
        )
      }
    </div>
  )
}

export default FetchData