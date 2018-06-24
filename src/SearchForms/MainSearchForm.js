import React from 'react'
import {
    FormGroup,
    FormControl,
    ControlLabel,
    HelpBlock,
    Button
} from 'react-bootstrap'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default class SearchForm extends React.Component {
  constructor() {
    super()
    this.state = {
      species: 'dog',
      size: 'M',
      age: 'Young',
      zip:''
    },
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e, category) {
    this.setState({ [category]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { species, size, age, zip } = this.state
    let reqBody = {
      species,
      size,
      age,
      zip
    }
    this.props.handlePetfinderRequest(reqBody)
  }

  getValidationState() {
    const length = this.state.zip.length;
    if (length === 5) return 'success';
    else if (length > 0 || length > 6) return 'error';
    return null;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="species_select">
          <ControlLabel>Animal Select</ControlLabel>
          <FormControl
          onChange={(e) => this.handleChange(e, 'species')}
          componentClass='select'
          placeholder="I'm looking for a..."
          defaultValue='dog'
          >
            <option value='cat'>Cat</option>
            <option value='dog'>Dog</option>
            <option value='horse'>Horse</option>
            <option value='bird'>Bird</option>
          </FormControl>
        </FormGroup>
        <FormGroup controlId="age_select">
          <ControlLabel>Select a Size</ControlLabel>
          <FormControl
          onChange={(e) => this.handleChange(e, 'age')}
          componentClass='select'
          placeholder="Around the age of..."
          defaultValue='Young'
          >
            <option value='Baby'>Baby</option>
            <option value='Young'>Young</option>
            <option value='Adult'>Adult</option>
            <option value='Senior'>Senior</option>
          </FormControl>
        </FormGroup>
        <FormGroup controlId="size_select">
          <ControlLabel>Select a Size</ControlLabel>
          <FormControl
          onChange={(e) => this.handleChange(e, 'size')}
          componentClass='select'
          placeholder="and a size around..."
          defaultValue='medium'
          >
            <option value='S'>Small</option>
            <option value='M'>Medium</option>
            <option value='L'>Large</option>
          </FormControl>
        </FormGroup>
        <FormGroup
        controlId="zip_select"
        validationState={this.getValidationState()}
        >
          <ControlLabel>Near...</ControlLabel>
          <FormControl
            type="number"
            value={this.state.zip}
            placeholder="Enter zipcode"
            onChange={(e) => this.handleChange(e, 'zip')}
          />
          <FormControl.Feedback />
          <HelpBlock>Zipcode must be 5 digits long</HelpBlock>
        </FormGroup>
        <Button
        type='submit'
        bsSize='large'
        bsStyle='primary'
        disabled={this.state.zip.length !== 5}>
          Find My Pet
        </Button>
      </form>
    )
  }  
}