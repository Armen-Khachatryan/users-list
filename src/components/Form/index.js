import React, { useState } from 'react';
import { Button, InputGroup, Form, Col } from 'react-bootstrap';
import PhoneInput, { getCountryCallingCode } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import './styles.css';

const FormContainer = () => {
  const [value, setValue] = useState('+374');
  const [focused, setFocused] = useState(false);
  const [countryCode, setCountryCode] = useState('+374');

  return (
    <Form>
      <Form.Label>Name</Form.Label>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Control
            className='input'
            required
            type='text'
            placeholder='First'
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Control
            className='input'
            required
            type='text'
            placeholder='Last'
          />
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control className='input' required type='email' />
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone</Form.Label>

        <PhoneInput
          required
          value={value}
          international
          onChange={setValue}
          defaultCountry='AM'
          style={{
            border: '1px solid #ced4da',
            boxShadow: focused && '0 0 0 0.2rem rgba(0,123,255,.25)',
            borderRadius: '.25rem',
            height: 30,
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
        <Form.Control
          className='input'
          required
          type='date'
          // onChange={event => {}}
          data-date-format='MM DD YYYY'
          placeholder='mm / dd / yyyy'
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Gender</Form.Label>
        <Form.Check required type='radio' label='Male' name='radio' />
        <Form.Check required type='radio' label='Female' name='radio' />
      </Form.Group>
      <Button className='submit-button input' type='Submit'>
        Submit
      </Button>
    </Form>
  );
};

export default FormContainer;
