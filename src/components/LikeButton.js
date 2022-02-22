import React from 'react';

const LikeButton = () => {
  const [count, setCount] = React.useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>{count} Likes</button>
  )
}



export default LikeButton;