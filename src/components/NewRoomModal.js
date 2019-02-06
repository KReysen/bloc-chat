import React from 'react';
import '../styles/NewRoomModal.css';

class NewRoomModal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }
    
    return (
      <div className="backdrop">
        <div className="modal">
          <h2>Create a new room</h2>
          {/* <p>Enter a room name</p> */}
          <form>
            <label>Enter a room name
            <br/>
              <input type="text"></input>
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
