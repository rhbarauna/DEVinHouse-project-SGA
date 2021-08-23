import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: props.value || ''
    }
  }

  handleValueChange(event) {
    let value = event.target.value

    if(this.props.transform) {
      value = this.props.transform(value);
    }

    this.setState({value});

    if(!this.props.onChange) {
      return;
    }

    this.props.onChange({
      name: event.target.name,
      value: event.target.value,
    });
  }

  render() {
    const {onChange, transform, ...rest} = this.props;
    return (
      <>
        {rest.label && <label htmlFor={rest.id}>{rest.label}</label> }
        <input {...rest} value={this.state.value} onChange={this.handleValueChange.bind(this)}/>
      </>
    );
  }
}

Input.propTypes = {
  id:         PropTypes.string.isRequired,
  name:       PropTypes.string.isRequired,
  type:       PropTypes.oneOf(['text', 'date', 'phone', 'email']).isRequired,
  label:      PropTypes.string,
  transform:  PropTypes.func,
}

export default Input;