import { useState, useEffect, React } from 'react'

export const ItemListContenedor = ({ saludo }) => {

  // const [ count, setCount] = useState(0);
  // const [boolean, setBoolean] = useState(true)

  // console.log(count)

  // // let count = 0;

  // const aumentar = () => {
  //   setCount(count+1)
  //   // count++
  // }

  
  // useEffect(() => {
  //   // esto se ejecuta solo 1 vez, debido al array de dependencias
  //   console.log("hola 1")
  // }, []);
  
    
  // useEffect(() => { 
  //   // esto se ejecuta siempre en el render
  //   console.log("hola 1")
  // });
  


  
  console.log("hola 2")


  return (
    <div>
      {saludo}
      <br></br>
      {count}
      <button onClick={aumentar}>Aumentar</button>

      </div>
  )
}
