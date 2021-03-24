import { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import Section from './components/Section';
import AppBar from './components/AppBar';
import routes from './routes';
import { connect } from 'react-redux';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { Spinner } from 'react-bootstrap';

const HomeView = lazy(() => import('./views/HomeView' /* webpackChunkName: "home-view" */));
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "contacts-view" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-view" */),
);
const LoginView = lazy(() => import('./views/LoginView' /* webpackChunkName: "login-view" */));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Section>
        <AppBar />

        <Suspense
          fallback={
            <div className="wrapper-spinner-bs">
              <Spinner animation="border" variant="primary" />
              <Spinner animation="border" variant="success" />
              <Spinner animation="border" variant="danger" />
            </div>
          }
        >
          <Switch>
            <PublicRoute exact path={routes.home} component={HomeView} />
            <PublicRoute
              path={routes.register}
              restricted
              component={RegisterView}
              redirectTo={routes.contacts}
            />
            <PublicRoute
              path={routes.login}
              restricted
              component={LoginView}
              redirectTo={routes.contacts}
            />
            <PrivateRoute
              path={routes.contacts}
              component={ContactsView}
              redirectTo={routes.login}
            />
            <PublicRoute component={HomeView} />
          </Switch>
        </Suspense>
      </Section>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
