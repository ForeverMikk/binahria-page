import React, { Component } from 'react'
import ReactPlayer from 'react-player/youtube'

export default class Player1 extends Component {
    render() {
        return (
            <div id="video-wrapper">
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='100%' height='100%'/>
            </div>
        )
    }
}
