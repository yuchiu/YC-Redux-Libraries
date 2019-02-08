import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import counterAction from "../../actions/counter.action";

class LandingPage extends React.Component {
  render() {
    const { counterNum, addCounter, minusCounter } = this.props;
    return (
      <div className="landing-page page-wrapper">
        <header className="landing-header">YC's React-Redux</header>
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
)(LandingPage);
