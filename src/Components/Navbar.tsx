import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
function Navbar() {
  return (
    <div className="navigation">
      <div className="row justify-content-between align-items-center">
        <Link to="/" className="col-lg-5 col-sm-4">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="col-lg-7 col-sm-8">
          <div className="row ">
            <li className="nav-item col-lg-6 col-sm-4">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            
            <li className="nav-item col-lg-6 col-sm-4">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
