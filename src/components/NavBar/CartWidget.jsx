
import React from "react";
import logo from "../../images/cart.png"

const CartWidget = () => {
    return (
        <div className="w-15">
            <img src={logo} alt="carro" className="w-25"/>
        </div>
    )
}

export default CartWidget;