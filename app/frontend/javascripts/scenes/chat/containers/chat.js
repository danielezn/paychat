import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../redux/actions';
import { Chat } from '../components/chat';

class App extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired
  };
  render() {
    return (
      <Chat props={...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);