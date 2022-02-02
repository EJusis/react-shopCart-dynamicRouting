import React, {useContext} from 'react';
import MainContext from "../Context/MainContext";
import {useNavigate} from "react-router-dom";

const AllProductsComp = () => {
    const {getProduct} = useContext(MainContext)
    const nav = useNavigate()
    return (
        <div>
            {getProduct.map((x, i) =>
                <div className='productCardWrap d-flex' key={i}>
                <img src={x.photo} alt=""/>
                <h1>{x.title}</h1>
                <p>{x.description}</p>
                <h3>{x.price} $</h3>
                <button onClick={() => nav(`/product/${x.title}`)}>Add to card</button>

                </div>

                )}
        </div>
    );
};

export default AllProductsComp;