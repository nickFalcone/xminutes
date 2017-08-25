import React from 'react';
import {
  ControlLabel,
  FormControl,
  FormGroup,
} from 'react-bootstrap';
import moment from 'moment';



const createReactClass = require('create-react-class');

const FormComponent = createReactClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  getValidationState() {
    const time = this.state.value;

    console.log("Current time: " + moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));

    if (time !== '') {
      // think i need clearTimeout() somewhere...
      console.log("Change detected - starting timer for " + time + " minutes");
      setTimeout( () => {
        alert("Hey there, it's been " + time + " minutes");
        console.log("Timer complete")
      }, time * 60000);
    }
  },

  handleChange(e) {
    this.setState({ value: e.target.value })
  },

  render() {
    return (
      <div>
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
        </form >
      </div>
    );
  }
});

export default FormComponent;