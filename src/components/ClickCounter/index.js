import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncriment = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="count">{count}</span>{' '}
          times
        </h1>
        <p className="description">click the button to increase the count!</p>
        <div className="button-container">
          <button type="button" className="button" onClick={this.onIncriment}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
