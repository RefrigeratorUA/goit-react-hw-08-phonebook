import { Component, Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import Section from './components/Section';
import AppBar from './components/AppBar';
import routes from './routes';
import { connect } from 'react-redux';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Loader from './components/Loader';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Section>
        <AppBar />

        <Suspense fallback={<Loader />}>
          <Switch>
            {routes.map(route => {
              return route.privat ? (
                <PrivateRoute key={route.name} {...route} />
              ) : (
                <PublicRoute key={route.name} {...route} />
              );
            })}
            ;
            <Redirect to="/" />
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
