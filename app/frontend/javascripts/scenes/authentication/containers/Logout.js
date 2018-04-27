import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';

class Logout extends Component {
  render() {
    const { logoutUser } = this.props;
    logoutUser();
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message
  };
}

export default connect(mapStateToProps, { logoutUser })(Logout);