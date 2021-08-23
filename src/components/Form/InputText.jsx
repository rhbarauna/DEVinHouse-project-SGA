import React from 'react'
import Input from './Input';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render(){
    return <Input type="text" {...this.props} />
  }
}

InputText.propTypes = {
  id:         PropTypes.string.isRequired,
  name:       PropTypes.string.isRequired,
  label:      PropTypes.string,
  onChange:   PropTypes.func
}

export default InputText;