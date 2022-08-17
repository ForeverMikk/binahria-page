import React, { Component } from 'react'
import Linear from './graphs/Linear'
import Radial from './graphs/Radial'
import BarCluster from './graphs/BarCluster'
import DonutChart from './graphs/DonutChart'
import HorizontalBarCluster from './graphs/HorizontalBarCluster'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Linear/>
                <Radial />
                <BarCluster />
                <DonutChart/>
                <HorizontalBarCluster/>
            </div>
        )
    }
}
