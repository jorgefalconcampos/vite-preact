import { useState, useEffect } from "react";
import { getFetch } from "../../helpers/getFetch";

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // simulamos llamada a una API con delay. Lo ponemos dentro de
    // useEffect con un array de dependencias vacío para que se ejecute solo 1 vez
    useEffect(() => {
        getFetch
        .then(resp => setProducts(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])

 
    // task.then(data => console.log(data), err => console.log(err))

    // task.then(data => {
    //     console.log(data)
    // }, 
    //     err => console.log(err)
    // )

    
    // task.then(data => {
    //     console.log(data)
    // }, 
    //     err => console.log(err)
    // )


    return(
        <div>
            {loading ? <h2>Cargando...</h2> : 
                products.map(prod => 
                    <li key={prod.id}>
                        {prod.nombre}
                    </li>)}
        </div>
    )
}

export default ItemListContainer;