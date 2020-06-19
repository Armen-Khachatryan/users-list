import React, { useState, useEffect } from 'react';
import './styles.css';

import { ReactComponent as Delete } from '../../icons/close.svg';
import { ReactComponent as ArrowDown } from '../../icons/arrow-down.svg';
import { ReactComponent as ArrowUp } from '../../icons/up-arrow.svg';

const Table = props => {
  const deleteItem = item => {
    props.deleteUser(item);
  };

  return (
    <div className='container-table'>
      <h2>Table</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>
              Age
              <button
                onClick={() => {
                  props.changeOrder();
                }}
              >
                {props.ascending ? <ArrowUp /> : <ArrowDown />}
              </button>
            </th>
            <th>Gender</th>
            <th></th>
          </tr>
        </tbody>
        {props.usersList.map((item, index) => {
          return (
            <tbody key={index + 1}>
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          'Are you sure you want to delete this user?'
                        )
                      ) {
                        deleteItem(item);
                      }
                    }}
                  >
                    <Delete />
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
