import React from "react";
import { Link } from "react-router-dom";

export default function Friends() {
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
              <div className="friends_page">
                <div className="sec1">
                  <input type="search" name id placeholder="search anything" />
                  <a href>
                    <img
                      src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                      alt
                    />
                  </a>
                </div>
                <hr />
                <div className="members">
                  <div className="member1">
                    <button
                      type="button"
                      className="btn"
                      style={{ "background-color": "rgb(235, 134, 134)" }}
                    >
                      Active Members{" "}
                      <span className="badge bg-secondary">15</span>
                    </button>
                  </div>
                  <div className="member2">
                    <div className="dropdown">
                      <button
                        className="btn dropdown-toggle w-100"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ "border-color": "rgb(235, 134, 134)" }}
                      >
                        Last Active
                      </button>
                      <ul
                        className="dropdown-menu w-100"
                        aria-labelledby="dropdownMenuButton1"
                        style={{ "border-color": "rgb(238, 187, 187)" }}
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Last Active
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Newest Registered
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Alphabetical
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="member3">
                    <button
                      type="button"
                      className="btn"
                      style={{ "background-color": "rgb(235, 134, 134)" }}
                    >
                      Message Request{" "}
                      <span className="badge bg-secondary">3</span>
                    </button>
                  </div>
                </div>
                <hr />
                <div className="sec2">
                  <div className="profileee">
                    <img
                      src="https://images.pexels.com/photos/16297414/pexels-photo-16297414/free-photo-of-close-up-of-salad-and-sauce-on-the-plate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                      alt
                    />
                    <h1>
                      <a href>Nora</a>
                    </h1>
                    <p>Active 42 minutes ago</p>
                    <div className="followers">
                      <div className="friend1">
                        <h2>0</h2>
                        <b>followers</b>
                      </div>
                      <div className="friend2">
                        <h2>6</h2>
                        <b>followings</b>
                      </div>
                    </div>
                    <button>
                      <a href>View Profile</a>
                    </button>
                  </div>
                  <div className="profileee">
                    <img
                      src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/1/6005b5c330c63-bpfull.png"
                      alt
                    />
                    <h1>
                      <a href>Sephiroth</a>
                    </h1>
                    <p>Active 1 Week ago</p>
                    <div className="followers">
                      <div className="friend1">
                        <h2>10</h2>
                        <b>followers</b>
                      </div>
                      <div className="friend2">
                        <h2>9</h2>
                        <b>followings</b>
                      </div>
                    </div>
                    <button>
                      <a href>View Profile</a>
                    </button>
                  </div>
                  <div className="profileee">
                    <img
                      src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/4/5e2cc15a922f4-bpfull.jpg"
                      alt
                    />
                    <h1>
                      <a href>Irina Petrova</a>
                    </h1>
                    <p>Active 10 months ago</p>
                    <div className="followers">
                      <div className="friend1">
                        <h2>10</h2>
                        <b>followers</b>
                      </div>
                      <div className="friend2">
                        <h2>3</h2>
                        <b>followings</b>
                      </div>
                    </div>
                    <button>
                      <a href>View Profile</a>
                    </button>
                  </div>
                  <div className="profileee">
                    <img
                      src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/16/5e2d07dbc43f2-bpfull.jpg"
                      alt
                    />
                    <h1>
                      <a href>Jennie Ferguson</a>
                    </h1>
                    <p>Active 1 minutes ago</p>
                    <div className="followers">
                      <div className="friend1">
                        <h2>1</h2>
                        <b>followers</b>
                      </div>
                      <div className="friend2">
                        <h2>1</h2>
                        <b>followings</b>
                      </div>
                    </div>
                    <button>
                      <a href>View Profile</a>
                    </button>
                  </div>
                  <div className="profileee">
                    <img
                      src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/5/5e2cc51a2a79d-bpfull.jpg"
                      alt
                    />
                    <h1>
                      <a href>Robert Cook</a>
                    </h1>
                    <p>Active 10 minutes ago</p>
                    <div className="followers">
                      <div className="friend1">
                        <h2>5</h2>
                        <b>followers</b>
                      </div>
                      <div className="friend2">
                        <h2>4</h2>
                        <b>followings</b>
                      </div>
                    </div>
                    <button>
                      <a href>View Profile</a>
                    </button>
                  </div>
                  <div className="profileee">
                    <img
                      src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/6/5e2cccd55d57d-bpfull.jpg"
                      alt
                    />
                    <h1>
                      <a href>Sophia Lee</a>
                    </h1>
                    <p>Active 10 minutes ago</p>
                    <div className="followers">
                      <div className="friend1">
                        <h2>3</h2>
                        <b>followers</b>
                      </div>
                      <div className="friend2">
                        <h2>5</h2>
                        <b>followings</b>
                      </div>
                    </div>
                    <button>
                      <a href>View Profile</a>
                    </button>
                  </div>
                  <div className="profileee">
                    <img
                      src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/14/5e2d01291542c-bpfull.jpg"
                      alt
                    />
                    <h1>
                      <a href>John Thompson</a>
                    </h1>
                    <p>Active 9 minutes ago</p>
                    <div className="followers">
                      <div className="friend1">
                        <h2>93</h2>
                        <b>followers</b>
                      </div>
                      <div className="friend2">
                        <h2>5</h2>
                        <b>followings</b>
                      </div>
                    </div>
                    <button>
                      <a href>View Profile</a>
                    </button>
                  </div>
                  <div className="profileee">
                    <img
                      src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/12/5e2cfd5d18ea0-bpfull.jpg"
                      alt
                    />
                    <h1>
                      <a href>Alexis Clark</a>
                    </h1>
                    <p>Active 3 minutes ago</p>
                    <div className="followers">
                      <div className="friend1">
                        <h2>4</h2>
                        <b>followers</b>
                      </div>
                      <div className="friend2">
                        <h2>1</h2>
                        <b>followings</b>
                      </div>
                    </div>
                    <button>
                      <a href>View Profile</a>
                    </button>
                  </div>
                  <div className="profileee">
                    <img
                      src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/9/5e2ce3f5b95cd-bpfull.jpg"
                      alt
                    />
                    <h1>
                      <a href>Brian Walton</a>
                    </h1>
                    <p>Active 1 month ago</p>
                    <div className="followers">
                      <div className="friend1">
                        <h2>4</h2>
                        <b>followers</b>
                      </div>
                      <div className="friend2">
                        <h2>11</h2>
                        <b>followings</b>
                      </div>
                    </div>
                    <button>
                      <a href>View Profile</a>
                    </button>
                  </div>
                  <div className="profileee">
                    <img
                      src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/8/5e2cd470750a5-bpfull.jpg"
                      alt
                    />
                    <h1>
                      <a href>Linda Lohan</a>
                    </h1>
                    <p>Active 2 minutes ago</p>
                    <div className="followers">
                      <div className="friend1">
                        <h2>4</h2>
                        <b>followers</b>
                      </div>
                      <div className="friend2">
                        <h2>7</h2>
                        <b>followings</b>
                      </div>
                    </div>
                    <button>
                      <a href>View Profile</a>
                    </button>
                  </div>
                  <div className="profileee">
                    <img
                      src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/11/5e2cfa2fbe4b9-bpfull.jpg"
                      alt
                    />
                    <h1>
                      <a href>Anna Young</a>
                    </h1>
                    <p>Active 46 minutes ago</p>
                    <div className="followers">
                      <div className="friend1">
                        <h2>3</h2>
                        <b>followers</b>
                      </div>
                      <div className="friend2">
                        <h2>6</h2>
                        <b>followings</b>
                      </div>
                    </div>
                    <button>
                      <a href>View Profile</a>
                    </button>
                  </div>
                  <div className="profileee">
                    <img
                      src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/10/5e2cf874833ee-bpfull.jpg"
                      alt
                    />
                    <h1>
                      <a href>Emma Johnson</a>
                    </h1>
                    <p>Active 4 minutes ago</p>
                    <div className="followers">
                      <div className="friend1">
                        <h2>5</h2>
                        <b>followers</b>
                      </div>
                      <div className="friend2">
                        <h2>3</h2>
                        <b>followings</b>
                      </div>
                    </div>
                    <button>
                      <a href>View Profile</a>
                    </button>
                  </div>
                  <div className="profileee">
                    <img
                      src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/13/5e2cfee616ad3-bpfull.jpg"
                      alt
                    />
                    <h1>
                      <a href>Julia Cox</a>
                    </h1>
                    <p>Active 2 years ago</p>
                    <div className="followers">
                      <div className="friend1">
                        <h2>4</h2>
                        <b>followers</b>
                      </div>
                      <div className="friend2">
                        <h2>0</h2>
                        <b>followings</b>
                      </div>
                    </div>
                    <button>
                      <a href>View Profile</a>
                    </button>
                  </div>
                  <div className="profileee">
                    <img
                      src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/15/5e2d0381c5f1e-bpfull.jpg"
                      alt
                    />
                    <h1>
                      <a href>Richard Bell</a>
                    </h1>
                    <p>Active 8 minutes ago</p>
                    <div className="followers">
                      <div className="friend1">
                        <h2>2</h2>
                        <b>followers</b>
                      </div>
                      <div className="friend2">
                        <h2>1</h2>
                        <b>followings</b>
                      </div>
                    </div>
                    <button>
                      <a href>View Profile</a>
                    </button>
                  </div>
                  <div className="profileee">
                    <img
                      src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/7/5e2cd04d1eade-bpfull.jpg"
                      alt
                    />
                    <h1>
                      <a href>James Carter</a>
                    </h1>
                    <p>Active 2 minutes ago</p>
                    <div className="followers">
                      <div className="friend1">
                        <h2>4</h2>
                        <b>followers</b>
                      </div>
                      <div className="friend2">
                        <h2>2</h2>
                        <b>followings</b>
                      </div>
                    </div>
                    <button>
                      <a href>View Profile</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
