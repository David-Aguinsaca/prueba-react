import React from 'react';
import Form from 'react-bootstrap/Form';

function InputPersonalized(props) {
  return (
    <Form.Control
      placeholder="Gif Url"
      value={props.value}
      name={props.name}
      onChange={props.handleChange}
    />
  );

};

export default InputPersonalized;