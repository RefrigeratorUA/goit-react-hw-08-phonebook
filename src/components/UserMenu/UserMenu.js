import { connect } from 'react-redux';
import avatarDefault from '../../images/avatar-default.png';
import { authSelectors, authOperations } from '../../redux/auth';
import Button from '../Button';
import '../UserMenu/UserMenu.css';
import '../Button/Button.css';

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div className="UserMenu">
      <img src={avatar} width="32" height="32" alt="avatar" />
      <span>
        <b>Name:</b> {name}
      </span>
      <Button title={'Logout'} className="btn-phonebook btn-phonebook--logout" onClick={onLogout} />
    </div>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: avatarDefault,
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
