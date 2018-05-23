import React from 'react'
import Terminal from '../components/terminal'
import { CODE_LINES } from '../constants'

class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {
      activeLine: 0,
    }
    this.onTypingDone = this.onTypingDone.bind(this)
  }
  onTypingDone() {
    setTimeout(() => {
      this.setState(({ activeLine }) => ({
        activeLine: activeLine + 1,
      }))
    }, Math.floor(Math.random() * 1000) + 100)
  }
  render() {
    return (
      <Terminal
        codeLines={CODE_LINES.filter(
          (codeLine, index) => index <= this.state.activeLine
        )}
        onTypingDone={this.onTypingDone}
      />
    )
  }
}

export default IndexPage
