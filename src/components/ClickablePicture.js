import React from 'react';

let imgPath;

const ClickablePicture = (props) => {
  const [clicked, setClicked] = React.useState(false)


  return (
    <div>
      <img onClick={() => setClicked(!clicked)} src={clicked ? props.imgClicked : props.img} />
    </div>
  )
}


export default ClickablePicture;