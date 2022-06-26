import withCounter from "./withCounter";

const Controller = ({ count, handleIncrement, handleDecrement }) => {
  return (
    <div>
      <button onClick={handleIncrement}> - </button>
      <input value={count} />
      <button onClick={handleDecrement}>+</button>
    </div>
  );
};

export default withCounter(Controller);
