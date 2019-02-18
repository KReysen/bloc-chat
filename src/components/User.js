import React, { Component } from 'react';
import '../styles/User.css';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
}

// showModal() {
// const modal =
//     <div className='backdrop'>
//       <div className='modal'>
//         <h2>Set a userName
//         </h2>
//         <p>This name will appear when you send messages</p>
//         <form>
//           <input
//             type="text"
//             placeholder="enter username"
//             >
//           </input>
//           <br />
//           <input
//             type="submit"
//             value="Set username"
//             >
//           </input>
//         </form>
//       </div>
//     </div>
// }

signIn() {
  const provider = new this.props.firebase.auth.GoogleAuthProvider();
  this.props.firebase.auth().signInWithPopup( provider );
  const modal =
      <div className='backdrop'>
        <div className='modal'>
          <h2>Set a userName
          </h2>
          <p>This name will appear when you send messages</p>
          <form>
            <input
              type="text"
              placeholder="enter username"
              >
            </input>
            <br />
            <input
              type="submit"
              value="Set username"
              >
            </input>
          </form>
        </div>
      </div>
  return modal;
}

signOut() {
  this.props.firebase.auth().signOut();
}



onClick() {
  this.signIn();
  this.showModal();
}
// don't know what actually needs to be rendered here!!
  render () {
    return (
      <div className="signInButtons">
      <button onClick={this.signIn.bind(this)}>Sign In
      </button>
      <button onClick={this.signOut.bind(this)}>Sign Out
      </button>
      </div>
    )
  }
}

export default User;
