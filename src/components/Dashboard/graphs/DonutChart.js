import React, { Component } from 'react'
import "./../../../../node_modules/react-vis/dist/style.css"
import { RadialChart } from 'react-vis'

export default class DonutChart extends Component {
    render() {
        const data = [{angle:2},{angle:5},{angle:7},{angle:12},{angle:21},{angle:8}]
        return (
            <div>
                <RadialChart className={'donut-chart-example'} data={data} width={300} height={300} innerRadius={100} radius={140}></RadialChart>
            </div>
        )
    }
}
