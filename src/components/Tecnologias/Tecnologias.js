import React, { Component } from "react"
import TecnologiasHeader from "./TecnologiasHeader/TecnologiasHeader"
import ProductosCascada from "./ProductosCascada/ProductosCascada"

class Tecnologias extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <section id="tecnologias" style={{background: '#211942'}}>
                <TecnologiasHeader/>
                <ProductosCascada/>
            </section>
        )
    }
}

export default Tecnologias