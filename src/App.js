import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header clasimport React, { Component } from 'react';
import Buttons from './Buttons.jsx';
import RoverPosition from './RoverPosition.jsx';
import './App.css';

class App extends Component { 
  constructor(props){
    super(props);
    this.state = {
      upperRightCoords: [5, 5],
      x: 0,
      y: 0,
      direction: 'N',
      commands: '',
      commandsToBeRun: ''
    }
  }

  addCommand = (e) => {
    this.setState({
        commands: this.state.commands + e.target.value
    })
  };

  handleChange(event) {
    console.log('handleChange was called!')
    this.setState({commands: event.target.commands});
  }

  //takes commands, checks each command and calls appropriate function
  go = () => {
    console.log('go was called!')
    let commandsArray = this.state.commands.split('');
    console.log(commandsArray)
      
      for (let i = 0; i < commandsArray.length; i++) {
        for(let j = 0; j < commandsArray.length; j++){
          if (commandsArray[j] === 'L') {
            this.turnLeft();
          } else if (commandsArray[j] === 'R') {
            this.turnRight();
          } else if (commandsArray[j] === 'M'){
            this.moveForward();
          } else {
            alert("I only accept letters 'L', 'R', or 'M' - please try again");
          }
        }
      }
  }

  clear = () => {
    this.setState({
        commands: '',
        commandsToBeRun: ''
    });
};

  // checks current direction of rover, updates direction state based on current direction
 turnLeft = () => {
  console.log('turnLeft was called!')
    switch (this.state.direction) {
      case "N": 
        this.setState({
        direction: "W"
      })
      break;
      case "W": 
        this.setState({
        direction: "S"
      })
      break;
      case "S": 
        this.setState({
        direction: "E"
      })
      break;
      case "E": 
        this.setState({
        direction: "N"
      })
      break;
      default:
    }
  }

  // checks current direction of rover, updates direction state based on current direction
  turnRight = () => {
    console.log('turnRight was called!')
    switch (this.state.direction) {
      case "N": 
        this.setState({
        direction: "E"
      })
      break;
      case "E": 
        this.setState({
        direction: "S"
      })
      break;
      case "S": 
        this.setState({
        direction: "W"
      })
      break;
      case "W": 
        this.setState({
        direction: "N"
      })
      break;
      default:
    }
  }

  // checks current direction of rover, updates position state based on current direction
  moveForward = () => {
    switch(this.state.direction){
      case 'N':
        if(this.state.y < 1) {
          console.error('Illegal move!');
           break;
        }
        this.setState({
          y: this.state.y + 1
        })
        break;
      case 'E': 
        if(this.state.x === this.state.upperRightCoords[0]) {
          console.error('Illegal move!');
          break;
        }
        this.setState({
          x: this.state.x + 1
        })
        break;
      case 'S':
        if(this.state.y === this.state.upperRightCoords[1]) {
          console.error('Illegal move!');
          break;
        }
        this.setState({
          y: this.state.y - 1
        })
        break;
      case 'W': 
        if(this.state.x < 1) {
          console.error('Illegal move!');
          break;
        }
        this.setState({
          x: this.state.x - 1
        })
        break;
        default:
      }
    }
  

  render() {
    return (
      <div className="App">

        <RoverPosition x={this.state.x} y={this.state.y} direction={this.state.direction} />

        <button value="L" onClick={this.addCommand}>Left</button>
        <button value="R" onClick={this.addCommand}>Right</button>
        <button value="M" onClick={this.addCommand}>Move Forward</button><br/>

        {/* <Buttons left={this.addCommand} right={this.addCommand} move={this.addCommand} go={this.go}></Buttons> */}

        <input type="text" placeholder="enter commands here" onChange={this.handleChange} value={this.state.commands}/><br/>
        
        <Input />
        <button value="M" onClick={this.go}>GO!</button>
        <button onClick={this.clear} className='secondary'>clear field</button>
        
      </div>
    );
  }
}

export default App;