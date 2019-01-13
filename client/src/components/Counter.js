import React from "react";
import { connect } from "react-redux";
import counterAction from "../actions/counterAction";

class Counter extends React.Component {
  render() {
    const { counterNum, addCounter, minusCounter } = this.props;
    return (
      <div>
        counter: {counterNum}
        <button onClick={addCounter}>Add</button>
        <button onClick={minusCounter}>Minus</button>
      </div>
    );
  }
}
const stateToProps = state => ({
  counterNum: state
});

const dispatchToProps = {
  addCounter: counterAction.addCounter,
  minusCounter: counterAction.minusCounter
};

export default connect(
  stateToProps,
  dispatchToProps
)(Counter);
