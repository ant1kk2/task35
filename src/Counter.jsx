import React from "react";
import Button from "./Components/Button/Button.jsx";
import Count from "./Components/Count/Count.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseValue,
  increaseValue,
  resetValue,
} from "./redux/slices/counterSlice.js";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <Button symbol="+" onClick={() => dispatch(increaseValue())} />
      <Count value={count} />
      <Button symbol="-" onClick={() => dispatch(decreaseValue())} />
      <Button symbol="Reset" onClick={() => dispatch(resetValue())} />
    </div>
  );
};

export default Counter;
