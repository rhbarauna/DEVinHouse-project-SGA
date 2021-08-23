import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';

class Filter extends React.Component {
  _filterPredicate(filter) {
    return op => {
      const value = `${op.value}`.toLowerCase();
      const label = `${op.label}`.toLowerCase();
      return value.includes(filter) || label.includes(filter);
    };
  }

  applyFilter(e) {
    const filter = e.value.trim().toLowerCase();
    let filtered = this.props.options;
    
    if(filter) {
      filtered = this.props.options.filter(this._filterPredicate(filter));
    }

    this.props.onFilter(filtered);
  }

  render() {
    const {id, name} = this.props;
    return <InputText id={id} name={name} onChange={this.applyFilter.bind(this)} />
  }
}

Filter.propTypes = {
  id:       PropTypes.string.isRequired,
  name:     PropTypes.string.isRequired,
  options:  PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
}

export  default Filter