import React, { Component } from 'react';
import NewRoomModal from './NewRoomModal.js';

 class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      isOpen: false,
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
   this.roomsRef.on('child_added', snapshot => {
     const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) })
   });
 }

 toggleModal = () => {
  this.setState({
    isOpen: !this.state.isOpen
  });
}

 createRoom(newRoomName) {
   this.roomsRef.push({
     name: newRoomName
   });
 }

  render () {
  return (
    <section id="roomList">
    <button onClick={this.toggleModal}>New Room
    </button>
    <NewRoomModal
      show={this.state.isOpen}
      onClose={this.toggleModal}
      roomsRef={this.roomsRef}
    />
    {this.state.rooms.map( room =>
      <li key={room.key}>{ room.name }</li>
    )}
    </section>

    );
  }
}

export default RoomList;
