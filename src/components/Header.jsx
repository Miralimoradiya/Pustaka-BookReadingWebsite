// Header.jsx 
import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <section>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand me-5 pe-5 ms-5" to="/">
                <img
                  src="https://static-assets.pratilipi.com/resource-all/image/ui2022/pratilipi_logo.png"
                  alt
                  height="40px"
                />
                <span style={{ color: "rgb(207, 9, 9)" }}>
                  <b>pustak</b>
                </span>
              </Link>
              <div className="dropdown ms-3 me-3">
                <button
                  className="btn btn-outline-danger dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li><Link className="dropdown-item" to="#">বাংলা</Link></li>
                  <li><Link className="dropdown-item" to="#">ગુજરાતી</Link></li>
                  <li><Link className="dropdown-item" to="#">हिन्दी</Link></li>
                  <li><Link className="dropdown-item" to="#">ಕನ್ನಡ</Link></li>
                  <li><Link className="dropdown-item" to="#">മലയാളം</Link></li>
                  <li><Link className="dropdown-item" to="#">मराठी</Link></li>
                  <li><Link className="dropdown-item" to="#">English</Link></li>
                  <li><Link className="dropdown-item" to="#">ਪੰਜਾਬੀ</Link></li>
                </ul>
              </div>
              <nav className="navbar navbar-light bg-light m-3">
                <div className="container-fluid">
                  <form className="d-flex">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="🔎 Search stories"
                      aria-label="Search"
                    />
                  </form>
                </div>
              </nav>
              <button
                type="button"
                className="btn btn-primary position-relative me-5"
              >
                <i className="fa-solid fa-bell" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  8+
                </span>
              </button>
              <div className="header1">
                <div
                  className="collapse navbar-collapse ms-5 ps-5"
                  id="navbarNavAltMarkup"
                >
                  <div
                    className="tw-flex tw-items-center tw-ms-auto"
                    style={{
                      display: "flex",
                      gap: "0px 30px",
                      "margin-top": "10px",
                    }}
                  >
                    <Link to="/">
                      <div className="navbar-link">
                        <img
                          src="https://static-assets.pratilipi.com/resource-all/image/ui2022/home-icon.svg"
                          alt="home-icon"
                        />
                        <p>Home</p>
                      </div>
                    </Link>
                    <Link to="/category">
                      <div className="navbar-link">
                        <img
                          src="https://static-assets.pratilipi.com/resource-all/image/ui2022/explore-icon.svg"
                          alt="explore-icon"
                          className="icon"
                        />
                        <p>Category</p>
                      </div>
                    </Link>
                    <Link to="/write">
                      <div className="navbar-link">
                        <img
                          src="https://static-assets.pratilipi.com/resource-all/image/ui2022/write-icon.svg"
                          alt="write-icon"
                          className="icon"
                        />
                        <p>Write</p>
                      </div>
                    </Link>
                    <Link to="/accounts">
                      <div className="navbar-link">
                        <img
                          src="https://static-assets.pratilipi.com/resource-all/image/ui2022/teal-profile-icon.svg"
                          alt="profile-icon"
                          className="icon"
                        />
                        <p>Account</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </section>
    </div>
  );
}
