import React, { useState } from 'react';
import { Button, InputGroup, Form, Col } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import 'react-phone-number-input/style.css';

import './styles.css';

const FormContainer = () => {
  const [value, setValue] = useState();
  const [focused, setFocused] = useState(false);

  return (
    <Form>
      <Form.Label>Name</Form.Label>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Control type='text' placeholder='First' />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Control type='text' placeholder='Last' />
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' />
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone</Form.Label>

        <PhoneInput
          value={value}
          onChange={setValue}
          onCountryChange={country => {
            console.log(country);
          }}
          style={{
            border: '1px solid #ced4da',
            boxShadow: focused && '0 0 0 0.2rem rgba(0,123,255,.25)',
            borderRadius: '.25rem',
            height: 40,
            outlineColor: 'blue'
          }}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Birth Date</Form.Label>
        <Form.Control type='text' />
      </Form.Group>
      <Form.Group>
        <Form.Label>Gender</Form.Label>
        <Form.Check type='radio' label='Male' name='radio' />
        <Form.Check type='radio' label='Female' name='radio' />
      </Form.Group>
      <Button className='submit-button' type='Submit'>
        Submit
      </Button>
    </Form>
  );
};

export default FormContainer;
