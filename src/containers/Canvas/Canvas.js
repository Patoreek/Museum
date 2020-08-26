import React from "react";

const Canvas = (props) => {
  const backBtnHandler = () => {
    props.setShowCanvas(false);
  };

  return (
    <div>
      <button onClick={backBtnHandler}>Back </button>
      <br />
      NOW DISPLAYING {props.itemChosen}
      Testing git
    </div>
  );
};

export default Canvas;
