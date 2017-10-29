import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import { Chat } from '../components/chat';

class ChatContainer extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired
  };
  render() {
    return (
      <Chat {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);