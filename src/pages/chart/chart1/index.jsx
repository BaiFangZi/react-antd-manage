import React from 'react'

export default class Chart extends React.Component {
  state = {
    count: 0,
  }
  myRef = React.createRef()
  increment = () => {
    const number = this.myRef.current.value * 1
    this.setState((state) => ({
      count: state.count + number,
    }))
  }

  decrement = () => {
    const number = this.myRef.current.value * 1
    this.setState((state) => ({
      count: state.count - number,
    }))
  }
  incrementAsync = () => {
    const number = this.myRef.current.value * 1
    setTimeout(() => {
      this.setState((state) => ({
        count: state.count + number,
      }))
    }, 1000)
  }
  render() {
    const { count } = this.state
    console.log(this.props)
    return (
      <div>
        <p>点击了{count}次</p>
        <div>
          <select name="" id="" ref={this.myRef}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={this.increment}>增加</button>
          <button onClick={this.decrement}>减少</button>
          <button onClick={this.incrementAsync}>异步增加</button>
        </div>
      </div>
    )
  }
}
