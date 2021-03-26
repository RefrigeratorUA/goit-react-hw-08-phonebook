import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const PrivateRoute = ({ component: Component, isAuth, redirectTo, token, ...routeProps }) => {
  return (
    <Route
      {...routeProps}
      render={props => (isAuth || token ? <Component {...props} /> : <Redirect to={redirectTo} />)}
    />
  );
};

const mapStateToProps = state => ({
  isAuth: authSelectors.getIsAuth(state),
  token: authSelectors.getToken(state),
});

export default connect(mapStateToProps)(PrivateRoute);
