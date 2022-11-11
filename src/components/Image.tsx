import React from "react";

export const Image = (props: { src: string, style?: {} }) => {
  return (
    <img
      src={props.src}
      alt=""
      className="modal-button m-auto"
      style={props.style}
    />
  );
};
