import Titulo from "../Titulo/Titulo"


const Contenedor = () => {
    let titulo = 'Mi primer app de App' // estado de App
    let subTitulo = 'Subtitulo de App' // estado de App
    //llamadas apis
  return (
    <div>
        <Titulo titulo={ titulo } subTitulo={ subTitulo } />           
    </div>
  )
}

export default Contenedor