import React, { Component } from 'react';
import '../styles/User.css';

class User extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
componentDidMount() {
  this.props.firebase.auth().onAuthStateChanged( user => {
  this.props.setUser(user);
});
}

handleChange(event) {
  event.preventDefault();
  this.setState({user: event.target.value});
}

handleSubmit(e) {
  e.preventDefault();
  this.props.setUser(this.state.user);
  this.setState({})
}

signIn() {
  const provider = new this.props.firebase.auth.GoogleAuthProvider();
  this.props.firebase.auth().signInWithPopup( provider ).then((result) => {
    var user = result.user;
    this.props.setUser(user);
  });
  // this.setState({})
}

signOut() {
  this.props.firebase.auth().signOut().then(() => {
    this.props.setUser(null);
  });
}

getDisplayName() {
  if (this.props.firebase.auth().currentUser && this.props.firebase.auth().currentUser.displayName) {
    return <h2>Hello, {this.props.user.displayName}</h2>
  } else {
    return <h2>Hello, Guest</h2>
  }
}


  render () {
    return (
      <div id="user">
        <section className="signInButtons">
          <button onClick={this.signIn.bind(this)}>Sign In
          </button>
          <button onClick={this.signOut.bind(this)}>Sign Out
          </button>
          {this.getDisplayName()}
        </section>
        <section className="Set-user">
          <h3>Set a username
          </h3>
          <p>This name will appear when you send messages</p>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="enter username"
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
