import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, FormControl} from "react-bootstrap";

class AddPerson extends Component {

  constructor(props) {
    super(props);
    this.state = {name: ''};
  }

  render() {
    return (
        <form>
          <FormControl type="text"
                       value={this.state.name}
                       placeholder="New Person"
                       onChange={this.handleChange}
                       className='formControl'
          />
          <Button bsStyle='danger'
                  className='formButton'
                  type='submit'
                  onClick={this.handleAdd}
          >Add</Button>
        </form>
    );
  }

  handleAdd = (e) => {

    e.preventDefault();

    if (this.state.name === '')
      return;

    this.props.onAddPerson(this.state.name);

    this.setState({
      name: ''
    });
  };

  handleChange = (e) => {

    this.setState({
      name: e.target.value
    });

  };

}

AddPerson.propTypes = {
  onAddPerson: PropTypes.func.isRequired
};

export default AddPerson;