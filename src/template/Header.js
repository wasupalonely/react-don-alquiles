import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";


function Header() {

  const [openedDrawer, setOpenedDrawer] = useState(false)

  function toggleDrawer() {
    setOpenedDrawer(!openedDrawer);
  }

  function changeNav(event) {
    if (openedDrawer) {
      setOpenedDrawer(false)
    }
  }
  
  function handleScroll() {
    window.scroll({
      top: document.body.scrollHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  return (
    <header>
      
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={changeNav}>
          {/* <FontAwesomeIcon icon={["fas", "fa-solid fa-pool-8-ball"]} className="ms-1" size="lg"/> */}
            <FontAwesomeIcon
              icon={["fab", "bootstrap"]}
              className="ms-1"
              size="lg"
            />
            <span className="ms-2 h5">Don alquiles</span>
          </Link>

          <div className={"navbar-collapse offcanvas-collapse " + (openedDrawer ? 'open' : '')}>
            <ul className="navbar-nav me-auto mb-lg-0">
              {/* <li className="nav-item">
                <Link to="/products" className="nav-link" replace onClick={changeNav}>
                  Explora
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/products" className="nav-link" replace onClick={changeNav}>
                  API
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" replace onClick={handleScroll}>
                  Contactenos 
                </Link>
              </li>
              
            </ul>
          </div>

          <div className="d-inline-block d-lg-none">
            <button type="button" className="btn btn-outline-dark">
              <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
              <span className="ms-3 badge rounded-pill bg-dark">0</span>
            </button>
            <button className="navbar-toggler p-0 border-0 ms-3" type="button" onClick={toggleDrawer}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
