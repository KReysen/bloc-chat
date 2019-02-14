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
      this.setState({ messages: this.state.messages.concat( message ) })
   });
  }

displayRoomName() {
  if(this.props.activeRoom.key){
    return this.props.activeRoom.name
  } else {
    return "Bloc Chat"
  }
}

getCurrentMessages() {
  return this.state.messages.filter((message) => {
    return this.props.activeRoom.key === message.roomId;
  });
}

  render() {
    return(
      <div id='messageList'>
        <h3>{this.displayRoomName()}</h3>
        <ul>
        {
          this.getCurrentMessages().map((message) => {
            return (
              <li key={message.sentAt}>{message.content}</li>
            )
          })
        }
        </ul>
      </div>
    );
  }
}

export default MessageList;
