import React from "react";
import { connect } from "../lib/yc-react-redux";

import { counterAction } from "../actions";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h2>counter: {this.props.count}</h2>
        <button onClick={this.props.addCount}>Add</button>
        <button onClick={this.props.minusCount}>Minus</button>
      </div>
    );
  }
}
const stateToProps = state => ({
  count: state.count
});

const dispatchToProps = {
  addCount: counterAction.addCount,
  minusCount: counterAction.minusCount
};

export default connect(
  stateToProps,
  dispatchToProps
)(Counter);