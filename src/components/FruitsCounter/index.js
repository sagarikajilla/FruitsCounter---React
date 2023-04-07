// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  isMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  isBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="bg">
        <h1 className="heading">
          Bob ate <span className="spa">{mango}</span> mangoes{' '}
          <span className="spa">{banana}</span> bananas
        </h1>
        <div className="images">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="img"
              alt="mango"
            />
            <button className="button" onClick={this.isMango}>
              Eat Mango
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="img"
              alt="banana"
            />
            <button className="button" onClick={this.isBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
