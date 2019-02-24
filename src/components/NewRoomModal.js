import React from 'react';
import '../styles/NewRoomModal.css';

class NewRoomModal extends React.Component {
  constructor(props) {
   super(props);
   this.state = {roomName: ''};

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({roomName: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
   this.props.roomsRef.push({
     name: this.state.roomName,
   });
   this.setState({
    roomName: ''
   });
   this.props.onClose();
  }

  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop">
        <div className="modal">
          <h2>Create a new room</h2>
          <form
            onSubmit={this.handleSubmit}

            >
            <label>Enter a room name
            <br/>
              <input
                type="text"
                name="newRoomName"
                placeholder="New Room"
                value={this.state.roomName}
                onChange={this.handleChange}>
              </input>
            </label>
            <input
              type="submit"
              value="Create room"
              >
            </input>

          </form>
          <button onClick={this.props.onClose}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default NewRoomModal;
