import React from 'react';
import PropTypes from 'prop-types';

class RadioButton extends React.Component {
  handleValueChange(event) {
    if(!this.props.onChange){
      return
    }
    
    this.props.onChange({
      name: event.target.name,
      value: event.target.id
    });
  }
  render(){
    const {id, name, label} = this.props;
    return (
      <>
        <input id={id} name={name} type="radio" onChange={this.handleValueChange.bind(this)}/>
        <label htmlFor={id}>{label}</label>
      </>
    );
  }
}

RadioButton.propTypes = {
  id:     PropTypes.string.isRequired,
  name:   PropTypes.string.isRequired,
  label:  PropTypes.string,
}

export  default RadioButton