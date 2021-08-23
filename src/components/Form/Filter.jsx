import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';

class Filter extends React.Component {
  _filterPredicate(filter) {
    return op => {
      return this.props.propsToFilter.some(
        prop => `${op[prop]}`.toLowerCase().includes(filter)
      );
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
    const {id, name, placeholder} = this.props;
    return <InputText id={id} name={name} placeholder={placeholder} onChange={this.applyFilter.bind(this)} />
  }
}

Filter.propTypes = {
  id:       PropTypes.string.isRequired,
  name:     PropTypes.string.isRequired,
  options:  PropTypes.array.isRequired,
  propsToFilter: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
}

export  default Filter