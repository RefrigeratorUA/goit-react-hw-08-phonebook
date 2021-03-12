import { Component } from 'react';

class Notification extends Component {
  state = {
    errorMessage: '',
  };

  componentDidMount() {
    const { onView, message } = this.props;
    this.setState({ errorMessage: message });
    setTimeout(() => onView(''), 2000);
  }
  componentDidUpdate(prevProps, prevState) {
    const { onView, message } = this.props;
    const { errorMessage } = this.state;
    if (message && message !== errorMessage) {
      this.setState({ errorMessage: message });
      return onView('');
    }
  }

  render() {
    const { errorMessage } = this.state;
    return <div className="alert">{errorMessage}</div>;
  }
}

export default Notification;
