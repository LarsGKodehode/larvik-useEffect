// CSS
import './App.css'

// Components
import UseEffect from './component/UseEffect'
import FetchData from './component/FetchData'
import ConsumingContext from './component/ConsumingContext'

// Contexts
import ExampleContext from './contexts/ExampleContext'

function App() {
  return (
    <ExampleContext.Provider value='Some other value'>
      <div className="App">
        {/* <UseEffect /> */}
        {/* <FetchData /> */}
        <ConsumingContext />
      </div>
    </ExampleContext.Provider>
  )
}

export default App
