import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <div>
        {/* section for header  */}
        <section>
          <div className="acount-sec1">
            <div className="left-header">
              <ul>
                <li
                  style={{
                    "-webkit-text-decoration": "overline",
                    "text-decoration": "overline",
                  }}
                >
                  <Link to="/accounts">
                    <i className="fa-solid fa-house" /> <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link to="/search">
                    <i className="fa-solid fa-magnifying-glass" />
                    <p>Search</p>
                  </Link>
                </li>
                <li>
                  <Link to="/friends">
                    <i className="fa-solid fa-users" /> <p>Friends</p>
                  </Link>
                </li>
                <li>
                  <Link to="/message">
                    <i className="fa-solid fa-message" /> <p>Message</p>
                  </Link>
                </li>
                <li>
                  <Link to="/profile">
                    <i className="fa-solid fa-user" /> <p>Profile</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="right-content">
              <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                {/* Main content */}
                <div className="h-screen flex-grow-1 overflow-y-lg-auto">
                  {/* Main */}
                  <main className="py-6 bg-surface-secondary">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xl-7 mx-auto">
                          {/* Profile picture */}
                          <div className="card shadow border-0 mt-4 mb-10">
                            <div className="card-body">
                              <div className="d-flex align-items-center">
                                <div>
                                  <div className="d-flex align-items-center">
                                    <a
                                      href="#"
                                      className="avatar avatar-lg bg-warning rounded-circle text-white"
                                    >
                                      <img
                                        alt="..."
                                        src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                      />
                                    </a>
                                    <div className="ms-4">
                                      <span className="h4 d-block mb-0">
                                        Julianne Moore
                                      </span>
                                      <a
                                        href="#"
                                        className="text-sm font-semibold text-muted"
                                      >
                                        View Profile
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="ms-auto">
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-neutral"
                                  >
                                    Upload
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Form */}
                          <div className="mb-5 mt-5">
                            <h5 className="mb-0">Contact Information</h5>
                          </div>
                          <form className="mb-6">
                            <div className="row mb-5">
                              <div className="col-md-6">
                                <div className>
                                  <label
                                    className="form-label"
                                    htmlFor="first_name"
                                  >
                                    First name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="first_name"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className>
                                  <label
                                    className="form-label"
                                    htmlFor="last_name"
                                  >
                                    Last name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="last_name"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row g-5">
                              <div className="col-md-6">
                                <div className>
                                  <label className="form-label" htmlFor="email">
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className>
                                  <label
                                    className="form-label"
                                    htmlFor="phone_number"
                                  >
                                    Phone number
                                  </label>
                                  <input
                                    type="tel"
                                    className="form-control"
                                    id="phone_number"
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className>
                                  <label
                                    className="form-label"
                                    htmlFor="address"
                                  >
                                    Address
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className>
                                  <label className="form-label" htmlFor="city">
                                    City
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className>
                                  <label
                                    className="form-label"
                                    htmlFor="country"
                                  >
                                    Country
                                  </label>
                                  <select
                                    className="form-select"
                                    id="country"
                                    placeholder="Your email"
                                    aria-label="Default select example"
                                  >
                                    <option selected>Country</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="check_primary_address"
                                    id="check_primary_address"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="check_primary_address"
                                  >
                                    Make this my default address
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="text-end">
                              <button
                                type="button"
                                className="btn btn-sm btn-neutral me-2"
                              >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                className="btn btn-sm btn-primary"
                              >
                                Save
                              </button>
                            </div>
                          </form>
                          <hr className="my-10" />
                          {/* Individual switch cards */}
                          <div className="row g-6">
                            <div className="col-md-6">
                              <div className="card shadow border-0">
                                <div className="card-body">
                                  <h5 className="mb-2">Public profile</h5>
                                  <p className="text-sm text-muted mb-6">
                                    Making your profile public means that anyone
                                    on the network will be able to find you.
                                  </p>
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="flexSwitchCheckDefault"
                                      defaultChecked
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="card shadow border-0">
                                <div className="card-body">
                                  <h5 className="mb-2">Show my email</h5>
                                  <p className="text-sm text-muted mb-6">
                                    Showing your e-mail adresses means that
                                    anyone on the network will be able to find
                                    you.
                                  </p>
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="flexSwitchCheckDefault"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 mt-5">
                              <div className="card shadow border-0">
                                <div className="card-body d-flex align-items-center">
                                  <div>
                                    <h5 className="text-danger mb-2">
                                      Deactivate account
                                    </h5>
                                    <p className="text-sm text-muted">
                                      Once you delete your account, there is no
                                      going back. Please be certain.
                                    </p>
                                  </div>
                                  <div className="ms-auto">
                                    <button
                                      type="button"
                                      className="btn btn-sm btn-danger"
                                    >
                                      Deactivate
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* footer last */}
      </div>
    </div>
  );
}
