import React from 'react';
import { 
          ControlLabel, 
          FormControl, 
          FormGroup, 
        } from 'react-bootstrap';
        


const createReactClass = require('create-react-class');

const FormComponent = createReactClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  getValidationState() {
    const time = this.state.value;
    console.log(time);
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },  

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel className="prompt">I have </ControlLabel>
          <FormControl
            type="number"
            value={this.state.value}
            placeholder="x"
            maxLength={2}
            onChange={this.handleChange}
          />
          
          <ControlLabel className="prompt"> minutes.</ControlLabel>
          
        </FormGroup>
      </form>
    );
  }
});

export default FormComponent;