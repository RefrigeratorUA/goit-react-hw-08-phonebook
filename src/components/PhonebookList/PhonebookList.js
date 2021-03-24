import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Filter from '../Filter';
import { Spinner } from 'react-bootstrap';
import Notification from '../Notification';
import PhonebookListItem from '../PhonebookListItem';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import styles from './PhonebookList.module.css';

class PhonebookList extends Component {
  componentDidMount() {
    return this.props.fetchContacts();
  }

  render() {
    const { contacts, filter, onDelete, isLoading, error, onClearError } = this.props;
    return (
      <>
        <div className="Notification-wrapper">
          <CSSTransition in={!!error} classNames="Notification" timeout={250} unmountOnExit>
            <Notification onView={onClearError} message={error} />
          </CSSTransition>
        </div>
        {isLoading && (
          <div className="wrapper-spinner-bs">
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="success" />
            <Spinner animation="border" variant="danger" />
          </div>
        )}
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
  onClearError: () => dispatch(contactsOperations.onClearErrorMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookList);
