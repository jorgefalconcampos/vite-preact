import { BrowserRouter, Routes, Route } from "react-router-dom"

// librerías/dependencias
import "./App.css"
// componentes
import NavBar from "./components/NavBar/NavBar"
import Contenedor from "./components/Contenedor/Contenedor"
import ComponenteClase from "./ComponenteClase"
import Titulo from "./components/Titulo/Titulo"
import Formulario from "./components/Formulario/Formulario"
import Input from "./components/Formulario/Input"
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

  const url = "assets/DataPersonas.json"

  fetch(url)
  .then(() => {

  }).then(() => {

  })

  return (
    <BrowserRouter>
      <div>
        <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContenedor saludo={"Hola, saludos!"}/>} />
            <Route path="/form" element={<Formulario input = { Input }></Formulario>} />
          </Routes>

            {/* <Formulario input = { Input }></Formulario> */}
      </div>
    </BrowserRouter>
    // // <div className="App" style={ objStyle }>
    //   <ComponenteClase/>
    //   <Titulo/>
    //   <Contenedor saludos="saludo"/>
    // </div>
  
  )
}

export default App
