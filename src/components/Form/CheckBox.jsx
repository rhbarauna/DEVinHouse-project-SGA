import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  handleValueChange(event) {
    if(!this.props.onChange){
      return
    }
    
    this.props.onChange({
      name: event.target.name,
      value: event.target.checked
    });
  }
  render(){
    const {id, name, label, checked} = this.props;
    return (
      <>
        <input id={id} name={name} type="checkbox" checked={checked} onChange={this.handleValueChange.bind(this)}/>
        <label htmlFor={id}>{label}</label>
      </>
    );
  }
}

Checkbox.propTypes = {
  id:     PropTypes.string.isRequired,
  name:   PropTypes.string.isRequired,
  label:  PropTypes.string,
}

export  default Checkbox