import React from 'react';

const Rating = (props) => {
  let stars = []
  for (let i = Math.round(props.children); i > 0; i--) {
    stars.push('★')
  }
  if (stars.length < 5) {
    let emptyStars = (5 - stars.length)
    for (let i = emptyStars; i > 0; i--) {
      stars.push('☆')
    }
  }

  return (
    <div>{stars}</div>
  )
}

export default Rating;