import React, { Component } from 'react'
import CatalogoHeader from './CatalogoHeader/CatalogoHeader'
import CatalogoList from './CatalogoList/CatalogoList'
import ProductosBasicos from './ProductosBasicos/ProductosBasicos'
import ProductosEspeciales from './ProductosEspeciales/ProductosEspeciales'

export default class Catalogo extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <section id="catalogo\">
                <CatalogoHeader/>
                <CatalogoList/>
                <br></br>
                <ProductosBasicos/>
                <ProductosEspeciales/>
            </section>
        )
    }
}
