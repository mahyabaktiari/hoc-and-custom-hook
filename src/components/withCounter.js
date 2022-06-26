import React from "react";
import useCounter from "./hook";

const withCounterLogic = (EnhancedComponent) => (props) => {
  const { count, handleIncrement, handleDecrement, handleReset, handleChange } =
    useCounter();

  return (
    <EnhancedComponent
      count={count}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
      handleChange={(e) => handleChange(e)}
    />
  );
};

export default withCounterLogic;
