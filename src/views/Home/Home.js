import React, {Component} from "react"

import HomeHeader from "./HomeHeader/HomeHeader"
import Compentecia from "./Competencia/Competencia"
import CompetenciaCarousel from "./CompetenciaCarousel/CompetenciaCarousel"
import Compania from "./Compania/Compania"
import Compromiso from "./Compromiso/Compromiso"
import Testimonios from "./Testimonios/Testimonios"

class Home extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <section id="home">
                <HomeHeader />
                <br></br>
                <Compentecia />
                <CompetenciaCarousel />
                <br></br>
                <br></br>
                <br></br>
                <Compania />
                <Compromiso />
                <Testimonios />
                
            </section>
        )
    }
}

export default Home