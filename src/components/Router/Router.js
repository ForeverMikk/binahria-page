import React,{ Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../../views/Home/Home"
import Conocenos from "../../views/Conocenos/Conocenos"
import Tecnologias from "../../views/Tecnologias/Tecnologias"
import Catalogo from "../../views/Catalogo/Catalogo"
// import Dashboard from "./../Dashboard/Dashboard"
import ProductView from '../../views/ProductView/ProductView';
import Contact from '../../views/Contact/Contact'
import MarketPlace from '../../views/MarketPlace/MarketPlace';
import MarketProduct from '../../views/MarketProduct/MarketProduct';

class Router extends Component{
    render(){
        return(
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/tecnologias" element={<Tecnologias/>} />
                <Route path="/conocenos" element={<Conocenos/>} />
                <Route path="/catalogo" element={<Catalogo/>} />
                <Route path="/marketplace" element={<MarketPlace/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/product" element={<ProductView/>} />
                <Route path="/product/:type" element={<ProductView /> } />
                <Route path='/market-product' element={<MarketProduct/>} />
            </Routes>
        )
    }
}

export default Router