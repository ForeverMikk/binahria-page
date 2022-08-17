import React, { Component } from 'react'
import "./../../../../node_modules/react-vis/dist/style.css"
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries } from 'react-vis'

const data1 = [{ x: 'A', y: 10 }, { x: 'B', y: 5 }, { x: 'C', y: 15 }]
const data2 = [{ x: 'A', y: 12 }, { x: 'B', y: 2 }, { x: 'C', y: 11 }]

export default class BarCluster extends Component {

    state = {
        data: data1
    }
    render() {
        const props = {
            className: "vertical-var-series-example",
            data: this.state.data
        }
        return (
            <div>
                <button
                    onClick={() => this.setState({ data: data1 })}
                >Data 1</button>
                <button
                    onClick={() => this.setState({ data: data2 })}
                >Data 2</button>
                <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <VerticalBarSeries {...props} />
                    <VerticalBarSeries data={data2} />

                </XYPlot>
            </div>
        )
    }
}
