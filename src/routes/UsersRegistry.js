import React, { useEffect, useState } from "react";

import UserTable from "../components/users/UserTable";

import "../components/users/UsersStyle.css";

import Navbar from "../components/Navbar";
import Popup from "../components/popup/Popup";
import AddUser from "../components/users/AddUser";

import classes from "../components/users/Users.module.css";

import useAxios from "../services/useAxios";

const UsersRegistry = () => {
  // const loadedUsers = [
  //   {
  //     id: 987654,
  //     first: "Chris",
  //     last: "Purnell",
  //     email: "cpurnell@cook-sys.org",
  //     team: "chic-fil-a",
  //     active: true,
  //     admin: true,
  //     status: "joined",
  //   },
  //   {
  //     id: 987655,
  //     first: "Will",
  //     last: "Martala",
  //     email: "willmartala@cook-sys.org",
  //     team: "chic-fil-a",
  //     active: true,
  //     admin: true,
  //     status: "joined",
  //   }
  // ];

  const { response, loading, error } = useAxios({
    method: "get",
    url: "/users",
  });

  const [buttonPopup, setButtonPopup] = useState(false);

  function clickAddUser() {
    setButtonPopup(true);
  }

  return (
    <div>
      <Navbar />
      <div class="layout">
        <h1 class="user-spacing user-title">User Registry</h1>
        <p class="user-title">
          A general view of all your members in your organization
        </p>

        <table border="1" class="user-spacing" id="user-table">
          {loading ? (
            "loading..."
          ) : (
            <div>
              {error && <div>{error.message}</div>}
              <div>
                {" "}
                {/* loadedUsers */}
                <tr class="user-table-divider">
                  <th class="user-table-title">Name</th>
                  <th class="user-table-title">Email</th>
                  <th class="user-table-title">Team</th>
                  <th class="user-table-title">Active</th>
                  <th class="user-table-title">Admin</th>
                  <th class="user-table-title">Status</th>
                </tr>
                <UserTable users={response} />
                {console.log(response)}
              </div>
            </div>
          )}
        </table>

        <div className={classes.newActions}>
          <button onClick={clickAddUser}>Add User</button>
        </div>


      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <AddUser />
      </Popup>
      
    </div>
    </div>
  );
};

export default UsersRegistry;
