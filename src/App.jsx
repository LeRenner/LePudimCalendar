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
      "classLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      "classTitle": "Cálculo π",
      "classDescription": "Horário: 10:00 -> 11:40",
      "classLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      "classTitle": "Modelagem e Simulação",
      "classDescription": "Horário: 14:00 -> 15:40, 16:00 -> 17:40",
      "classLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ],
  "Terça": [
    {
      "classTitle": "Estatística Descritiva",
      "classDescription": "Horário: 8:00 -> 9:40",
      "classLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      "classTitle": "Algorítmos e Estruturas de Dados II",
      "classDescription": "Horário: 10:00 -> 11:40",
      "classLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ],
  "Quarta": [
    {
      "classTitle": "Cálculo π",
      "classDescription": "Horário: 8:00 -> 9:40",
      "classLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      "classTitle": "Probabilidade I",
      "classDescription": "Horário: 10:00 -> 11:40",
      "classLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ],
  "Quinta": [
    {
      "classTitle": "Algorítmos e Estruturas de Dados II",
      "classDescription": "Horário: 8:00 -> 9:40",
      "classLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      "classTitle": "Estatística Descritiva",
      "classDescription": "Horário: 10:00 -> 11:40",
      "classLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      "classTitle": "Caminhos no Bacharelado em Ciência da Computação",
      "classDescription": "Horário: 13:00 -> 14:40",
      "classLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ],
  "Sexta": [
    {
      "classTitle": "Probabilidade I",
      "classDescription": "Horário: 8:00 -> 9:40",
      "classLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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
