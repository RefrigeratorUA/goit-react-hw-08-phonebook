import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import routes from '../../routes';

const Navigation = ({ isAuth }) => {
  return (
    <nav className="NavClass">
      <NavLink exact to={routes.home} className="NavLink" activeClassName="NavLink--active">
        Home
      </NavLink>
      {isAuth && (
        <NavLink to={routes.contacts} className="NavLink" activeClassName="NavLink--active">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuth: authSelectors.getIsAuth(state),
});

export default connect(mapStateToProps)(Navigation);
