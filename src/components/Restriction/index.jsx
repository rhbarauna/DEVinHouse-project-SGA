import React from 'react';
import { Checkbox, InputTextarea } from '../Form';

class Restriction extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      hasFoodRestriction: this.props.hasFoodRestriction || false,
      foodRestrictionDescription: this.props.foodRestrictionDescription || '',
    }
  }

  handleChange(e) {
    this.setState({
      [e.name]: e.value
    })

    if(!this.props.onChange){
      return;
    }

    this.props.onChange(this.state)
  }

  render(){
    return (
      <>
        <div>
          <Checkbox id="food_restriction" name="hasFoodRestriction" label="Possui restrição alimentar" 
          checked={this.state.hasFoodRestriction}
          onChange={this.handleChange.bind(this)}/>
        {
        this.state.hasFoodRestriction &&
          <InputTextarea id="food_restriction_description" name="foodRestrictionDescription" onChange={this.handleChange.bind(this)} />
        }
        </div>
      </>
    )
  }
}

export default Restriction;