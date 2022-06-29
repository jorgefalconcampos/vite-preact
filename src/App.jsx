import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import Contenedor from "./components/Contenedor/Contenedor"

function App() {

  // para añadir campos dinámicos a un objeto, hacemos uso de []
  // dentro de los corchetes ponemos el nombre del campo dinámido
  
  let campo = "id"
  const obj = {
    nombre: "Jorge",
    apellido: "Falcón",
    [campo]: "1234"
  }

  console.log(obj)










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
