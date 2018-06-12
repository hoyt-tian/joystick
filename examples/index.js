import React from 'react'
import ReactDOM from 'react-dom'
import Joystick from '../src'

const kp = (k) => {
  console.log(`key ${k} pressed`)
}

const kl = (k) => {
  console.log(`key ${k} release`)
}

ReactDOM.render(<Joystick onKeyPress={kp} onKeyRelease={kl}/>, document.getElementById('react'))