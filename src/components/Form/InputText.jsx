import React from 'react'
import Input from './Input';

class InputText extends React.Component {
  render(){
    return <Input type="text" {...this.props} />
  }
}

export default InputText;