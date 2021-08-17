import React from 'react';

class ListRow extends React.Component {

  onEdit() {
    // TODO - implement local logic
    this.props.onEdit(this.prop.student);
  }

  onDelete() {
    // TODO - implement local logic
    this.props.onDelete(this.prop.student);
  }

  render(){
    const {student} = this.props
    return (
      <li>
        <span>{student?.name}</span>
        <span>{student?.birthDate}</span>
        <span>{student?.clazz}</span>
        <span>{student?.emergencyContactPhone}</span>
        <span>{student?.emergencyContactName}</span>
        <div>
          <button onClick={this.onEdit}>Editar</button>
          <button onClick={this.onDelete}>Excluir</button>
        </div>
      </li>
    );
  }
}
export default ListRow;