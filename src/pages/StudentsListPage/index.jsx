import React from 'react'
import Filter from '../../components/Form/Filter';
import ListRow from './components/ListRow'

class StudentListPage extends React.Component {
  state = {
    students:[],
    filteredStudents: []
  };

  async componentDidMount() {
    try {
      const response = await fetch("/api/students");
      const responseJson = await response.json();
      const students = responseJson.students;
      
      this.setState({
        students: students,
        filteredStudents: students
      })

    } catch(error){
      console.error(error.message);
    }
  }

  onDelete = (student_id) => {
    // const remainingStudents = students.filter(s => s.id !== student_id);
    
    // this.setState({
    //   students: remainingStudents
    // })
  }

  onEdit = (student) => {
  }

  receiveFilteredValues(e) {
    this.setState({
      filteredStudents: e
    });
  }

  render() {
    return (
      <>
        <header>
          <h2>Lista de Alunos</h2>
        </header>
        <main>
          <Filter 
            id="st_filter" 
            name="studentsFilter"
            placeholder="Filtrar alunos"
            propsToFilter={["name", "id"]}
            onFilter={this.receiveFilteredValues.bind(this)}
            options={this.state.students}
          />
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