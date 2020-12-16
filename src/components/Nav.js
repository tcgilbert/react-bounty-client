import { Link } from 'react-router-dom';

function Nav() {
  return(
    <div>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">New</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav;