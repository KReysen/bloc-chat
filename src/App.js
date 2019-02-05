import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';



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
  }

  render() {
    return (
      <div className="App">
        <h1>Bloc Chat</h1>
        <RoomList firebase={firebase} />
      </div>
    );
  }
}

export default App;
