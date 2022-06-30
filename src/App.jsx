// librerías/dependencias
import "./App.css"
// componentes
import NavBar from "./components/NavBar/NavBar"
import Contenedor from "./components/Contenedor/Contenedor"
import ComponenteClase from "./ComponenteClase"
import Titulo from "./Titulo"
// estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContenedor } from "./components/Contenedor/ItemListContenedor"

function form(){
  
}

function App() {
  // const objStyle = {
  //   color: "white",
  //   backgroundColor: "blue",
  //   fontSize: 30
  // }

  return (
    <div>
      <NavBar/>
      <ItemListContenedor saludo={"Hola, saludos!"}/>
    </div>
    // // <div className="App" style={ objStyle }>
    //   <ComponenteClase/>
    //   <Titulo/>
    //   <Contenedor saludos="saludo"/>
    // </div>
  
  )
}

export default App
