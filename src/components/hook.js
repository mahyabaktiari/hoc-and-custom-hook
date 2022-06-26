import { useState } from "react";

const useCounter = () => {
  const [count, setCounter] = useState(2);
  const handleIncrement = () => setCounter(count + 1);
  const handleDecrement = () => setCounter(count - 1);
  const handleReset = () => setCounter(0);
  const handleChange = (e) => {
    const { value } = e.target;
    setCounter(parseInt(value, 0));
  };

  return {
    count,
    handleIncrement,
    handleDecrement,
    handleReset,
    handleChange,
  };
};

export default useCounter;
