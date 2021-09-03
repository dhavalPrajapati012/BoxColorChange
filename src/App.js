import React, { Component } from 'react'
import "./App.css"
import Box from './Box';

class App extends Component {
  constructor() {
    super();
    this.state = {
      colorBox: [
        { id: 1, color: "black" },
        { id: 2, color: "yellow" },
        { id: 3, color: "pink" },
        { id: 4, color: "blue" },
        { id: 5, color: "purple" },
        { id: 6, color: "red" },
        { id: 7, color: "skyblue" },
        { id: 8, color: "green" },
        { id: 9, color: "orange" },
        { id: 10, color: "grey" },
        { id: 11, color: "darkolivegreen" },
        { id: 12, color: "yellow" },
        { id: 13, color: "pink" },
        { id: 14, color: "seagreen" },
        { id: 15, color: "greenyellow" },
        { id: 16, color: "red" },
        { id: 17, color: "orangered" },
        { id: 18, color: "tomato" },
        { id: 19, color: "darkslategrey" },
        { id: 20, color: "saddlebrown" },
      ]
    }
  }
  changeColor = (id, color) => {
    let arr = ["black", "yellow", "pink", "blue", "purple", "red", "skyblue", "green", "orange", "grey", "cadetblue", "blueviolet", "darkcyan", "darkgreen", "darkred", "deepskyblue"]
    let finalMap = this.state.colorBox.map((val) => {
      if (val.id === id) {
        val.color = arr[Math.floor(Math.random() * arr.length)];
      }
      return val
    })
    this.setState({
      colorBox: finalMap
    })
  }
  render() {
    return (
      <>
        <h1 className="text-center head">ColorChange</h1>
        <div className="main">
          {this.state.colorBox.map((val) => (
            <Box id={val.id} color={val.color} onClick={(id, color) => this.changeColor(id, color)} />
          ))}
        </div>
      </>
    )
  }
}

export default App
