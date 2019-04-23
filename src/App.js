import React, { Component } from 'react';
import './App.css';
import Input from './Input.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
     showing: false,
      initialInput1: ''
    }
  }

  handleInput = (event) => {
    if (event.target.id =='text1'){
      this.setState({initialInput1: event.target.value})
    }else if (event.target.id == "text4"){
    this.setState({initialInput4:event.target.value})
  }
  }
  
  
  render() {
    const { showing } = this.state;
    return (
      <div className="App">
      <h2>Class Connect</h2>
      <input id= 'text1' type = 'text' placeholder='Search for a class' onChange= {this.handleInput}></input>
      <button onClick={() => this.setState({ showing: !showing })}>Search</button>
      <button onClick={() => this.setState({ showing: !showing })}>Submit a question about a class</button>
      <button onClick={() => this.setState({ showing: !showing })}>Answer someone's question about a class</button>
      { showing ? <div><Input
      text1 = {this.state.initialInput1}></Input></div> : null}
      </div>
      
    );
  }
}

export default App;
