import 'bulma/css/bulma.css';
import CoolButton from '../coolbutton/CoolButton';

const Navbar = () => {
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="bulma-logo" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <CoolButton isInfo text="Log in" />
              <CoolButton isPrimary text="Sign up" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;