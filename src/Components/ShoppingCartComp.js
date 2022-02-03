import React, {useContext, useEffect} from 'react';
import MainContext from "../Context/MainContext";
import {useNavigate} from "react-router-dom";

const ShoppingCartComp = () => {
    const nav = useNavigate()
    const {getCart, setCart, addQuantity} = useContext(MainContext)



    return (
        <div className='shoppingCartWrap d-flex'>
            {getCart.map((x, i) =>
                <div className="shoppingCartItem d-flex" key={i}>
                    <img src={x.photo} alt=""/>
                    <div className='itemInfo'>
                        <h1>{x.title}</h1>
                        <h3>{x.price} $</h3>
                    </div>
                    <h3>Quantity: {x.quantity}</h3>
                    <div>
                        <button onClick={() => addQuantity(x, i)}>Add</button>
                        <button style={{backgroundColor: 'red'}}>Remove</button>
                    </div>
                </div>
            )}



        </div>
    );
};

export default ShoppingCartComp;