import React from 'react';
import PropTypes from 'prop-types';
import {FormControl} from "react-bootstrap";
import Button from "react-bootstrap/es/Button";

const Person = (props) => {

  return (
    <div>
      <FormControl value={props.name}
                   type='input'
                   className='formControl'
                   readOnly
      />
      <Button bsStyle='primary'
              className='formButton'
              onClick={() => props.onDeletePerson(props.id)}>Delete</Button>
    </div>
  );
};

Person.propTypes = {
  onDeletePerson: PropTypes.func.isRequired
};

export default Person;