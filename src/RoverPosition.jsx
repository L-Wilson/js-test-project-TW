import React, { Component } from 'react'

const RoverPosition = (props) => {
  console.log(props)
  return <h1>Rover's position: {props.x} {props.y} {props.direction}</h1>
}

export default RoverPosition;