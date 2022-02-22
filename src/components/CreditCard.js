import React from 'react';

const CreditCard = (props) => {
  return (
    <div style={{
      border: `1px solid ${props.bgColor}`,
      backgroundColor: `${props.bgColor}`,
      borderRadius: '5px',
      width: '400px',
      margin: '20px',
      height: '200px',
      color: `${props.color}`
      }}>
      <p style={{textAlign: 'right', paddingRight: '20px'}}>{props.type}</p>
      <p>●●●● ●●●● ●●●● {props.number.slice(12,16)}</p>
      <p>Expires {props.expirationMonth}/{props.expirationYear.toString().slice(2,4)}</p>
      <p>{props.owner}</p>
      <p></p>
    </div>
  )
}

export default CreditCard;