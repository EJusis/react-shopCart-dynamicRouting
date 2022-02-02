import React from 'react';
import {useParams} from "react-router-dom";

const Product = ({ getProduct }) => {
    const {name} = useParams()
    const singleItem = getProduct.find(item => item.title === name )
    console.log(`This is router name: ${name}`)
    console.log(singleItem)

    return (

        <div className='pageWrap d-flex-center'>
            <div className='singleProductWrap d-flex'>
                <div className='flex-grow d-flex-center'>
                    <img src={singleItem.photo} alt=""/>
                </div>
                <div className='flex-grow d-flex space-ard-col'>
                    <h1>{singleItem.title}</h1>
                    <p>{singleItem.description}</p>
                    <h3>Price: {singleItem.price} $</h3>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;