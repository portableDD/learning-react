import React, { Component } from 'react';
import Ninjas from "./Ninjas"

class  App extends  Component {
  state={
    ninjas:[
      {name:"Ryu", age:"30", belt:"black", id:"1"},
      {name:"Yoshi", age:"20", belt:"green", id:"2"},
      {name:"cystal", age:"25", belt:"pink", id:"3"}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React</h1>
        <p>welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
