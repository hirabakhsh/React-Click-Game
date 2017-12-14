import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="card">
    <img alt={props.name} src={props.image}onClick={props.click}/>
  </div>
);

export default ImageCard;
