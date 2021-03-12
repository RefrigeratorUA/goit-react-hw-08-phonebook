// import styles from './PhonebookListItem.module.css';

const PhonebookListItem = ({ name, number, id, onDelete }) => {
  return (
    <li className="list-item">
      {`${name}: `}
      <span>{number}</span>
      <button type="button" id={id} onClick={event => onDelete(event.target.id)}>
        Delete
      </button>
    </li>
  );
};

export default PhonebookListItem;
