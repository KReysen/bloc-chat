import React, { Component } from 'react';
import '../styles/MessageList.css';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      messages: []
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }
//Need to figure out how to reference the rooms by their keys and change this code
  componentDidMount() {
   this.roomsRef.on('child_added', snapshot => {
     const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) })
   });
  }

  render() {
    return(
      <div id='messageList'>
      <h3>Room name</h3>
      </div>
    );
  }
}

export default MessageList;
