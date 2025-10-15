import './App.css'
import Main from './components/Main'
import logo from './assets/logo.png'

function App() {
  return (
    <div className="min-h-screen bg-yellow-100">
      <Main imageUrl={logo} name="" />
    </div>
  )
}

export default App
