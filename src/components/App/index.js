import React, { useState } from 'react';
import Form from '../Form';
import './styles.css';
import Table from '../Table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: [],
      ascending: true
    };
  }

  handleSubmit = user => {
    let users = this.state.usersList;
    users.push(user);
    users.sort((a, b) => a.name.localeCompare(b.name));
    if (this.state.ascending) {
      users.sort((a, b) => a.age - b.age);
    } else {
      users.sort((a, b) => a.age - b.age).reverse();
    }
    this.setState({ usersList: users });
  };

  deleteUser = user => {
    let users = this.state.usersList;
    users = users.filter(item => item.name !== user.name);
    users.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ usersList: users });
  };

  changeOrder = () => {
    this.setState({ ascending: !this.state.ascending }, () => {
      let users = this.state.usersList;
      if (this.state.ascending) {
        users.sort((a, b) => a.age - b.age);
      } else {
        users.sort((a, b) => a.age - b.age).reverse();
      }
      this.setState({ usersList: users });
    });
  };

  render() {
    return (
      <div className='app'>
        <div className='container-form'>
          <h2>Form</h2>
          <h4>Registration Form</h4>
          <Form onSubmit={this.handleSubmit} />
        </div>
        <Table
          usersList={this.state.usersList}
          deleteUser={user => this.deleteUser(user)}
          ascending={this.state.ascending}
          changeOrder={() => this.changeOrder()}
        />
      </div>
    );
  }
}

export default App;
