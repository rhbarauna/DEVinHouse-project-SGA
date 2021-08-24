import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import StudentFormPage from './pages/StudentFormPage';
import StudentsListPage from './pages/StudentsListPage';

const routes = [
  { path: "/", label:'Lista de Alunos', component: StudentsListPage},
  { path: "/add-student", label:'Adicionar Aluno', component: StudentFormPage},
]

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Escola Amorinha - SGA</h1>
            <nav>
              <ul>
                { routes.map( ({path, label}) => <li key={path} ><Link to={path}>{label}</Link></li>) }
              </ul>
            </nav>
          </header>
          <main>
            <Switch>
              { routes.map( ({path, component}) => <Route key={path} path={path} component={component} exact />) }
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;