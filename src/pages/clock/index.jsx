import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.time = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.time)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <>
        <p>현재시각: {this.state.date.toLocaleTimeString()}</p>
      </>
    )
  }
}