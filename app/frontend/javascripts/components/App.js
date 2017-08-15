import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';

class App extends Component {
	static propTypes = {
		state: PropTypes.object.isRequired
	};

	render() {
		return (
			<div className="container">
			  <div className="row">
			    <div className="col-md-5">
			      <label className="control-label" for="name">Name</label>
			      <div className="row">
			        <div className="col-md-6">
			          <input id="name" name="name" className="form-control" type="text"/>
			        </div>
			        <div className="col-md-6 text-right">
			          <a id="register" href="#" className="btn btn-primary">
			            <span className="glyphicon glyphicon-plus"></span> Register</a>
			        </div>
			      </div>
			      <br/>
			      <br/>
			      <label className="control-label" for="peer">Peer</label>
			      <div className="row">
			        <div className="col-md-6">
			          <input id="peer" name="peer" className="form-control" type="text"/>
			        </div>
			        <div className="col-md-6 text-right">
			          <a id="call" href="#" className="btn btn-success">
			            <span className="glyphicon glyphicon-play"></span> Call</a>
			          <a id="terminate" href="#" className="btn btn-danger">
			            <span className="glyphicon glyphicon-stop"></span> Stop</a>
			        </div>
			      </div>
			      <br/>
			    </div>
			    <div className="col-md-7">
			      <div id="videoBig">
			        <video id="videoOutput" autoplay width="640px" height="480px"></video>
			      </div>
			      <div id="videoSmall">
			        <video id="videoInput" autoplay width="240px" height="180px"></video>
			      </div>
			    </div>
			  </div>
			</div>
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