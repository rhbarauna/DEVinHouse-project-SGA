import React from 'react'
import PropTypes from 'prop-types'

class InputTextarea extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: props.value || ''
    }
  }

  handleValueChange(event) {
    let value = event.target.value

    this.setState({value});

    if(!this.props.onChange) {
      return;
    }

    this.props.onChange({
      name: event.target.name,
      value: event.target.value,
    });
  }

  render(){
    const {onChange, ...rest} = this.props;
    return (
      <>
        {rest.label && <label htmlFor={rest.id}>{rest.label}</label> }
        <textarea {...rest} value={this.state.value} onChange={this.handleValueChange.bind(this)}/>
      </>
    );
  }
}

InputTextarea.propTypes = {
  id:         PropTypes.string.isRequired,
  name:       PropTypes.string.isRequired,
  label:      PropTypes.string,
}

export default InputTextarea;