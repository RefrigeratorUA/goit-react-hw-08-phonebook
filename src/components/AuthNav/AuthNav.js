import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './AuthNav.css';

const AuthNav = () => {
  return (
    <nav className="AuthNavStyle">
      {routes.map(route => {
        const { path, name, showInNav } = route;
        return (
          !showInNav && (
            <NavLink
              exact
              key={name}
              to={path}
              className="AuthNavStyle-link"
              activeClassName="AuthNavStyle-link--active"
            >
              {name}
            </NavLink>
          )
        );
      })}
    </nav>
  );
};

export default AuthNav;
