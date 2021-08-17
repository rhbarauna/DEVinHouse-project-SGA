import React from 'react'
import ListRow from './components/ListRow'

const students = [
  { 
    id:0,
    name: "Rhenato Francisco Baraúna"
  },
  { 
    id:1,
    name: "Michelle Barboza da Silva Baraúna"
  }
]

class StudentListPage extends React.Component {
  state = {
    filteredStudents: students
  };

  onDelete = (student_id) => {
    const remainingStudents = students.filter(s => s.id !== student_id);
    
    this.setState({
      students: remainingStudents
    })
  }

  onEdit = (student) => {
  }

  applyFilter(e) {
    const filter = e.target.value.trim();

    if(filter.length < 1) {
      return;
    }

    const filterToSmall = e.target.value.toLowerCase();

    const filtered = students.filter(
      student => {
        const nameToSmall = student.name.toLowerCase();
        return nameToSmall.includes(filterToSmall);
      }
    )
    this.setState({
      filteredStudents: filtered
    });
  }

  render() {
    return (
      <>
        <header>
          <h2>Lista de Alunos</h2>
        </header>
        <main>
          <input 
            type="text" 
            name="students_filter" 
            id="st_filter" 
            placeholder="Filtrar alunos" 
            onChange={this.applyFilter.bind(this)}/>
          <ul>
            {
              this.state.filteredStudents.map(
                student => (
                  <ListRow 
                    key={student.id} 
                    student={student}
                    onEdit={this.onEdit}
                    onDelete={this.onDelete}
                  />
                )
              )
            }
          </ul>
        </main>
      </>
    )
  }
}

export default StudentListPage;