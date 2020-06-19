import React, { useState } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import './styles.css';

const FormContainer = props => {
  const [phoneNumber, setPhoneNumber] = useState('+374');
  const [focused, setFocused] = useState(false);

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    gender: ''
  });

  const handleInput = event => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const getAge = dateString => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = event => {
    event.preventDefault();
    let parsedUser = {
      name: state.firstName + ' ' + state.lastName,
      email: state.email,
      age: getAge(state.birthDate),
      gender: state.gender
    };
    props.onSubmit({ ...parsedUser, phoneNumber });
    setPhoneNumber('+374');
    setState({
      firstName: '',
      lastName: '',
      email: '',
      birthDate: '',
      gender: ''
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Name</Form.Label>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Control
            className='input'
            required
            type='text'
            name='firstName'
            value={state.firstName}
            placeholder='First'
            onChange={event => handleInput(event)}
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Control
            className='input'
            required
            type='text'
            name='lastName'
            value={state.lastName}
            placeholder='Last'
            onChange={event => handleInput(event)}
          />
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          className='input'
          name='email'
          value={state.email}
          required
          type='email'
          onChange={event => handleInput(event)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone</Form.Label>

        <PhoneInput
          required
          value={phoneNumber}
          international
          onChange={setPhoneNumber}
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
          name='birthDate'
          value={state.birthDate}
          type='date'
          // onChange={event => {}}
          data-date-format='MM DD YYYY'
          placeholder='mm / dd / yyyy'
          onChange={event => handleInput(event)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Gender</Form.Label>
        <Form.Check
          custom
          type={'radio'}
          id='male'
          label='Male'
          checked={state.gender === 'Male'}
          name='gender'
          value={state.gender}
          onChange={() => {
            setState(prevState => ({ ...prevState, gender: 'Male' }));
          }}
        />
        <Form.Check
          custom
          type={'radio'}
          id='female'
          label='Female'
          name='gender'
          checked={state.gender === 'Female'}
          value={state.gender}
          onChange={() => {
            setState(prevState => ({ ...prevState, gender: 'Female' }));
          }}
        />
      </Form.Group>
      <Button className='submit-button input' type='Submit'>
        Submit
      </Button>
    </Form>
  );
};

export default FormContainer;
