import React from 'react';
import {
    Link
} from 'react-router-dom';

class DashboardContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Link to="/talks">Charlas</Link>
    );
  }
}

export default DashboardContainer;