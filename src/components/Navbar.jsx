import React from 'react'
import { Link} from 'react-router-dom';
function Navbar() {
  return (
    <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/aboutus">AboutUs</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar