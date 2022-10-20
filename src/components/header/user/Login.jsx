import React, { useContext } from "react";
import { dataContext } from "../../../context/Context";
import { Link } from "react-router-dom";
import "./Login.scss";
function login() {
  const { state, dispatch } = useContext(dataContext);
  function submitHandler(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const user = Object.fromEntries(fd.entries());
    dispatch({ type: "REGISTER", payload: user });
  }
  return (
    <div className="register-login-con ">
      <main className="register-box ">
        <form onSubmit={submitHandler} className="form ">
          <h2 className="text-secondary">Register</h2>
          {/* fullname */}
          <div className="form-con mt-3">
            <label htmlFor="name" className="form-label ">
              Name
            </label>
            <input type="text" className="form-control" id="name" name="name" />
          </div>
          {/* Email */}
          <div className="form-con mt-3">
            <label htmlFor="email" className="form-label ">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
            />
          </div>
          {/* Phone Number */}
          <div className="form-con mt-3">
            <label htmlFor="phone" className="form-label ">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
            />
          </div>
          {/* password */}
          <div className="form-con mt-3">
            <label htmlFor="password" className="form-label ">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>
          {/* submit button */}
          <Link to="/">
            <button type="submit" className="btn ">
              Register
            </button>
          </Link>
        </form>
      </main>
    </div>
  );
}
export default login;
