import React, { Component } from 'react';
import './Refs.css';

class Refs extends Component {

onKeyUp = (target, e) => {
    if (e.keyCode === 13) {
      console.log(target)
      switch (target) {
    case 'firstName':
          this.lastName.focus();
          break;
    case 'lastName':
          this.address.focus();
          break;
    case 'address':
          this.submit.focus();
          break;
    default:
          this.submit.focus();
      }
    }
}
  onSubmit = () => {
    alert(` ${this.firstName.value} your Response is Submited!!!`);
}

  render() {
    return (
      <div className="Refs">
        <div>
          <span>First Name: </span>
          <input
            type="text"
            onKeyUp={this.onKeyUp.bind(this, 'firstName')}
            ref={(input) => { this.firstName = input; }} />
        </div>
        <div>
          <span>Last Name: </span>
          <input
            type="text"
            onKeyUp={this.onKeyUp.bind(this, 'lastName')}
            ref={(input) => { this.lastName = input; }} />
        </div>
        <div>
          <span>Address: </span>
          <input
            type="text"
            onKeyUp={this.onKeyUp.bind(this, 'address')}
            ref={(input) => { this.address = input; }} />
        </div>
        <div>
        <button
          type="submit"
          value="Submit"
          onClick={this.onSubmit}
          ref={(button) => { this.submit = button; }}>Submit</button>
         </div>
      </div>
    );
  }
}

export default Refs;