import React from 'react';

const IdCard = (props) => {

  return (
    <div style={{display: 'flex', flexDirection: 'row', border: '1px solid black', width: '600px', padding: '10px'}}>
      <img src={props.picture} />
      <div>
        <p>Last name: {props.lastName}</p>
        <p>First name: {props.firstName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height / 100}m</p>
      </div>
    </div>
  )
}


export default IdCard;