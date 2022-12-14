import React, { useContext } from "react";
import { dataContext } from "../../../context/Context";
import Chimp from "../../../img/chimp.jpg";
import { AiTwotoneEdit } from "react-icons/ai";
import "./Account.scss";

function Account({}) {
  const { state, dispatch } = useContext(dataContext);
  return (
    <div className="main-profile-con">
      <div className="profile-box">
        <div className="user-img">
          <img src={Chimp} alt="" />
          <button>Edit </button>
        </div>
        <div className="profile-details-con">
          <table className="table">
            <thead>
              <tr className="text-muted">
                <th scope="col">User Account</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{state.user.name}</td>
                <td>
                  <AiTwotoneEdit />
                </td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{state.user.email}</td>
                <td>
                  <AiTwotoneEdit />
                </td>
              </tr>
              <tr>
                <th>Phone Number</th>
                <td>{state.user.phone}</td>
                <td>
                  <AiTwotoneEdit />
                </td>
              </tr>
              <tr>
                <th>Password</th>
                <td>{state.user.password}</td>
                <td>
                  <AiTwotoneEdit />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="go-back-btn">Go Back</button>
      </div>
    </div>
  );
}
export default Account;
