import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="d-flex">
          <a className="navbar-brand" href="#">Pizzería Mamma Mía!</a>
          <ul className="navbar-nav flex-row">
            <li className="nav-item">
              <a className="nav-link btn custom-btn me-2" href="#">🍕Home</a>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <a className="nav-link btn custom-btn me-2" href="#">🔓Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn custom-btn me-2" href="#">🔒Logout</a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link btn custom-btn me-2" href="#">🔐Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn custom-btn me-2" href="#">🔐 Register</a>
                </li>
              </>
            )}
          </ul>
        </div>
        <span className="navbar-text ms-auto">
          <a className="nav-link btn custom-cart-btn" href="#">🛒 Total: ${total.toLocaleString()}</a>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
