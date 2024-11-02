import Logo from "../Images/Logo.png";
function Navbar() {
  return (
    <div className="navigation">
      <div className="row">
        <div className="col-lg-5">
          <img src={Logo} alt="logo" />
        </div>
        <div className="col-lg-7">
          <div className="row">
            <li className="nav-item col-lg-4">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item col-lg-4">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item col-lg-4">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
