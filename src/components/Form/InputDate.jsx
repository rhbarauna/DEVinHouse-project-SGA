import React from 'react';
import Input from './Input';
import PropTypes from 'prop-types';

const isSafari = !/\b(Chrome)\b/.test(navigator.userAgent);

class InputDate extends React.Component {  
  getFormattedValueFromProps() {    
    if(!this.props.value){
      return;
    }

    if(!isSafari) {
      return this.props.value;
    }

    let dateFromProp = this.props.value;
    const dateString = `${dateFromProp.replace(/-/g,'/')}`;
    const datePartsArr = dateString.split('/');
    return this._mountDateString(datePartsArr);
  }

  _mountDateString(dateArr) {
    if(dateArr.maxLength === 0) {
      return
    }

    let mountedDate = '';
    let day = dateArr[0];
    let month = dateArr[1];
    let year = dateArr[2];

    if(day.length > 2) {
      day = dateArr[2];
      year = dateArr[0];
    }

    if(day < 10 && day.length < 2) {
      day= `0${day}`;
    }
    
    if(month < 10 && month.length < 2) {
      month = `0${month}`;
    }

    if(year){
      mountedDate = `${year}`
    }
    
    if(month){
      mountedDate = `${month}/${mountedDate}`
    }

    if(day){
      mountedDate = `${day}/${mountedDate}`
    }
    
    return mountedDate;
  }

  _treatSafariInputValue(dateString) {
    if(!isSafari) {
      return dateString;
    }

    if(dateString[dateString.length-1] === '/') {
      return dateString.slice(0,[dateString.length-1]);
    }

    const cleanedString = `${dateString.replace(/[^\d]/g,'')}`;

    if(cleanedString.length < 2 ) {
      return cleanedString
    }

    let day = cleanedString.slice(0,2);
    let finalDateString = day;
  
    if(cleanedString.length === 2) {
      return `${finalDateString}/`;
    }

    let month = cleanedString.slice(2,4);
    
    finalDateString+=`/${month}`;

    if(cleanedString.length < 4) {
     return `${finalDateString}`;
    }

    if(cleanedString.length === 4) {
      return `${finalDateString}/`;
    }
    
    let year = cleanedString.slice(4);

    return `${finalDateString}/${year}`;
  }
  
  _isValidDay(day) {
    return day <= 31;
  }

  _isValidMonth(month) {
    return month <= 12;
  }

  _isValidDate(day, month, year)
  {
    // Check the ranges of month and year
    if(year < 1000 || year > 3000 || !this._isValidMonth(month)){
      return false;
    }

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)){
        monthLength[1] = 29;
    }

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
  };

  render() {
    const {id, name, label} = this.props;
    return (
      <Input 
        type="date"
        label={label}
        id={id}
        name={name}
        value={this.getFormattedValueFromProps()}
        transform={this._treatSafariInputValue.bind(this)}
        onChange={this.props.onChange}
        maxLength={10}
      />
    )
  }
}
InputDate.porpTypes = {
  id:       PropTypes.string.isRequired,
  name:     PropTypes.string.isRequired,
  label:    PropTypes.string,
  value:    PropTypes.string,
  onChange: PropTypes.func
}

export default InputDate;