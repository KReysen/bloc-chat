import React, { Component } from 'react';
import '../styles/User.css';

class User extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className='backdrop'>
        <div className='modal'>
        <h2>Sign in</h2>
        </div>
      </div>
    );
  }
}

export default User;
