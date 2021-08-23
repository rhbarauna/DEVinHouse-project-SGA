
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";import './App.css';
import StudentFormPage from './pages/StudentFormPage';
import StudentsListPage from './pages/StudentsListPage';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <h1>Escola Amorinha - SGA</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Lista de Aluno</Link>
                </li>
                <li>
                  <Link to="/add-student">Adicionar Aluno</Link>
                </li>
              </ul>
            </nav>
        </header>
        <main>
        <Switch>
          <Route path="/add-student">
            <StudentFormPage />
          </Route>
          <Route path="/">
            <StudentsListPage />
          </Route>
        </Switch>
          
          
        </main>
      </div>
    </Router>
  );
}

export default App;
