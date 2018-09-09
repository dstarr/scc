import React from 'react';
import PropTypes from 'prop-types'
import {FormGroup} from "react-bootstrap";
import Person from "./Person";

const People = (props) => {

  let people = props.people.map((person, index) => (
    <div key={index}>

      <Person onDeletePerson={props.onDeletePerson}
              id={person.id}
              name={person.name}
      />
    </div>
  ));

  return (
    <div>
      <form>
        <FormGroup>
          {people}
        </FormGroup>
      </form>
    </div>
  );
};

People.propTypes = {
  onDeletePerson: PropTypes.func.isRequired,
  people: PropTypes.array.isRequired
};

export default People;