import React, { Component } from 'react'
import ConocenosHeader from './ConocenosHeader/ConocenosHeader'
import ConocenosText from './ConocenosText/ConocenosText'
import ConocenosCarousel from './ConocenosCarousel/ConocenosCarousel'
import Contacto from './Contacto/Contacto'

export default class Conocenos extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section id="conocenos">
                <ConocenosHeader />
                <ConocenosText/>
                <ConocenosCarousel/>
                <Contacto />
            </section>
        )
    }
}
