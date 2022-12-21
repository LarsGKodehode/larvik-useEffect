import { useContext } from "react"

// Contexts
import ExampleContext from "../contexts/ExampleContext"

function ConsumingContext() {
  const Example = useContext(ExampleContext)

  return (
    <div>
      <p>{Example}</p>
    </div>
  )
}

export default ConsumingContext