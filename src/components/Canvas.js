import React from 'react'
import Circulo from './Circle'




class Canvas extends React.Component {
  componentDidMount() {
    this.updateCanvas()
  }
  componentDidUpdate(){
    this.updateCanvas()
  }
  updateCanvas() {
    const audio = new (window.AudioContext || window.webkitAudioContext)()
    const ctx = this.refs.canvas.getContext('2d')
    const canvas = this.refs.canvas
    const mouse = new MouseEvent(canvas)
    const vw = canvas.width  = window.innerWidth
    const vh = canvas.height = window.innerHeight
    const bolaCanasta = []
    const colors = [
       '#0E2759',
       '#37648C',
       '#F2B56B',
       '#F26430',
       '#D96666',
    ]
   
    for (let i = 0; i < 200; i++) {
       const radius = randomIntFromRange(4, 30)
      const bola_props = {
      dx: randomIntFromRange(-2, 2),
      dy: randomIntFromRange(-2, 2),
      ch: vh,
      cw: vw,
      x: randomIntFromRange(radius, vw - radius),
      y: randomIntFromRange(0, vh - radius),
      radius: radius,
      color: randomColor(colors),
      context: ctx
    }
      bolaCanasta.push(new Circulo(bola_props))
    }

    console.log(bolaCanasta)
    
    requestAnimationFrame(function gameLoop() {
      ctx.clearRect(0, 0, vw, vh)
      // Start drawing
 for (let i = 0; i< bolaCanasta.length; i++) {
  bolaCanasta[i].draw()
 }

      // End Drawing
      requestAnimationFrame(gameLoop)
    })
  }
  render() {
    return (
      <canvas ref="canvas"/>
    )
  }
}


function randomIntFromRange(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}
export default Canvas
