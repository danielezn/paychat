import React from 'react';
import {
    Link
} from 'react-router-dom';

class Home extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Link to="/talks">Este es el home, ir al Charlas</Link>
    );
  }
}

export default Home;