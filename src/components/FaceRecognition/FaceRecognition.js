import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageurl, box }) => {
  return (
    <div className="center na">
      <div className="absolute mt2">
        <img
          id="inputimage"
          alt="image"
          src={imageurl}
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
