import React, {useContext} from 'react';
import MainContext from "../Context/MainContext";

const AllProductsComp = () => {
    const {getProduct, setProduct} = useContext(MainContext)
    console.log(getProduct)
    return (
        <div>
            {getProduct.map((x, i) =>
                <div className='productCardWrap d-flex' key={i}>
                <img src={x.photo} alt=""/>
                <h1>{x.title}</h1>
                <p>{x.description}</p>
                <h3>{x.price} $</h3>
                <button>Add to card</button>

                </div>

                )}
        </div>
    );
};

export default AllProductsComp;