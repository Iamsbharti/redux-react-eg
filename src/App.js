import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  clearCounter
} from "./redux/counterActions";
function App(props) {
  return (
    <div className="App">
      <h1>Counter-App</h1>
      <h2>Counter: {props.count}</h2>
      <button onClick={props.incrementCounter}>+</button>
      <button onClick={props.decrementCounter}>-</button>
      <br />
      <button onClick={props.clearCounter}>Clear Counter</button>
    </div>
  );
}
const mapStateToProps = globalState => ({ count: globalState });
const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
  clearCounter
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
