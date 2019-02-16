import React, { Component } from 'react';
import '../styles/User.css';

class User extends Component {

signIn() {
  debugger
  const provider = new this.props.firebase.auth.GoogleAuthProvider();
  this.props.firebase.auth().signInWithPopup( provider );
}

signOut() {
  this.props.firebase.auth().signOut();
}

// don't know what actually needs to be rendered here!! 
  render () {
    return (
      <div className='backdrop'>
        <div className='modal'>
          <form>
            <input
              type="text"
              placeholder="username"
              >
            </input>
            <br />
            <input
              type="submit"
              value="Sign in"
              onClick={this.signIn()}
              >
            </input>
            <input
              type="submit"
              value="Sign out"
              onClick={this.signOut()}
              >
            </input>
          </form>
        </div>
      </div>
    );
  }
}

export default User;
