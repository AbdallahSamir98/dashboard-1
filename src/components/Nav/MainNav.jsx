import React from "react";
import { Link } from "react-router-dom";

export default function MainNav() {
  return (
    <>
      <div className="container" >
        <header>
          {/* sidenav */}
          <nav
            id="sidebarMenu vh-100 "
            className="collapse d-lg-block sidebar collapse bg-white"
          >
            <div className="position-sticky">
              <div className="list-group list-group-flush mx-3 mt-4">
                {/* Main Dashboard */}
                <Link
                  to="/home"
                  className="list-group-item list-group-item-action py-2 ripple my-2 active "
                  aria-current="true"
                >
                  <i className="fas fa-tachometer-alt fa-fw  me-3"></i>
                  <span className="text-light">Main dashboard</span>
                </Link>
                {/* MapView */}
                <Link
                  to="/mapview"
                  className="list-group-item list-group-item-action py-2 ripple my-2 "
                >
                  <i className="fa-solid fa-map-location-dot fa-fw text-secondary me-3"></i>
                  <span className="text-secondary">Map View</span>
                </Link>
                {/* Manage buss */}
                <Link className="list-group-item list-group-item-action py-2 ripple my-2">
                  <span>
                    <li className="nav-item ">
                      <Link
                        className="nav-link"
                        data-bs-target="#icons-nav"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                      >
                        <i className="fa-solid fa-business-time fa-fw text-secondary me-3"></i>
                        <span className="text-secondary">Manage Business</span>
                        <i className="fa-solid fa-caret-down text-secondary ms-1"></i>
                      </Link>
                      <ul
                        id="icons-nav"
                        className="nav-content collapse "
                        data-bs-parent="#sidebar-nav"
                      >
                        <li>
                          <Link to="/">
                            <span className="">Add New Business</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            <span className="py-3">Manage Business</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            <span>Busines Orders</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            <span>Business Report</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            <span>Business Review</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </span>
                </Link>

                {/* Manage driver */}

                <Link className="list-group-item list-group-item-action py-2 ">
                  <span>
                    <li className="nav-item ">
                      <Link
                        className="nav-link"
                        data-bs-target="#icons-navs"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                      >
                        <i className="fa-solid fa-car fa-fw text-secondary me-3"></i>
                        <span className="text-secondary">Mange Drivers</span>
                        <i className="fa-solid fa-caret-down text-secondary ms-2"></i>
                      </Link>
                      <ul
                        id="icons-navs"
                        className="nav-content collapse "
                        data-bs-parent="#sidebar-nav"
                      >
                        <li>
                          <Link to="/">
                            <span className="">Drive List</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </span>
                </Link>

                {/* Manage customer */}

                <Link className="list-group-item list-group-item-action py-2 ">
                  <span>
                    <li className="nav-item ">
                      <Link
                        className="nav-link"
                        data-bs-target="#icons-nav-customer"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                      >
                        <i className="fas fa-users fa-fw text-secondary me-3"></i>
                        <span className="text-secondary">Mange Customer</span>
                        <i className="fa-solid fa-caret-down text-secondary ms-1"></i>
                      </Link>
                      <ul
                        id="icons-nav-customer"
                        className="nav-content collapse "
                        data-bs-parent="#sidebar-nav"
                      >
                        <li>
                          <Link to="/">
                            <span className="">Customers</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </span>
                </Link>
                {/* Manage setting */}

                <Link className="list-group-item list-group-item-action py-2 ">
                  <span>
                    <li className="nav-item ">
                      <Link
                        className="nav-link"
                        data-bs-target="#icons-nav-setting"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                      >
                        <i className="fas fa-gear text-secondary fa-fw text-secondary me-3"></i>
                        <span className="text-secondary">setting</span>
                        <i className="fa-solid fa-caret-down text-secondary ms-1"></i>
                      </Link>
                      <ul
                        id="icons-nav-setting"
                        className="nav-content collapse "
                        data-bs-parent="#sidebar-nav"
                      >
                        <li>
                          <Link to="/">
                            <span className="">website setting</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            <span>driver commission</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            <span>commission setting</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            <span>mange sub admin</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            <span>change password</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            <span>application setting</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            <span>application slider</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </span>
                </Link>
              </div>
            </div>
          </nav>

          {/* top nav */}
          <nav
            id="main-navbar"
            className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
          >
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link className="navbar-brand" to="/home">
                <img
                  src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                  height="25"
                  alt=""
                  loading="lazy"
                />
              </Link>

              <form className="d-none d-md-flex  input-group w-auto my-auto">
                <input
                  autocomplete="off"
                  type="search"
                  className="form-control rounded"
                  placeholder="Search "
                />
                <span className="input-group-text border-0">
                  <i className="fas fa-search"></i>
                </span>
              </form>

              <ul className="navbar-nav ms-auto d-flex flex-row">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link me-4 me-lg-0 dropdown-toggle hidden-arrow"
                    to="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-bell position-relative"></i>
                    <span className="badge position-absolute top-0 rounded-pill badge-notification bg-danger">
                      0
                    </span>
                  </Link>
                </li>

                <li className="nav-item dropdown me-1">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-fill-drip"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="#">
                        setting
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        change password
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        logout
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item me-3 me-lg-0">
                  <Link className="nav-link" to="#">
                    <i className="fab fa-github"></i>
                  </Link>
                </li>

                <li className="nav-item dropdown me-5 pe-5">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    name
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="#">
                        setting
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        change password
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
