import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Yoshi", age: 20, belt: "green", id: 2 },
      { name: "Benedict Cumberbatch", age: 43, belt: "Old black", id: 3 }
    ]
  }

  addNinjas = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas,
    })
  } 

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return(ninja.id !== id)
    })

    this.setState({
      ninjas: ninjas,
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to React app</h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinjas = {this.addNinjas}/>
      </div>
    );
  }
}

export default App;
