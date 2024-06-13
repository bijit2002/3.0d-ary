import {Link} from "react-router-dom";
const Navigation =()=>{
    return(
        <header>
        <div className="logo">3.0d!ary</div>
        <nav>
          <ul>
          <li>
              <Link className="nav_link" to="/">
               Connect Wallet
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/view-all-tasks">
                View All Pages
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/create-task">
                Write a Page
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/view-task">
                View Page
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/update-task">
                Update Page
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
}
export default Navigation;