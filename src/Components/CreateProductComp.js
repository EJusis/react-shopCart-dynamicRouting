import React, {useContext, useEffect, useRef} from 'react';
import MainContext from "../Context/MainContext";
import {useNavigate} from "react-router-dom";


const CreateProductComp = () => {
    const {getProduct, setProduct} = useContext(MainContext)

    const title = useRef()
    const description = useRef()
    const photo = useRef()
    const price = useRef()
    const nav = useNavigate()

    function createProduct() {
        if (title.current.value.length === 0) return alert('Title field empty')
        if (description.current.value.length === 0) return alert('Description field empty')
        if (photo.current.value.length === 0) return alert('Photo field empty')
        if (price.current.value.length === 0) return alert('Price field empty')
        else {
            const newProduct = {
                title: title.current.value,
                description: description.current.value,
                photo: photo.current.value,
                price: price.current.value
            }
            setProduct([...getProduct, newProduct])
        }


    }

    return (
        <div className='createProductBoxWrap d-flex'>
            <input type="text" placeholder='Title' ref={title}/>
            <input type="text" placeholder='Description' ref={description}/>
            <input type="text" placeholder='Photo' ref={photo}/>
            <input type="number" placeholder='Price in $' ref={price}/>
            <button onClick={() => {
                createProduct();
                nav('/')
            }}>
                Create Product
            </button>
        </div>
    );
};

export default CreateProductComp;