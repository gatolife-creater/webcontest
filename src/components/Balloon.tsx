import React from "react";

export const Balloon = (props: {
  direction: "left" | "right";
  children: React.ReactNode;
}) => {
  const { direction } = props;
  return direction === "left" ? (
    <>
      <p className="p-2 rounded-r-3xl rounded-tl-3xl w-9/12 float-left ml-5 mt-2 mb-2 bg-green-300">
        {props.children}
      </p>
      <div className="clear-left"></div>
    </>
  ) : direction === "right" ? (
    <>
      <p className="p-2 rounded-l-3xl rounded-tr-3xl w-9/12 float-right mr-5 mt-2 mb-2 bg-green-400">
        {props.children}
      </p>
      <div className="clear-right"></div>
    </>
  ) : (
    <></>
  );
};
