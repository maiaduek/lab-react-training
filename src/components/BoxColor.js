import React from 'react'

const BoxColor = (props) => {
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  return (
    <div style={{
      width: '400px',
      height: '50px', 
      backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
    }}>
      rgb({props.r},{props.g},{props.b})<br></br>
      {rgbToHex(props.r, props.g, props.b)}
    </div>
  )
}

export default BoxColor;