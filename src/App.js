import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {isClicked: false}

  toggleClock = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.toggleClock}
        >
          {isClicked ? 'Hide Clock' : 'Show Clock'}
        </button>
        {isClicked && <Clock />}
      </div>
    )
  }
}

export default App
