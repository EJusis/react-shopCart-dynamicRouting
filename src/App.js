import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainContext from "./Context/MainContext";
import Toolbar from "./Components/Toolbar";
import CreateProduct from "./Pages/CreateProduct";
import {useState} from "react";
import AllProducts from "./Pages/AllProducts";
import Product from "./Pages/Product";

function App() {
    const [getProduct, setProduct] = useState([])
    console.log(getProduct)

    return (
        <div className='App'>
            <MainContext.Provider value={{getProduct, setProduct}}>
                <BrowserRouter>
                    <Toolbar/>

                    <Routes>

                        <Route path='/' element={<AllProducts/>}/>
                        <Route path='/create' element={<CreateProduct/>}/>
                        <Route path='/product/:name' element={<Product getProduct={getProduct}/>}/>


                    </Routes>

                </BrowserRouter>


            </MainContext.Provider>


        </div>
    );
}

export default App;
