import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  clearCounter,
  getStarWarsPeople
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
      <br />
      <h3>StarWars :{props.people}</h3>
      <button onClick={props.getStarWarsPeople}>Get Star-Warrior's Name</button>
    </div>
  );
}
const mapStateToProps = globalState => ({
  count: globalState.count,
  people: globalState.starWarsPeople
});
const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
  clearCounter,
  getStarWarsPeople
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
