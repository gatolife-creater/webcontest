import React from "react";

export const Balloon = (props: {
  char: "satoshi" | "node" | "ether";
  children: React.ReactNode;
}) => {
  const { char } = props;
  return char === "node" ? (
    <>
      <img
        src="https://thumb.ac-illust.com/1b/1bfa58b9111cec87a2c8006cf89f0dba_t.jpeg"
        alt=""
        className="mask mask-circle float-left mt-5 mb-5 w-12 sm:w-[68px]"
      />
      <p className="float-left my-5 ml-2 max-w-[75%] table-fixed rounded-3xl bg-base-200 p-2.5 px-4 leading-6 shadow-lg duration-200 hover:shadow-md">
        {props.children}
      </p>
      <div className="clear-left" />
    </>
  ) : char === "ether" ? (
    <>
      <img
        src="https://thumb.ac-illust.com/1b/1bfa58b9111cec87a2c8006cf89f0dba_t.jpeg"
        alt=""
        className="mask mask-circle float-left mt-5 mb-5 w-12 sm:w-[68px]"
      />
      <p className="float-left my-5 ml-2 max-w-[75%] table-fixed rounded-3xl bg-base-200 p-2.5 px-4 leading-6 shadow-lg duration-200 hover:shadow-md">
        {props.children}
      </p>
      <div className="clear-left" />
    </>
  ) : char === "satoshi" ? (
    <>
      <img
        src="https://thumb.ac-illust.com/1b/1bfa58b9111cec87a2c8006cf89f0dba_t.jpeg"
        alt=""
        className="mask mask-circle float-right mt-5 mb-5 w-12 sm:w-[68px]"
      />
      <p className="float-right my-5 mr-2 max-w-[75%] table-fixed rounded-3xl bg-base-200 p-2.5 px-4 leading-6 shadow-lg duration-200 hover:shadow-md">
        {props.children}
      </p>
      <div className="clear-right" />
    </>
  ) : (
    <></>
  );
};
