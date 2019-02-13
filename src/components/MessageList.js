import React, { Component } from 'react';
import '../styles/MessageList.css';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.messagesRef = this.props.firebase.database().ref('messages');
  }
//Need to figure out how to reference the rooms by their keys and change this code
  componentDidMount() {

    this.messagesRef.on('child_added', snapshot => {
     const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messaeges: this.state.messages.concat( message ) })
   });
  }
  
displayRoomName() {
  if(this.props.activeRoom){
    return this.props.activeRoom.name
  } else {
    return "Room title"
  }
}

  render() {
    return(
      <div id='messageList'>
      <h3>{this.displayRoomName()}</h3>
      </div>
    );
  }
}

export default MessageList;
