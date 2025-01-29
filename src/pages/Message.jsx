import React from "react";
import { Link } from "react-router-dom";

export default function Message() {
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
              <div className="message_page">
                <div className="message-main1">
                  <div className="flex">
                    <h1>
                      <a href>
                        Julianne_Moore{" "}
                        <i className="fa-solid fa-chevron-down" />
                      </a>
                    </h1>
                    <h2>
                      <a href>
                        <i className="fa-regular fa-pen-to-square" />
                      </a>
                    </h2>
                  </div>
                  <div className="none">
                    <p>
                      <a href>
                        <b>messages</b>
                      </a>
                    </p>
                    <p style={{ opacity: ".3" }}>
                      <a href>
                        <b>Requests</b>
                      </a>
                    </p>
                  </div>
                  {/* accounts */}
                  <div className="copy">
                    <div className="profile">
                      <a href>
                        <img
                          src="https://images.pexels.com/photos/4808517/pexels-photo-4808517.jpeg?auto=compress&cs=tinysrgb&w=600"
                          alt
                        />
                      </a>
                    </div>
                    <div className="detail">
                      <a href>
                        <h1>Julie Danny</h1>
                        <p>Active 10 minutes ago</p>
                      </a>
                    </div>
                  </div>
                  <div className="copy">
                    <div className="profile">
                      <a href>
                        <img
                          src="https://images.pexels.com/photos/2598024/pexels-photo-2598024.jpeg?auto=compress&cs=tinysrgb&w=600"
                          alt
                        />
                      </a>
                    </div>
                    <div className="detail">
                      <a href>
                        <h1>jack barrer</h1>
                        <p>Active 3 minutes ago</p>
                      </a>
                    </div>
                  </div>
                  <div className="copy">
                    <div className="profile">
                      <a href>
                        <img
                          src="https://images.pexels.com/photos/4153800/pexels-photo-4153800.jpeg?auto=compress&cs=tinysrgb&w=600"
                          alt
                        />
                      </a>
                    </div>
                    <div className="detail">
                      <a href>
                        <h1>Ria John</h1>
                        <p>Active 3 hours ago</p>
                      </a>
                    </div>
                  </div>
                  <div className="copy">
                    <div className="profile">
                      <a href>
                        <img
                          src="https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg?auto=compress&cs=tinysrgb&w=600"
                          alt
                        />
                      </a>
                    </div>
                    <div className="detail">
                      <a href>
                        <h1>Mia Khalifa</h1>
                        <p>Active 40 minutes ago</p>
                      </a>
                    </div>
                  </div>
                  <div className="copy">
                    <div className="profile">
                      <a href>
                        <img
                          src="https://images.pexels.com/photos/3008355/pexels-photo-3008355.jpeg?auto=compress&cs=tinysrgb&w=600"
                          alt
                        />
                      </a>
                    </div>
                    <div className="detail">
                      <a href>
                        <h1>Riya Shah</h1>
                        <p>Active 39 minutes ago</p>
                      </a>
                    </div>
                  </div>
                  <div className="copy">
                    <div className="profile">
                      <a href>
                        <img
                          src="https://images.pexels.com/photos/4079215/pexels-photo-4079215.jpeg?auto=compress&cs=tinysrgb&w=600"
                          alt
                        />
                      </a>
                    </div>
                    <div className="detail">
                      <a href>
                        <h1>Cristopher Jin</h1>
                        <p>Active 8 minutes ago</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="vr" />
                <div className="message-main2">
                  <div className="icon">
                    <div className="round">
                      <i className="fa-regular fa-circle" />
                    </div>
                    <div className="messanger">
                      <i
                        className="fa-brands fa-facebook-messenger"
                        style={{ color: "#1d4486" }}
                      />
                    </div>
                  </div>
                  <h1>Your Messages</h1>
                  <p>Send private photos and messages to a friend or group.</p>
                  <button>
                    <a href>Send Message</a>
                  </button>
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
