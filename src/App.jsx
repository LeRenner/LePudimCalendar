import React from 'react';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import './global.css';

import Schedule from './components/Schedule';
import Header from './components/Header';
import Footer from './components/Footer';
import MainMenu from './components/MainMenu';

const classInformation = {
  "Segunda": [
    {
      "classTitle": "Probabilidade I",
      "classDescription": "Horário: 8:00 -> 9:40",
      "classLink": "https://meet.google.com/gqy-xxnp-wgg?authuser=2"
    },
    {
      "classTitle": "Cálculo π",
      "classDescription": "Horário: 10:00 -> 11:40",
      "classLink": "https://meet.google.com/moa-pxzj-twu?authuser=2"
    },
    {
      "classTitle": "Modelagem e Simulação",
      "classDescription": "Horário: 14:00 -> 15:40, 16:00 -> 17:40",
      "classLink": "https://us02web.zoom.us/wc/join/81466656759?wpk=wcpkff8b2e08df6bbc29e8a85434ab141b62"
    }
  ],
  "Terça": [
    {
      "classTitle": "Estatística Descritiva",
      "classDescription": "Horário: 8:00 -> 9:40",
      "classLink": "https://meet.google.com/vju-fpkn-xye?authuser=2"
    },
    {
      "classTitle": "Algorítmos e Estruturas de Dados II",
      "classDescription": "Horário: 10:00 -> 11:40",
      "classLink": "https://meet.google.com/knc-zppg-hcy?authuser=2"
    }
  ],
  "Quarta": [
    {
      "classTitle": "Cálculo π",
      "classDescription": "Horário: 8:00 -> 9:40",
      "classLink": "https://meet.google.com/htb-sqzt-fit?authuser=2"
    },
    {
      "classTitle": "Probabilidade I",
      "classDescription": "Horário: 10:00 -> 11:40",
      "classLink": "https://meet.google.com/gqy-xxnp-wgg?authuser=2"
    }
  ],
  "Quinta": [
    {
      "classTitle": "Algorítmos e Estruturas de Dados II",
      "classDescription": "Horário: 8:00 -> 9:40",
      "classLink": "https://meet.google.com/knc-zppg-hcy?authuser=2"
    },
    {
      "classTitle": "Estatística Descritiva",
      "classDescription": "Horário: 10:00 -> 11:40",
      "classLink": "https://meet.google.com/vju-fpkn-xye?authuser=2"
    },
    {
      "classTitle": "Caminhos no Bacharelado em Ciência da Computação",
      "classDescription": "Horário: 13:00 -> 14:40",
      "classLink": "http://meet.google.com/kva-stse-yzn?authuser=2"
    }
  ],
  "Sexta": [
    {
      "classTitle": "Probabilidade I",
      "classDescription": "Horário: 8:00 -> 9:40",
      "classLink": "https://meet.google.com/gqy-xxnp-wgg?authuser=2"
    }
  ]
}
const diasDaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

function App() {
  const [dia, setDia] = React.useState(0);
  //const [classInformation, setClassInformation] = React.useState(0);

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ () => <MainMenu setDia={setDia} /> } />
          <Route path="/gradeHoraria" component={ () => <Schedule dia={diasDaSemana[dia]} classInformation={classInformation[diasDaSemana[dia]]} /> } />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App
