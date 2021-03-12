import { CSSTransition } from 'react-transition-group';
import Logo from '../Logo';
import './AppBar.css';

const AppBar = () => {
  return (
    <header className="AppBar-wrapper">
      <CSSTransition in={true} appear={true} classNames="AppBar-logo" timeout={500} unmountOnExit>
        <Logo />
      </CSSTransition>
    </header>
  );
};

export default AppBar;
