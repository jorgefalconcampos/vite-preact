import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import Contenedor from "./components/Contenedor/Contenedor"

function App() {

  const objStyle = {
    color: "white",
    backgroundColor: "blue",
    fontSize: 30
  }

  return (
    <div className="App" style={ objStyle }>
      <NavBar/>

      <Contenedor saludos="saludo"/>

      
    </div>
  
  )
}

export default App
