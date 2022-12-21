import { useState, useEffect } from "react"

function PokemonCard(props) {
  const [pokemonDetails, setPokemonDetails] = useState(null)

  useEffect(
    () => {
      // Do fetch logic here
      async function getData() {
        const response = await fetch(props.url)
        const data = await response.json()

        setPokemonDetails(data)
      }

      getData()
    },
    []
  )

  return (
    <div>
      <h4>
        {props.name}
      </h4>
      {
        pokemonDetails
        ? <img src={pokemonDetails.sprites.front_default} alt="" />
        : <div>Loading...</div>
      }
    </div>
  )
}

export default PokemonCard