import React, { Component } from 'react';
import '../styles/User.css';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidMount() {
  this.props.firebase.auth().onAuthStateChanged( user => {
  this.props.setUser(user);
});
}

// Functions for handling modal to set username, which I'm not sure is even
// necessary, as username is being handled by firebase
// handleChange(event) {
//   event.preventDefault();
//   this.setState({user: event.target.value});
// }
//

// handleSubmit(e) {
//   e.preventDefault();
//   this.props.setUser(this.state.user);
//   this.setState({})
// }

signIn() {
  const provider = new this.props.firebase.auth.GoogleAuthProvider();
  this.props.firebase.auth().signInWithPopup( provider ).then((result) => {
    var user = result.user;
    this.props.setUser(user);
  });
}

signOut() {
  this.props.firebase.auth().signOut().then(() => {
    this.props.setUser(null);
  });
}

getDisplayName() {
  if (this.props.firebase.auth().currentUser && this.props.firebase.auth().currentUser.displayName) {
    return <h3>Hello, {this.props.user.displayName}</h3>
  } else {
    return <h3>Hello, Guest! Sign in to post messages!</h3>
  }
}

  render () {
    // const userNameModal =
    // <section className="Set-user">
    //   <h3>Set a username
    //   </h3>
    //   <p>This name will appear when you send messages</p>
    //   <form onSubmit={this.handleSubmit}>
    //     <input
    //       type="text"
    //       placeholder="enter username"
    //       onChange={this.handleChange}
    //       >
    //     </input>
    //     <br />
    //     <input
    //       type="submit"
    //       value="Set username"
    //       >
    //     </input>
    //   </form>
    //   </section>;
    return (
      <div id="user">
        <section className="greetHeader">
          {this.getDisplayName()}
          <p  id="signInText" onClick={ this.props.user ? this.signOut.bind(this) : this.signIn.bind(this) }>
          { this.props.user ? 'Not you? Sign Out' : 'Sign In' }
          </p>
        </section>
        </div>
    )
  }
}

export default User;
