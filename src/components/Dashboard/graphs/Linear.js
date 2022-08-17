import React, { Component } from 'react'
import "./../../../../node_modules/react-vis/dist/style.css"
import { XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, YAxis, XAxis, MarkSeries } from "react-vis"

export default class Linear extends Component {
    render() {
        const data = [
            { x: "Industria alimentaria, de las bebidas y del tabaco", y: 12.151 },
            { x: "Fabricaci[on de insumos textiles y acabado de textiles", y: 75.691 },
            { x: 2, y: 79.75 },
            { x: 3, y: 70.72 },
            { x: 4, y: 6.487 },
            { x: 5, y: 0.609 },
            { x: 6, y: 11.852 },
            { x: 7, y: -74.123 },
            { x: 8, y: 128.597 },
            { x: 9, y: 11.272 }
        ]
        const data2 = [
            { x: 8, y: 128.597, size:1 }
        ]
        return (
            <div>
                <XYPlot height={300} width={1000} xType="ordinal" stroke="red">
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <LineSeries data={data} />
                    <MarkSeries data={data2} sizeRange={[0,10]}/>
                </XYPlot>
            </div>
        )
    }
}
