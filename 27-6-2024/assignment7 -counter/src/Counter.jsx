import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) { 
        super(props)
        this.state = {
            counter: 0
        }
    }
    
    handleIncremet = () => {
        this.setState({counter: this.state.counter + 1})
    }
    
     handleDecrement = () => { 
        if(this.state.counter > 0) {
            this.setState({counter: this.state.counter - 1})
        }
    }
  render() {
    return (
        <div>
         <h2>{this.state.counter}</h2>
        <button onClick={this.handleIncremet}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        </div>
    )
  }
}
export default Counter;