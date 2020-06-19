import React, { useState } from 'react';
import './styles.css';

import { ReactComponent as Delete } from '../../icons/close.svg';
import { ReactComponent as ArrowDown } from '../../icons/arrow-down.svg';
import { ReactComponent as ArrowUp } from '../../icons/up-arrow.svg';

const Table = props => {
  const [descending, setState] = useState(null);
  const tabledata = [
    {
      id: 1,
      fullName: 'Alfreds Futterkiste',
      email: 'asd@gmail.com',
      phone: '+37477783339',
      age: '21',
      gender: 'Male'
    },
    {
      id: 2,
      fullName: 'Alfreds Futterkiste',
      email: 'asd@gmail.com',
      phone: '+37477783339',
      age: '21',
      gender: 'Male'
    },
    {
      id: 3,
      fullName: 'Alfreds Futterkiste',
      email: 'asd@gmail.com',
      phone: '+37477783339',
      age: '21',
      gender: 'Male'
    },
    {
      id: 4,
      fullName: 'Alfreds Futterkiste',
      email: 'asd@gmail.com',
      phone: '+37477783339',
      age: '21',
      gender: 'Male'
    },
    {
      id: 5,
      fullName: 'Alfreds Futterkiste',
      email: 'asd@gmail.com',
      phone: '+37477783339',
      age: '21',
      gender: 'Male'
    }
  ];
  return (
    <div className='container-table'>
      <h2>Table</h2>
      <table>
        <tr>
          <th></th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone number</th>
          <th>
            Age
            <button
              onClick={() => {
                setState(!descending);
              }}
            >
              {descending ? <ArrowDown /> : <ArrowUp />}
            </button>
          </th>
          <th>Gender</th>
          <th></th>
        </tr>
        {tabledata.map(item => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.fullName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>
                <button
                  onClick={() => {
                    alert('Are you sure');
                  }}
                >
                  <Delete />
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
