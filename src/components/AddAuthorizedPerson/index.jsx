import React from 'react'
import { InputText, Select } from '../Form';
import PropTypes from 'prop-types';


class AddAuthorizedPerson extends React.Component {
  state = {
    authorizedPersonName:'',
    autorizedPersonRelationship:''
  }

  handleFormInputChange(e) {
    const inputName = e.name;
    const inputValue = e.value;

    this.setState({
      [inputName]: inputValue
    });

    return this.state;
  }

  render() {
    return (
      <>
        <InputText    
          id="authorized_person_name"
          name="authorizedPersonName"
          label="Pessoa autorizada"
          onChange={this.handleFormInputChange.bind(this)}
        />
        <Select
          id="autorized_person_relationship" 
          name="autorizedPersonRelationship"
          onChange={this.handleFormInputChange.bind(this)}
          options={this.props.relationshipOptions}
        />
      </>
    )
  }
}

AddAuthorizedPerson.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  relationshipOptions: PropTypes.array.isRequired,
  onAddition: PropTypes.func.isRequired,
  onExclusion: PropTypes.func.isRequired
}

export default AddAuthorizedPerson;