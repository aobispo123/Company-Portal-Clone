import React, { useState } from "react";

import "./AddUser.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

import axios from 'axios';

const AddUser = () => {

  const [ newUser, setNewUser ] = useState({
    credentials: {},
    announcement: {}
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setNewUser({
      "credentials": {"username": "satoro_gojo",
                      "password": "thestrongest4ever"},
             "user": {"credentials": {
                          "username": "satoro_gojo",
                          "password": "thestrongest4ever"},
                      "profile": {
                          "first": "Gojo",
                          "last": "Satoro",
                          "email": "jujutsu_high@earthlink.net",
                          "phone": "865-932-4786"
                      },
                      "active": true,
                      "admin": true,
                      "status": "Active",
                      "team": "Sukuna's Bane",
                      "company": "Jujutsu Academy"
                      }
    });

    axios.post("https://httpbin.org/post", newUser)
      .then((response) => {
        console.log(response.status)
        console.log(JSON.parse(response.data.data))
      });
  };


  return (
    <form>
      <button class="close-btn">
        <AiOutlineCloseCircle />
      </button>
      <div>
        <textarea
          class="announcement-input"
          placeholder="Enter first name"
          name="announcement-input"
        ></textarea>
        <textarea
          class="announcement-input"
          placeholder="Enter last name"
          name="announcement-input"
        ></textarea>
        <textarea
          class="email-input"
          placeholder="Enter email"
          name="announcement-input"
        ></textarea>

        <textarea
          class="announcement-input"
          placeholder="Enter password"
          name="announcement-input"
        ></textarea>

        <textarea
          class="announcement-input"
          placeholder="confirm password"
          name="announcement-input"
        ></textarea>
        <p class="para">Make user an admin role?</p>
        <select>
          <option value="" />
          <option >true</option>
          <option >false</option>
        </select>
      </div>

      <button class="submit-btn" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default AddUser;
