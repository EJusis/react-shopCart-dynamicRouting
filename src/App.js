import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainContext from "./Context/MainContext";
import Toolbar from "./Components/Toolbar";
import CreateProduct from "./Pages/CreateProduct";
import {useEffect, useState} from "react";
import AllProducts from "./Pages/AllProducts";
import Product from "./Pages/Product";
import ShoppingCart from "./Pages/ShoppingCart";

function App() {
    const [getProduct, setProduct] = useState([])
    const [getCart, setCart] = useState([])
    console.log(getCart)

    function addQuantity (x, i) {

        getCart[i].quantity++
        setCart([...getCart])


    }


    return (
        <div className='App'>
            <MainContext.Provider value={{getProduct, setProduct, getCart, setCart, addQuantity}}>
                <BrowserRouter>
                    <Toolbar/>

                    <Routes>

                        <Route path='/' element={<AllProducts/>}/>
                        <Route path='/create' element={<CreateProduct/>}/>
                        <Route path='/product/:name' element={<Product getProduct={getProduct} getCart={getCart} setCart={setCart}/>}/>
                        <Route path='/cart' element={<ShoppingCart/>}/>

                    </Routes>

                </BrowserRouter>


            </MainContext.Provider>


        </div>
    );
}

export default App;
