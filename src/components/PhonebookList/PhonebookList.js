import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Filter from '../Filter';
import Loader from '../Loader';
import Notification from '../Notification';
import PhonebookListItem from '../PhonebookListItem';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import styles from './PhonebookList.module.css';

class PhonebookList extends Component {
  state = {
    errorMessage: '',
  };
  componentDidMount() {
    return this.props.fetchContacts();
  }
  componentDidUpdate(prevProps, prevState) {
    const { errorMessage } = prevState;
    const { error } = this.props;
    if (error !== errorMessage) this.showNotification(error);
  }

  showNotification = errorMessage => {
    this.setState({ errorMessage });
  };

  render() {
    const { contacts, filter, onDelete, isLoading, error } = this.props;
    const { errorMessage } = this.state;
    const isShow = errorMessage ? true : false; // Консоль ругается, еслт CSSTransition in !== boolean
    return (
      <>
        <div className="Notification-wrapper">
          <CSSTransition in={isShow} classNames="Notification" timeout={250} unmountOnExit>
            <Notification onView={this.showNotification} message={error} />
          </CSSTransition>
        </div>
        {isLoading && <Loader />}
        {(contacts.length > 1 || filter) && <Filter />}

        <TransitionGroup component="ul" className="list">
          {contacts.map(({ name, id, number }) => (
            <CSSTransition key={id} timeout={250} classNames={styles}>
              <PhonebookListItem name={name} number={number} id={id} onDelete={onDelete} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </>
    );
  }
}

PhonebookList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
  onDelete: PropTypes.func,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContacts(state),
  filter: contactsSelectors.getFilter(state),
  isLoading: contactsSelectors.getLoading(state),
  error: contactsSelectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  onDelete: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookList);
