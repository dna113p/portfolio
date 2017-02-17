import React, { Component } from 'react';
import './ContactForm.css'

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: 'waiting',
      email: null,
      subject: null,
      message: null
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    let state = this.state;
    if(!state.email || !state.subject || !state.message) {
      this.setState({form:'incomplete'});
      return;
    };
    let request = new Request('//formspree.io/djpelland@gmail.com', {
      method: 'POST',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8'
      }),
      body: JSON.stringify({
        message: this.state.message,
        _subject: this.state.subject,
        _replyto: this.state.email
      })
    });

    this.setState({form:'sending'});
    fetch(request).then((response) => {
        if(response.ok) {
          this.props.setMessage();
          return;
        }
        this.setState({form:'error'});
      });
  }

  status() {
    let content ={
      'waiting': null,
      'sending': <div className="spinner"></div>,
      'success': <div className="success">Message Sent!</div>,
      'error'  : <div className="error">Something went wrong!</div>,
      'incomplete': <div>Please complete all fields</div>
    }
    return content[this.state.form];
  }

  render() {
    let status = this.status();

    return (
      <div className="Contact-form">
        <input name="email" placeholder="Email Address" onChange={this.handleInput} required />
        <input name="subject" placeholder="Subject" onChange={this.handleInput} required />
        <textarea name="message" placeholder="Your message" onChange={this.handleInput} required />
        <div className="Contact-form-status">
          <button onClick={this.handleSubmit} >Send</button>
          {status}
        </div>
      </div>
    );
  }
}

export default ContactForm;
