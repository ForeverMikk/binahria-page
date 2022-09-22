import React, {Component} from "react"
import Particles from "react-tsparticles"

import './ParticlesHeader.css'

class ParticlesHeader extends Component {
    constructor(props) {
        super(props);

        this.particlesInit = this.particlesInit.bind(this);
        this.particlesLoaded = this.particlesLoaded.bind(this);
    }

    particlesInit(main) {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    }

    particlesLoaded(container) {
        console.log(container);
    }
    render() {
        return (
            <Particles
                id="tsparticles"
                init={this.particlesInit}
                loaded={this.particlesLoaded}
                style={{position: 'absolute'}}
                options={{
                    background: {
                        opacity: {
                            value: '1'
                        },
                        color: {
                            value: "#10092e",
                        },
                    },
                    style: {
                        height: '100vh',
                        width: '98vw',
                        position: 'initial',
                        overflow: 'hidden'
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "attract",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.2,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            attract: {
                                distance: 200,
                                duration: 0.4,
                                factor: 5
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#CDFB4F",
                        },
                        links: {
                            color: "#CDFB4F",
                            distance: 150,
                            enable: true,
                            opacity: 0.2,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            // attract: {
                            //     enable: true, rotateX: 600, rotateY: 1200
                            // },
                            // outModes: {
                            //     default: "bounce",
                            // },
                            // bounce: false,
                            direction: "none",
                            enable: true,
                            outMode: "out",
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
                            random: false,
                            value: 0.3
                          },
                          shape: {
                            character: {
                              fill: false,
                              font: "Verdana",
                              style: "",
                              value: "*",
                              weight: "400"
                            },
                            image: {
                                height: 100,
                                replace_color: true,
                                src: "images/github.svg",
                                width: 100,
                              },
                              polygon: { nb_sides: 5 },
                              stroke: { color: "#000000", width: 0 },
                              type: "circle"
                            },
                        size: {
                            anim: { 
                                enable: false, 
                                size_min: 0.1, 
                                speed: 40, 
                                sync: false },      
                                random: true,
                                value: 10
                        },
                    },
                    polygon: {
                        draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
                        move: { radius: 10 },
                        scale: 1,
                        type: "none",
                        url: ""
                      },
                    detectRetina: true,
                }}
            />
        )
    }
}

export default ParticlesHeader