import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

function Header (props) {
  return (
    <div className="mainHeaderContainer">
      <div className="subHeaderContainer">
        <h3>
          <Router>
            <Link to="/" className="Cabecalho">Home</Link>
          </Router>
        </h3>
        <hr />
      </div>
    </div>
  )
}

export default Header
