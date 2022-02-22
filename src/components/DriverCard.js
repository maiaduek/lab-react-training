import React from 'react';
import Rating from './Rating';


const DriverCard = (props) => {
  return (
    <div style={{
      width: '600px',
      height: '100px',
      backgroundColor: 'blue',
      margin:'10px',
      borderRadius: '5px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      color: 'white'
      }}>
      <img src={props.img} style={{width: '80px', borderRadius: '50px', margin: '10px'}}/>
      <div style={{marginLeft: '10px'}}>
        <h3 style={{marginBottom: '0'}}>{props.name}</h3>
        <Rating>{props.rating}</Rating>
        <p style={{marginTop: '0'}}>{props.car.model} - {props.car.licensePlate}</p>
      </div>
    </div>
  )
}

export default DriverCard;