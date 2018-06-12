import React, { Component } from 'react'
import ProTypes from 'prop-types'
import './index.less'

const timer = {
}

class Joystick extends Component {

  static propTypes = {
    keys: ProTypes.object,
    interval: ProTypes.number,
    onKeyPress: ProTypes.func,
    onKeyRelease: ProTypes.func
  }

  static defaultProps = {
    keys: {
      Up: 'w',
      Down: 's',
      Left: 'a',
      Down: 'd',
      A: 'A',
      B: 'B',
      C: 'C',
      D: 'D',
      Select: 'n',
      Start: 'm',
    },
    interval: 200,
    onKeyPress: k => {},
    onKeyRelease: k => {},
  }

  state = {
    up: false,
  }

  constructor(props, context, updater) {
    
    super(props, context, updater)

    const keys = [
      {
        name: 'Up',
        val: 'w'
      },
      {
        name: 'Down',
        val: 's'
      },
      {
        name: 'Left',
        val: 'a'
      },
      {
        name: 'Right',
        val: 'd'
      },
      {
        name: 'A',
        val: 'A'
      },
      {
        name: 'B',
        val: 'B'
      },
      {
        name: 'C',
        val: 'C'
      },
      {
        name: 'D',
        val: 'D'
      },
      {
        name: 'Select',
        val: 'n'
      },
      {
        name: 'Start',
        val: 'm'
      },
    ]
    
    if (props.keys) {
      keys.forEach( item => {
        if (props.keys[item.name]) {
            item.val = props.keys[item.name]
        }
      })
    }
   

    keys.forEach((item) => {
      this[`on${item.name}Press`] = () => {
        this.setState({
          [item.name]: true,
        })
        this.props.onKeyPress(item.val)
        timer[item.name] = setInterval( () => {
          this.props.onKeyPress(item.val)
        }, props.interval || 200)
      }

      this[`on${item.name}Release`] = () => {
        if (timer[item.name]) {
          clearInterval(timer[item.name])
          timer[item.name] = null
        }
        this.setState({
          [item.name]: false
        })
        this.props.onKeyRelease(item.val)
      }
    })
  }

