import React from 'react';
import StudentForm from '../../components/StudentForm';

class StudentFormPage extends React.Component {
  render() {
    return (
      <>
        <header>
          <h2>Formulário de Aluno</h2>
        </header>
        <main>
          <StudentForm/>
        </main>
      </>
    )
  }
}

export default StudentFormPage;