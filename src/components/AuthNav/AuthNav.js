import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './AuthNav.css';

const AuthNav = () => {
  return (
    <nav className="AuthNavStyle">
      <NavLink
        exact
        to={routes.register}
        className="AuthNavStyle-link"
        activeClassName="AuthNavStyle-link--active"
      >
        Register
      </NavLink>
      <NavLink
        exact
        to={routes.login}
        className="AuthNavStyle-link"
        activeClassName="AuthNavStyle-link--active"
      >
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
