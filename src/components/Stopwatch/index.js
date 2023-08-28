// Write your code here

import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimeRunning: false,
    timeInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTime = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false, timeInSeconds: 0})
  }

  onStopTime = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeInSeconds: prevState.timeInSeconds + 1,
    }))
  }

  onStartTime = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimeRunning: true})
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimeRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="appContainer">
        <div className="stopwatchContainer">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timerContainer">
            <div className="timer">
              <img
                className="timerImage"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 className="stopwatchTimer">{time}</h1>
            <div className="timerButtons">
              <button
                type="button"
                className="startButton button"
                onClick={this.onStartTime}
                disabled={isTimeRunning}
              >
                Start
              </button>
              <button
                type="button"
                onClick={this.onStopTime}
                className="stopButton button"
              >
                Stop
              </button>
              <button
                type="button"
                onClick={this.onResetTime}
                className="resetButton button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
