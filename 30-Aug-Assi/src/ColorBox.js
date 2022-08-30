import React from 'react';

const ColorBox = (props) => {

  console.log(props.style);

  return (
    <div>
        <h1 style={props.style}>Color Box</h1>
    </div>
  )
}

export default ColorBox;