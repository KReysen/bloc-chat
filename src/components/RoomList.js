import React, { Component } from 'react';
import NewRoomModal from './NewRoomModal.js';
import '../styles/RoomList.css';

 class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      isOpen: false,
      value: ''
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

 resetForm = () => {
   this.setState({
    value: ''
   })
 }

 toggleModal = () => {
  this.resetForm();
  this.setState({
    isOpen: !this.state.isOpen

  });

}

  render () {
  return (
    <section id="roomList">
    <h1>Bloc Chat</h1>
    <button onClick={this.toggleModal}>New Room
    </button>
    <NewRoomModal
      show={this.state.isOpen}
      onClose={this.toggleModal}
      roomsRef={this.roomsRef}
      value={this.state.value}

    />
    {this.state.rooms.map( room =>
      <li key={room.key}>{ room.name }</li>
    )}
    </section>

    );
  }
}

export default RoomList;
