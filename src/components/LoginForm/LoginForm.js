import { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Notification from '../Notification';
import '../Notification/Notification.css';
import { authOperations, authSelectors } from '../../redux/auth';
import Loader from '../Loader';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { error, onClearError } = this.props;
    if (error) {
      this.showNotification(error);
      onClearError();
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { onLogin } = this.props;

    if (!email) return this.showNotification('Please enter email');
    if (!password) return this.showNotification('Please enter password');

    onLogin({ email, password });
    this.setState({ email: '', password: '' });
  };

  showNotification = errorMessage => {
    this.setState({ errorMessage });
  };

  render() {
    const { email, password, errorMessage } = this.state;
    const { isAuthLoading } = this.props;
    return (
      <>
        <div className="Notification-wrapper">
          <CSSTransition in={!!errorMessage} classNames="Notification" timeout={250} unmountOnExit>
            <Notification onView={this.showNotification} message={errorMessage} />
          </CSSTransition>
        </div>

        {isAuthLoading ? (
          <Loader />
        ) : (
          <form onSubmit={this.handleSubmit}>
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
              disabled={(!email && !password) || !!errorMessage}
            >
              Login
            </button>
          </form>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isAuthLoading: authSelectors.getAuthLoading(state),
  error: authSelectors.getAuthError(state),
});

const mapDispatchToProps = {
  onLogin: authOperations.login,
  onClearError: authOperations.onClearErrorMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
