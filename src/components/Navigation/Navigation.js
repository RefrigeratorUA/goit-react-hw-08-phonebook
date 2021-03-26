import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import routes from '../../routes';

const Navigation = ({ isAuth }) => {
  return (
    <nav className="NavClass">
      {routes.map(route => {
        const { name, path, showInNav, privat } = route;
        return (
          showInNav &&
          (!privat || (isAuth && privat)) && (
            <NavLink
              key={name}
              exact
              to={path}
              className="NavLink"
              activeClassName="NavLink--active"
            >
              {name}
            </NavLink>
          )
        );
      })}
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuth: authSelectors.getIsAuth(state),
});

export default connect(mapStateToProps)(Navigation);
