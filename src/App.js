import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';
import User from './components/User.js';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDJECp3CpM5yzRs7yKDXg9RCMacRwe6kfM",
    authDomain: "bloc-chat-b312c.firebaseapp.com",
    databaseURL: "https://bloc-chat-b312c.firebaseio.com",
    projectId: "bloc-chat-b312c",
    storageBucket: "bloc-chat-b312c.appspot.com",
    messagingSenderId: "279165312367"
  };
  firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeRoom : {},
      user : ''
    }

    this.setUser = this.setUser.bind(this);
  }

  setActiveRoom(room) {
    this.setState({activeRoom : room });
  }

  setUser(user) {
    this.setState({user: user});
  }

  render() {
    return (
      <div className="App">
        <User
          firebase={firebase}
          user={this.state.user}
          setUser={this.setUser.bind(this)}
        />
        <MessageList
          firebase={firebase}
          activeRoom={this.state.activeRoom}
          user={this.state.user}
          />
        <RoomList
          firebase={firebase}
          activeRoom={this.state.activeRoom}
          setActiveRoom={this.setActiveRoom.bind(this)}
          user={this.state.user}
          />
      </div>
    );
  }
}

export default App;
