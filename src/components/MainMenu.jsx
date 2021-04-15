import React from "react";
import { HashRouter as Router, Link } from 'react-router-dom';

var now = new Date();
var daysOfWeek = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado'];

function MainMenu (props) {
  return (
    <div className="mainContainer">
      <div className="content">
        <h1 className="title">Menu</h1>
        <h1 className="date">Hoje é {daysOfWeek[ now.getDay() ]}, {1900 + now.getYear()}-{1 + now.getMonth()}-{now.getDate()}</h1>
        <h2 className="gradeHorariaTitle">Escolha o dia para ver Grade Horária:</h2>
        <Router>
          <div className="linksContainer">
            <Link to="/gradeHoraria"><button className="link" onClick={ () => props.setDia(0) }>Segunda</button></Link>
            <Link to="/gradeHoraria"><button className="link" onClick={ () => props.setDia(1) }>Terça</button></Link>
            <Link to="/gradeHoraria"><button className="link" onClick={ () => props.setDia(2) }>Quarta</button></Link>
            <Link to="/gradeHoraria"><button className="link" onClick={ () => props.setDia(3) }>Quinta</button></Link>
            <Link to="/gradeHoraria"><button className="link" onClick={ () => props.setDia(4) }>Sexta</button></Link>
          </div>
        </Router>
      </div>
    </div>
  )
}

export default MainMenu
