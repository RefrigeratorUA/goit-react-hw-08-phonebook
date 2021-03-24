import PropTypes from 'prop-types';

const Button = ({ onClick, title, className }) => {
  return (
    <button type="button" className={className} onClick={() => onClick()}>
      {title}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
