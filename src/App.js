import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./redux/counterActions";
function App(props) {
  return (
    <div className="App">
      <h1>Counter-App</h1>
      <h2>Counter: {props.count}</h2>
      <button onClick={props.incrementCounter}>+</button>
      <button onClick={props.decrementCounter}>-</button>
    </div>
  );
}
const mapStateToProps = globalState => ({ count: globalState });
const mapDispatchToProps = {
  incrementCounter,
  decrementCounter
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
