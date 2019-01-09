import React from 'react';

const Buttons = (props) => {

  return (
    <div className="Buttons">
      <button value='L' onClick={props.left}>Left</button>
      <button value='R' onClick={props.right}>Right</button>
      <button value='M' onClick={props.move}>Move Forward</button>
      <button value='GO' onClick={props.go}>GO!</button>
    </div>
  )
}

export default Buttons;