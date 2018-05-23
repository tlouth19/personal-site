import React from 'react'
import PropTypes from 'prop-types'
import Typist from 'react-typist'
import Draggable from 'react-draggable'
import { enterFullScreen, exitFullScreen } from '../functions/'
import { TYPIST_DEFAULTS } from '../constants'

class Terminal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullScreenActive: false,
      opacity: 0,
    }
    this.onResize = this.onResize.bind(this)
  }
  toggleFullScreen() {
    if (this.state.fullScreenActive) {
      exitFullScreen(this.terminal)
      this.setState({ fullScreenActive: false })
    } else {
      enterFullScreen(this.terminal)
      this.setState({ fullScreenActive: true })
    }
  }
  onResize() {
    this.calculateTerminalHeight()
  }
  onButtonClick(button) {
    switch (button) {
      case 'red':
        window.close()
      case 'green':
        this.toggleFullScreen()
      default:
        break
    }
  }
  onTerminalMount(ref) {
    if (!this.terminal) {
      this.terminal = ref
      this.calculateTerminalHeight()
      window.addEventListener('resize', this.onResize)
    }
  }
  calculateTerminalHeight() {
    const { width, height } = this.terminal.getBoundingClientRect()
    this.setState({
      width: Math.round(width),
      height: Math.round(height),
      opacity: 1
    })
  }
  render() {
    return (
      <Draggable handle=".code-header">
        <div
          ref={ref => this.onTerminalMount(ref)}
          className={`code ${
            this.state.fullScreenActive ? 'code-full-screen' : ''
          }`}
          style={{ opacity: this.state.opacity }}
        >
          <div className="code-header">
            <div style={{ width: '60px' }} className="code-btn-wrap">
              {['red', 'yellow', 'green'].map(btn => (
                <button
                  key={btn}
                  className={`code-btn ${btn}`}
                  onClick={e => this.onButtonClick(btn)}
                />
              ))}
            </div>
            <div className="code-header-center">
              🏠tysonlouth &#8212; -bash &#8212; {this.state.width}x{
                this.state.height
              }
            </div>
            <div style={{ width: '60px' }} />
          </div>
          <div className="code-terminal">
            {this.props.codeLines.map((codeLine, index) => (
              <div
                key={`${codeLine.text}_${index}`}
                className={`code-line ${
                  codeLine.error ? 'code-line-error' : ''
                }`}
              >
                Tysons-MacBook-Pro:~ tysonlouth$&nbsp;
                <Typist
                  className="code-typer"
                  cursor={TYPIST_DEFAULTS}
                  onTypingDone={this.props.onTypingDone}
                  ms={Math.floor(Math.random() * 57) + 47}
                >
                  {codeLine.text}
                </Typist>
              </div>
            ))}
          </div>
        </div>
      </Draggable>
    )
  }
}

Terminal.propTypes = {
  codeLines: PropTypes.array,
  onTypingDone: PropTypes.func,
}

export default Terminal
