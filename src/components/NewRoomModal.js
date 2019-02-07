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
    this.setState({roomName: event.target.value});
  }

  handleSubmit(event) {
   event.preventDefault();

   this.props.roomsRef.push({
     name: this.state.roomName,
   });
  }

  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop">
        <div className="modal">
          <h2>Create a new room</h2>
          {/* <p>Enter a room name</p> */}
          <form onSubmit={this.handleSubmit}>
            <label>Enter a room name
            <br/>
              <input
                type="text"
                value={this.state.roomName}
                onChange={this.handleChange}
              ></input>
            </label>
            <input type="submit" value="Create room"></input>
          </form>
          <button onClick={this.props.onClose}>Cancel</button>
          {/*  <button>Create room</button> */}
        </div>
      </div>
    );
  }
}

export default NewRoomModal;
