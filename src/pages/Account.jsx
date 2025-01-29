// import React from "react";
// import { Link } from "react-router-dom";

// export default function Account() {
//   return (
//     <div>
//       <section>
//         <div className="acount-sec1">
//           <div className="left-header">
//             <ul>
//               <li
//                 style={{
//                   "-webkit-text-decoration": "overline",
//                   "text-decoration": "overline",
//                 }}
//               >
//                 <a href="account.html">
//                   <i className="fa-solid fa-house" /> <p>Home</p>
//                 </a>
//               </li>
//               <li>
//                 <a href="02_search.html">
//                   <i className="fa-solid fa-magnifying-glass" />
//                   <p>Search</p>
//                 </a>
//               </li>
//               <li>
//                 <a href="03_friends.html">
//                   <i className="fa-solid fa-users" /> <p>Friends</p>
//                 </a>
//               </li>
//               <li>
//                 <a href="04_message.html">
//                   <i className="fa-solid fa-message" /> <p>Message</p>
//                 </a>
//               </li>
//               <li>
//                 <a href="05_profile.html">
//                   <i className="fa-solid fa-user" /> <p>Profile</p>
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="right-content">
//             <section className="vh-75 mt-5 mb-5">
//               <div className="container-fluid h-custom">
//                 <div className="row d-flex justify-content-center align-items-center h-100">
//                   <div className="col-md-9 col-lg-6 col-xl-5">
//                     <img
//                       src="https://cdn.pixabay.com/photo/2017/08/09/17/20/bible-2615221_640.png"
//                       className="img-fluid"
//                       alt="Sample image"
//                     />
//                   </div>
//                   <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//                     <form>
//                       <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
//                         <p className="lead fw-normal mb-0 me-3">Sign in with</p>
//                         <button
//                           type="button"
//                           className="btn btn-primary btn-floating mx-1"
//                         >
//                           <i className="fab fa-facebook-f" />
//                         </button>
//                         <button
//                           type="button"
//                           className="btn btn-primary btn-floating mx-1"
//                         >
//                           <i className="fab fa-twitter" />
//                         </button>
//                         <button
//                           type="button"
//                           className="btn btn-primary btn-floating mx-1"
//                         >
//                           <i className="fab fa-linkedin-in" />
//                         </button>
//                       </div>
//                       <div className="divider d-flex align-items-center my-4"></div>
//                       {/* Email input */}
//                       <div className="form-outline mb-4">
//                         <input
//                           type="email"
//                           id="form3Example3"
//                           className="form-control form-control-lg"
//                           placeholder="Enter a valid email address"
//                         />
//                       </div>
//                       {/* Password input */}
//                       <div className="form-outline mb-3">
//                         <input
//                           type="password"
//                           id="form3Example4"
//                           className="form-control form-control-lg"
//                           placeholder="Enter password"
//                         />
//                       </div>
//                       <div className="d-flex flex-column justify-content-between align-items-center">
//                         {/* Checkbox */}
//                         <div className="form-check mb-2 mt-2">
//                           <input
//                             className="form-check-input me-2 mb-1"
//                             type="checkbox"
//                             defaultValue
//                             id="form2Example3"
//                           />
//                           <label
//                             className="form-check-label"
//                             htmlFor="form2Example3"
//                           >
//                             Remember me
//                           </label>
//                         </div>
//                         <a href="#!" className="text-body">
//                           Forgot password?
//                         </a>
//                       </div>
//                       <div className="text-center text-lg-start mt-4 pt-2">
//                         <button
//                           type="button"
//                           className="btn btn-primary btn-lg"
//                           style={{
//                             "padding-left": "2.5rem",
//                             "padding-right": "2.5rem",
//                           }}
//                         >
//                           Login
//                         </button>
//                         <p className="small fw-bold mt-2 pt-1 mb-0">
//                           Don't have an account?{" "}
//                           <a href="#!" className="link-danger">
//                             Register
//                           </a>
//                         </p>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }













import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Account() {
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
              <section className="vh-75 mt-5 mb-5">
                <div className="container-fluid h-custom">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                      <img
                        src="https://cdn.pixabay.com/photo/2017/08/09/17/20/bible-2615221_640.png"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                      <form>
                        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                          <p className="lead fw-normal mb-0 me-3">
                            Sign in with
                          </p>
                          <button
                            type="button"
                            className="btn btn-primary btn-floating mx-1"
                          >
                            <i className="fab fa-facebook-f" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-floating mx-1"
                          >
                            <i className="fab fa-twitter" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-floating mx-1"
                          >
                            <i className="fab fa-linkedin-in" />
                          </button>
                        </div>
                        <div className="divider d-flex align-items-center my-4"></div>
                        {/* Email input */}
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form3Example3"
                            className="form-control form-control-lg"
                            placeholder="Enter a valid email address"
                          />
                        </div>
                        {/* Password input */}
                        <div className="form-outline mb-3">
                          <input
                            type="password"
                            id="form3Example4"
                            className="form-control form-control-lg"
                            placeholder="Enter password"
                          />
                        </div>
                        <div className="d-flex flex-column justify-content-between align-items-center">
                          {/* Checkbox */}
                          <div className="form-check mb-2 mt-2">
                            <input
                              className="form-check-input me-2 mb-1"
                              type="checkbox"
                              defaultValue
                              id="form2Example3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="form2Example3"
                            >
                              Remember me
                            </label>
                          </div>
                          <Link to="#!" className="text-body">
                            Forgot password?
                          </Link>
                        </div>
                        <div className="text-center text-lg-start mt-4 pt-2">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                            style={{
                              "padding-left": "2.5rem",
                              "padding-right": "2.5rem",
                            }}
                          >
                            Login
                          </button>
                          <p className="small fw-bold mt-2 pt-1 mb-0">
                            Don't have an account?{" "}
                            <Link to="#!" className="link-danger">
                              Register
                            </Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        {/* footer last */}
      </div>
    </div>
  );
}
