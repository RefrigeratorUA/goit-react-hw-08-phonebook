import { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Notification from '../Notification';
import '../Notification/Notification.css';
import { authOperations } from '../../redux/auth';

class RegistrationForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    errorMessage: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, email, password } = this.state;
    const { onRegister } = this.props;

    if (!name) return this.showNotification('Please enter user name');
    if (!email) return this.showNotification('Please enter email');
    if (!password) return this.showNotification('Please enter password');

    onRegister({ name, email, password });
    this.setState({ name: '', email: '', password: '' });
  };

  showNotification = errorMessage => {
    this.setState({ errorMessage });
  };

  render() {
    const { name, email, password, errorMessage } = this.state;
    return (
      <>
        <div className="Notification-wrapper">
          <CSSTransition in={!!errorMessage} classNames="Notification" timeout={250} unmountOnExit>
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
            Email
            <input
              className="input"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Password
            <input
              className="input"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            ></input>
          </label>
          <br />
          <button
            className="btn-phonebook"
            type="submit"
            disabled={(!name && !email && !password) || !!errorMessage}
          >
            Register
          </button>
        </form>
      </>
    );
  }
}

// const mapStateToProps = state => ({ items: contactsSelectors.getAllContacts(state) });

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegistrationForm);