  render() {
    return <svg className="joystick" version="1.1" viewBox="0 0 322.96336 170.85128" >
    <rect width="62.578949" height="31.466251" rx="8" ry="8" x="39.878036" y="0.73722839"/>
    <rect width="62.578949" height="31.466251" rx="8" ry="8" x="218.03011" y="0.73722839"/>
    <path d="m 51.419174,8.1875 c -6.031842,0 -11.470893,2.407417 -15.4375,6.3125 -0.04088,0.04024 -0.08444,0.08444 -0.125,0.125 -4.29211,3.308693 -7.596781,7.816291 -9.15625,13.4375 l -25.03125,90.25 c -4.73921,17.08279 0.48564,36.23227 17.3125,41.8125 l 26.65625,8.8125 c 16.82685,5.58022 34.179421,-1.29707 41.78125,-17.3125 l 21.031246,-44.28125 106.0625,0 21.03125,44.28125 c 7.60183,16.01543 24.9544,22.89272 41.78125,17.3125 l 26.65625,-8.8125 c 16.82686,-5.58023 22.05171,-24.72971 17.3125,-41.8125 l -25.03125,-90.25 c -2.7742,-9.999793 -11.01427,-16.522009 -20.65625,-18.875 -0.13603,-0.042133 -0.26909,-0.085439 -0.40625,-0.125 -0.01,-0.00229 -0.0213,0.00228 -0.0312,0 -1.94068,-0.5568486 -4.00056,-0.875 -6.125,-0.875 l -1.8125,0 -211.499996,0 -4.3125,0 z" />
    <g>
      <path d="m 238.20531,32.84774 c -2.18572,0 -3.97143,1.78571 -3.97143,3.97143 v 20.94285 h -20.98571 c -2.18572,0 -3.92858,1.78572 -3.92858,3.97143 v 22.27143 c 0,2.2 1.74286,3.98571 3.92858,3.98571 h 20.98571 v 20.92858 c 0,2.2 1.78571,3.97142 3.97143,3.97142 h 22.28571 c 2.18572,0 3.92857,-1.77142 3.92857,-3.97142 V 87.99059 h 20.97143 c 2.2,0 3.92857,-1.78571 3.92857,-3.98571 V 61.73345 c 0,-2.18571 -1.72857,-3.97143 -3.92857,-3.97143 H 264.41959 V 36.81917 c 0,-2.18572 -1.74285,-3.97143 -3.92857,-3.97143 h -22.28571 z" id="path3219" className="cross"/>
    </g>
    <g>
      <path d="m 60.053224,32.84773 c -2.185714,0 -3.971428,1.78571 -3.971428,3.97143 V 57.76202 H 35.110367 c -2.2,0 -3.942857,1.77142 -3.942857,3.97142 v 22.27143 c 0,2.2 1.742857,3.97143 3.942857,3.97143 h 20.971429 v 20.94286 c 0,2.2 1.785714,3.97143 3.971428,3.97143 h 22.285714 c 2.185714,0 3.928568,-1.77143 3.928568,-3.97143 V 87.9763 h 20.985714 c 2.18572,0 3.91429,-1.77143 3.91429,-3.97143 V 61.73344 c 0,-2.2 -1.72857,-3.97142 -3.91429,-3.97142 H 86.267506 V 36.81916 c 0,-2.18572 -1.742854,-3.97143 -3.928568,-3.97143 H 60.053224 z" className="cross" />
    </g>
    <path d="m 71.235854,36.203603 -6.448691,5.915291 12.897383,0 z" className={this.state.Up ? 'triangle active' : 'triangle'}/>
    <path d="m 71.107253,109.53472 -6.448691,-5.91529 12.897382,0 z" className={this.state.Down ? 'triangle active' : 'triangle'}/>
    <path d="m 34.45415,72.806518 5.962355,-6.500001 0,13.000001 z" className={this.state.Left ? 'triangle active' : 'triangle'}/>
    <path d="m 107.88086,72.933449 -5.96234,-6.500001 0,13.000001 z" className={this.state.Right ? 'triangle active' : 'triangle'}/>
    <path className="btn-group-funcs" d="m 133.55351,57.754875 c -2.18571,0 -3.92857,1.78572 -3.92857,3.97143 l 0,22.27143 c 0,2.2 1.74286,3.98571 3.92857,3.98571 l 56.14286,0 c 2.2,0 3.92857,-1.78571 3.92857,-3.98571 l 0,-22.27143 c 0,-2.18571 -1.72857,-3.97143 -3.92857,-3.97143 z" />
    <rect id="led-l" className={this.state.Select ? 'led active' : 'led'} width="13.258252" height="4.9497476" x="139.92665" y="45.693382" rx="2" ry="2"/>
    <rect id="led-r" className={this.state.Start ? 'led active' : 'led'} ry="2" rx="2" y="45.693382" x="170.06496" height="4.9497476" width="13.258252"/>
    <g id="buttons">
      <path id="up" className={this.state.Up ? 'btn-dir active' : 'btn-dir'} onTouchStart={this.onUpPress} onTouchEnd={this.onUpRelease} onClickCapture={this.onUpPress} onClick={this.onUpRelease}  d="m 79.31508,59.556558 a 1.6842051,1.6842056 0 0 1 -0.669648,1.205368 l -6.339339,5.000043 a 1.6842051,1.6842056 0 0 1 -2.053589,0 l -6.383983,-5.000043 a 1.6842051,1.6842056 0 0 1 -0.669648,-1.339298 l -0.04457,-11.607244 a 1.6842051,1.6842056 0 0 1 1.696371,-1.696443 l 12.544749,0 a 1.6842051,1.6842056 0 0 1 1.696443,1.6518 l 0.223216,11.607244 a 1.6842051,1.6842056 0 0 1 0,0.178573 z" />
      <path id="down" className={this.state.Down ? 'btn-dir active' : 'btn-dir'} onTouchStart={this.onDownPress} onTouchEnd={this.onDownRelease} onClickCapture={this.onDownPress} onClick={this.onDownRelease} d="m 79.18648,86.181762 a 1.6842051,1.6842056 0 0 0 -0.669648,-1.205368 l -6.339339,-5.000043 a 1.6842051,1.6842056 0 0 0 -2.053589,0 l -6.383983,5.000043 a 1.6842051,1.6842056 0 0 0 -0.669648,1.339298 l -0.04457,11.607244 a 1.6842051,1.6842056 0 0 0 1.696371,1.696443 l 12.544749,0 a 1.6842051,1.6842056 0 0 0 1.696443,-1.6518 L 79.18648,86.360335 a 1.6842051,1.6842056 0 0 0 0,-0.178573 z"/>
      <path id="left" className={this.state.Left ? 'btn-dir active' : 'btn-dir'} onTouchStart={this.onLeftPress} onTouchEnd={this.onLeftRelease} onClickCapture={this.onLeftPress} onClick={this.onLeftRelease} d="m 57.854166,64.727289 a 1.6842051,1.6842056 0 0 1 1.205367,0.669649 l 5.000042,6.339341 a 1.6842051,1.6842056 0 0 1 0,2.053589 l -5.000042,6.383984 a 1.6842051,1.6842056 0 0 1 -1.339297,0.669649 l -11.607241,0.04457 a 1.6842051,1.6842056 0 0 1 -1.696443,-1.696372 l 0,-12.544752 a 1.6842051,1.6842056 0 0 1 1.6518,-1.696444 l 11.607241,-0.223216 a 1.6842051,1.6842056 0 0 1 0.178573,0 z"/>
      <path id="right" className={this.state.Right ? 'btn-dir active' : 'btn-dir'} onTouchStart={this.onRightPress} onTouchEnd={this.onRightRelease} onClickCapture={this.onRightPress} onClick={this.onRightRelease} d="m 84.480854,64.854219 a 1.6842051,1.6842056 0 0 0 -1.205367,0.669649 l -5.000042,6.339341 a 1.6842051,1.6842056 0 0 0 0,2.053589 l 5.000042,6.383984 a 1.6842051,1.6842056 0 0 0 1.339297,0.669649 l 11.607241,0.04457 a 1.6842051,1.6842056 0 0 0 1.696443,-1.696372 l 0,-12.544752 a 1.6842051,1.6842056 0 0 0 -1.6518,-1.696444 L 84.659427,64.854219 a 1.6842051,1.6842056 0 0 0 -0.178573,0 z" />
      <path className="btn" id="A" className={this.state.A ? 'btn-dir active' : 'btn-dir'} onTouchStart={this.onAPress} onTouchEnd={this.onARelease} onClickCapture={this.onAPress} onClick={this.onARelease} d="m 261.0903,49.663078 a 11.76471,11.76471 0 0 1 -23.52942,0 11.76471,11.76471 0 1 1 23.52942,0 z"/>
      <path className="btn"  id="B" className={this.state.B ? 'btn-dir active' : 'btn-dir'} onTouchStartCapture={this.onBPress} onTouchEnd={this.onBRelease} onClickCapture={this.onBPress} onClick={this.onBRelease} d="m 260.8644,73.000822 a 11.76471,11.76471 0 1 1 23.52942,0 11.76471,11.76471 0 0 1 -23.52942,0 z"/>
      <path className="btn"  id="C" className={this.state.C ? 'btn-dir active' : 'btn-dir'} onTouchStartCapture={this.onCPress} onTouchEnd={this.onCRelease} onClickCapture={this.onCPress} onClick={this.onCRelease} d="m 261.0903,96.270368 a 11.76471,11.76471 0 0 1 -23.52942,0 11.76471,11.76471 0 1 1 23.52942,0 z"/>
      <path className="btn"  id="D" className={this.state.D ? 'btn-dir active' : 'btn-dir'} onTouchStartCapture={this.onDPress} onTouchEnd={this.onDRelease}  onClickCapture={this.onDPress} onClick={this.onDRelease} d="m 214.2644,73.000822 a 11.76471,11.76471 0 1 1 23.52942,0 11.76471,11.76471 0 0 1 -23.52942,0 z"/>
      <path id="select" className="btn-fun" className={this.state.Select ? 'btn-dir active' : 'btn-dir'} onTouchStartCapture={this.onSelectPress} onTouchEnd={this.onSelectRelease} onClickCapture={this.onSelectPress} onClick={this.onSelectRelease} d="m 141.75921,64.859662 c -0.46409,0.03977 -0.90674,0.285619 -1.18563,0.658684 l -4.91818,6.235545 c -0.44145,0.573965 -0.44145,1.446 0,2.019966 l 4.91818,6.279457 c 0.30647,0.406087 0.80862,0.657167 1.31737,0.658684 l 14.22758,0.04384 c 0.87542,0.007 1.67502,-0.793175 1.66867,-1.668596 l 0,-12.339354 c 0.007,-0.860892 -0.764,-1.652128 -1.62476,-1.668667 L 141.93486,64.85966 c -0.0584,-0.0028 -0.11719,-0.0028 -0.17565,0 z"/>
      <path id="start" className="btn-fun" className={this.state.Start ? 'btn-dir active' : 'btn-dir'} onTouchStartCapture={this.onStartPress} onTouchEnd={this.onStartRelease} onClickCapture={this.onStartPress} onClick={this.onStartRelease} d="m 181.49066,64.984512 c 0.46409,0.03977 0.90674,0.285619 1.18563,0.658684 l 4.91818,6.235545 c 0.44145,0.573965 0.44145,1.446 0,2.019966 l -4.91818,6.279457 c -0.30647,0.406087 -0.80862,0.657167 -1.31737,0.658684 l -14.22758,0.04384 c -0.87542,0.007 -1.67502,-0.793175 -1.66867,-1.668596 l 0,-12.339354 c -0.007,-0.860892 0.764,-1.652128 1.62476,-1.668667 l 14.22758,-0.219561 c 0.0584,-0.0028 0.11719,-0.0028 0.17565,0 z" />
    </g>
  </svg>
  }
}

export default Joystick