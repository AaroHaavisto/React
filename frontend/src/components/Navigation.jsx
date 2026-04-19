import './Navigation.css';

import {Link} from 'react-router';

const Navigation = ({user}) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {!user && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {user && (
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        )}
        {user && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}
        {user && (
          <li>
            <Link to="/upload">Upload</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
