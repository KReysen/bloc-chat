import React, { Component } from 'react';
import '../styles/MessageList.css';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: ''
    };
    this.messagesRef = this.props.firebase.database().ref('messages');
    this.createNewMessage = this.createNewMessage.bind(this);
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
     const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })
   });
  }

createNewMessage(newMessage) {
  debugger
  const newmsg = {
    content: newMessage,
    roomId: this.props.activeRoom.key,
    sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
    username: this.props.user.displayName,
  }
    this.messagesRef.push(newmsg)
    debugger
    this.setState({ newMessage: ''});
}

handleChange(e) {
  this.setState({ newMessage: e.target.value})
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
        <section id='messageDisplay'>
          <h3 id="roomName">{this.displayRoomName()}</h3>
          <ul>
          {
            this.getCurrentMessages().map((message) => {
              return (
                <li key={message.sentAt}>{message.content}</li>
              )
            })
          }
          </ul>
        </section>
        <section id='newMessage'>
          <form

            onSubmit={ (e) => this.createNewMessage(this.state.newMessage) }
          >
            <input
              onChange ={ (e) => this.handleChange(e) }
              type="text"
              placeholder="Write your message here..."
              value={this.state.newMessage}
              >
            </input>
            <input

              type="submit"
              value="Send">
            </input>
          </form>
        </section>
      </div>
    );
  }
}

export default MessageList;
