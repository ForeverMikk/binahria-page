import React, { Component } from 'react'
import "./../../../../node_modules/react-vis/dist/style.css"
import { RadialChart } from 'react-vis'

export default class Radial extends Component {
    render() {
        const data = [{angle:2},{angle:5}]
        return (
            <div>
                <RadialChart data={data} width={300} height={300}></RadialChart>
            </div>
        )
    }
}
