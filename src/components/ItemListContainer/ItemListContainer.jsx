import { useState, useEffect } from "react";
import { getFetch } from "../../helpers/getFetch";

const ItemListContainer = ({}) => {

    getFetch
    .then(resp => console.log(resp))
    .catch(err => console.error(err))

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
            <h1>ItemListContainer</h1>
        </div>
    )
}

export default ItemListContainer;