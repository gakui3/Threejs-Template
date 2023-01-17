import React, { useState } from "react";
import ReactDOM from "react-dom";

const useTest = () => {
  const [value, setValue] = useState("12345");

  const changeValue = () => {
    setValue("2345");
  };

  const Test = () => {
    return (
        <>
            <dev>{value}</dev>
        </>
    );
  };
  return { changeValue, Test };
};

export default useTest;
