import { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Notification from '../Notification';
import '../Notification/Notification.css';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    errorMessage: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { onAddContact, items } = this.props;

    if (!name) return this.showNotification('Please enter contact name');
    if (!number) return this.showNotification('Please enter contact number');
    if (items.some(item => item.name === name)) {
      this.setState({ name: '', number: '' });
      return this.showNotification(`${name} is already in contacts`);
    }

    onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };

  showNotification = errorMessage => {
    this.setState({ errorMessage });
  };

  render() {
    const { name, number, errorMessage } = this.state;
    const isShow = errorMessage ? true : false; // Консоль ругается, еслт CSSTransition in !== boolean
    return (
      <>
        <div className="Notification-wrapper">
          <CSSTransition in={isShow} classNames="Notification" timeout={250} unmountOnExit>
            <Notification onView={this.showNotification} message={errorMessage} />
          </CSSTransition>
        </div>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              className="input"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Number
            <input
              className="input"
              type="text"
              name="number"
              value={number}
              onChange={this.handleChange}
            ></input>
          </label>
          <br />
          <button className="btn" type="submit" disabled={(!name && !number) || errorMessage}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({ items: contactsSelectors.getAllContacts(state) });

const mapDispatchToProps = dispatch => ({
  onAddContact: (name, number) => dispatch(contactsOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
