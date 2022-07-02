// librerías/dependencias
import { BrowserRouter, Routes, Route } from "react-router-dom"
// componentes
import NavBar from "./components/NavBar/NavBar"
import Contenedor from "./components/Contenedor/Contenedor"
import ComponenteClase from "./ComponenteClase"
import Titulo from "./components/Titulo/Titulo"
import Input from "./components/Formulario/Input"
import Formulario from "./components/Formulario/Formulario"
import { ItemListContenedor } from "./components/Contenedor/ItemListContenedor"
// estilos
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"


function App() {

  const url = "assets/DataPersonas.json"

  

  return (

    <div>
        <ItemListContainer>
          
        </ItemListContainer>

    </div>
    // <BrowserRouter>
    //   <div>
    //     <NavBar/>
    //       <Routes>
    //         <Route path="/" element={<ItemListContenedor saludo={"Hola, saludos!"}/>} />
    //         <Route path="/form" element={<Formulario input = { Input }></Formulario>} />
    //       </Routes>

    //         {/* <Formulario input = { Input }></Formulario> */}
    //   </div>
    // </BrowserRouter>



    // // <div className="App" style={ objStyle }>
    //   <ComponenteClase/>
    //   <Titulo/>
    //   <Contenedor saludos="saludo"/>
    // </div>
  
  )
}

export default App
