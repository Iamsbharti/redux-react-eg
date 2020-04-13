import React from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  clearCounter
} from "./redux/counterActions";

function HooksApp() {
  const count = useSelector(gstate => gstate);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter App</h1>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(incrementCounter())}>+</button>
      <button onClick={() => dispatch(decrementCounter())}>-</button>
      <br />
      <button onClick={dispatch(clearCounter())}>Clear Counter</button>
    </div>
  );
}
export default HooksApp();
