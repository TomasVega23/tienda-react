import Brand from "./Brand";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
 <header>
      <nav
        className="navbar navbar-expand-lg  bg-black"
      >
        <div className="container">
            <Brand />
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav navbar-nav-hover mx-auto">
              <li className="nav-item px-3">
              <a className="nav-link link-light " href="#">
                  Home
                </a>
              </li>
              <li className="nav-item px-3">
              <a className="nav-link link-light" href="#">
                  Productos
                </a>
              </li>
              <li className="nav-item px-3">
              <a className="nav-link link-light" href="#">
                  Contactos
                </a>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </header>
    </div>
  );
};

export default NavBar;
