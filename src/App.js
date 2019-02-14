import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';


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
    }
  }

  setActiveRoom(room) {
    this.setState({activeRoom : room });
  }

  render() {
    return (
      <div className="App">
        <RoomList
          firebase={firebase}
          activeRoom={this.state.activeRoom}
          setActiveRoom={this.setActiveRoom.bind(this)}
          />
        <MessageList
          firebase={firebase}
          activeRoom={this.state.activeRoom}
          />
      </div>
    );
  }
}

export default App;
