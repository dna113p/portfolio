import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import ContactForm from './ContactForm';
import classNames from 'classnames';
import './ContactDrawer.css'

class ContactDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clipboarded: false,
      messageSent: false
    };
    this.messageSent = this.messageSent.bind(this);
  }

  messageSent() {
    this.setState({messageSent:true});
    setTimeout(this.props.closeDrawer , 1000);
  }

  render() {
    let drawerClass = classNames({
      "Contact-drawer": true,
      "Contact-drawer-closed": !this.props.open
    });

    return (
      <div className={drawerClass}>
        {this.state.messageSent ?
            <h1 className="Contact-sent" >Message Sent!</h1>:
            <ContactForm setMessage={this.messageSent}/>}
        <h1 className="seperator">-or-</h1>
        <CopyToClipboard text="djpelland@gmail" onCopy={()=>this.setState({clipboarded: true})}>
          <div className="to-clipboard">
          {this.state.clipboarded ?
              <h2><i className="fa fa-check copycheck"></i></h2> :
              <p>Click to copy to clipboard</p>}
              <h1>djpelland@gmail.com</h1>
          </div>
        </CopyToClipboard>
      </div>
    );
}
}

export default ContactDrawer;
