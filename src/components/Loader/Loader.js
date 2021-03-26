import { Spinner } from 'react-bootstrap';

const Loader = ({ animation = 'border' }) => {
  return (
    <div className="wrapper-spinner-bs">
      <Spinner animation={animation} variant="primary" />
      <Spinner animation={animation} variant="success" />
      <Spinner animation={animation} variant="danger" />
    </div>
  );
};

export default Loader;
