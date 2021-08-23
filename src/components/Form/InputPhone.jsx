import React from 'react'
import Input from './Input';

class InputPhone extends React.Component {

  formattedProps(){
    if(!this.props.value) {
      return "";
    }

    return this.formatPhone(this.props.value)
  }

  formatPhone(e) {
    let digits = e.replace(/[^\d]/g,'')
    let ddd = digits.slice(0,2);
    
    if(e.length < this.props.length) {
      return e.slice(0,[e.length-1]);
    }

    if(digits.length === 0) {
      return '';
    }

    if(digits.length <= 2) {
      return `(${ddd}`
    }

    let prefix = digits.slice(2,6);
    if(digits.length <= 6) {
      return `(${ddd}) ${prefix}`
    }

    let suffix = digits.slice(6,10);
    if(digits.length <= 10) {
      return `(${ddd}) ${prefix}-${suffix}`
    }
    
    prefix = digits.slice(2,7);
    suffix = digits.slice(7,11);
    return `(${ddd}) ${prefix}-${suffix}`
  }

  render(){
    const {id, name, label} = this.props;
    return (
      <Input 
        type="phone"
        label={label}
        id={id}
        name={name}
        value={this.formattedProps()}
        transform={this.formatPhone.bind(this)}
        onChange={this.props.onChange}
        maxLength={15}
      />
    )
  }
}

export default InputPhone;