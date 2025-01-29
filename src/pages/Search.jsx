import React from "react";
import { Link } from "react-router-dom";

export default function Search() {
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
              <div className="container mt-5">
                <input
                  className="form-control mb-4"
                  id="tableSearch"
                  type="text"
                  placeholder="Type something to search list items"
                  style={{}}
                />
                <table className="table table-bordered table-striped">
                  <tbody id="myTable" className="moni">
                    <tr>
                      <td>John Doe</td>
                      <td>10 kilometers far away</td>
                    </tr>
                    <tr>
                      <td>Mary Moe</td>
                      <td>200 meters far away</td>
                    </tr>
                    <tr>
                      <td>July Dooley</td>
                      <td>30 meters far away</td>
                    </tr>
                    <tr>
                      <td>Anja Ravendale</td>
                      <td>6 kilometers far away</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        {/* footer last */}
      </div>
    </div>
  );
}
