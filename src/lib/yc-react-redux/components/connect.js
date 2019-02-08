import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "../../yc-redux";

const connect = (
  mapStateToProps = state => state,
  mapDispatchToProps = {}
) => WrapComponent =>
  class ConnectComponent extends React.Component {
    static contextTypes = {
      store: PropTypes.object
    };

    constructor(props, context) {
      super(props, context);
      this.state = {
        props: {}
      };
    }

    componentDidMount() {
      const { store } = this.context;
      store.subscribe(() => this.update());
      this.update();
    }

    update() {
      const { store } = this.context;
      const stateProps = mapStateToProps(store.getState());
      const dispatchProps = bindActionCreators(
        mapDispatchToProps,
        store.dispatch
      );
      this.setState({
        props: {
          ...this.state.props,
          ...stateProps,
          ...dispatchProps
        }
      });
    }

    render() {
      return <WrapComponent {...this.state.props} />;
    }
  };

export default connect;
