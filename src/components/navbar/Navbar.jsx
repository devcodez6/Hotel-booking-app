import './navbar.css';
import { Link } from 'react-router-dom';
import { faBed, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Devcodez</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <Link to="/test" className="navButton">
            test
          </Link>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
