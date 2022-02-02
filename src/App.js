import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainContext from "./Context/MainContext";
import Toolbar from "./Components/Toolbar";
import CreateProduct from "./Pages/CreateProduct";
import {useState} from "react";
import AllProducts from "./Pages/AllProducts";

function App() {
    const [getProduct, setProduct] = useState([])

    return (
        <div className='App'>
            <MainContext.Provider value={{getProduct, setProduct}}>
                <BrowserRouter>
                    <Toolbar/>

                    <Routes>

                        <Route path='/' element={<AllProducts/>}/>
                        <Route path='/create' element={<CreateProduct/>}/>

                    </Routes>

                </BrowserRouter>


            </MainContext.Provider>


        </div>
    );
}

export default App;
