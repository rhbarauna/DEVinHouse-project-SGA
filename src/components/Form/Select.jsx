import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';

class Select extends React.Component {
  
  constructor(props) {
    super(props)
    this.fullOptions = props.options ?? []

    this.state = {
      value: props.value,
      options: this.fullOptions
    }
  }
  
  handleValueChange(event) {
    this.setState({value: event.target.value});
    
    if(!this.props.onChange){
      return
    }
    
    this.props.onChange({
      name: event.target.name,
      value: event.target.value
    });
  }

  applyFilter(e) {
    if(this.state.options.length === e.length){
      return;
    }
    this.setState({options: e})
  }
  
  render() {
    const {id, name, label} = this.props;
    return (
      <>
        <label htmlFor={id}>{label} </label>
        {
          this.props.filtered &&
          <Filter
            id={`${name}FilterID`}
            name={`${name}FilterID`}
            options={this.props.options} 
            onFilter={this.applyFilter.bind(this)}
          />
        }
        <select id={id} name={name} value={this.state.value} onChange={this.handleValueChange.bind(this)}>
          {this.state.options.map((opt, idx) => <option key={idx} value={opt.value}>{opt.label || opt.name || opt.value || opt.id}</option>)}
        </select>
      </>
      )
  }
}

Select.propTypes = {
  id:       PropTypes.string.isRequired,
  name:     PropTypes.string.isRequired,
  filtered:  PropTypes.bool,
  option:   PropTypes.array,
  label:    PropTypes.string,
}

export  default Select