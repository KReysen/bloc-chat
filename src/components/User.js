import React, { Component } from 'react';
import '../styles/User.css';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : '',
      isOpen: false,
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  event.preventDefault();
  this.setState({user: event.target.value});
}

handleSubmit(e) {
  e.preventDefault();
  
  this.props.updateUser(this.state.user);
}

signIn() {
  const provider = new this.props.firebase.auth.GoogleAuthProvider();
  this.props.firebase.auth().signInWithPopup( provider );
  this.setState({})
}

signOut() {
  this.props.firebase.auth().signOut();
}

// form onSubmit needed to make state change
  render () {
    return (
      <div>
        <section className="signInButtons">
          <button onClick={this.signIn.bind(this)}>Sign In
          </button>
          <button onClick={this.signOut.bind(this)}>Sign Out
          </button>
        </section>
        <section className="Set-user">
          <h2>{this.props.firebase.auth().currentUser && this.props.firebase.auth().currentUser.displayName}</h2>
          <h2>Set a username
          </h2>
          <p>This name will appear when you send messages</p>
          <form
            onSubmit={this.handleSubmit}
            >
            <input
              type="text"
              placeholder="enter username"
              value={this.state.user}
              onChange={this.handleChange}
              >
            </input>
            <br />
            <input
              type="submit"
              value="Set username"
              >
            </input>
          </form>
          </section>
        </div>
    )
  }
}

export default User;
