import './App.css';
import StudentFormPage from './pages/StudentFormPage';
import StudentsListPage from './pages/StudentsListPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Escola Amorinha - SGA</h1>
      </header>
      <main>
        <StudentFormPage />
        <StudentsListPage />
      </main>
    </div>
  );
}

export default App;
