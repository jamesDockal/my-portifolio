import Siderbar from './compoenents/Siderbar.js'
import Psyche from './compoenents/Psyche.js'
import Home from './pages/Home.js'
import Techs from './pages/Techs.js'

import './styles/App.css'

function App () {
  return (
    <div className='App'>
      <Siderbar />
      <Psyche />
      <Home />
      <Techs />
    </div>
  )
}

export default App
