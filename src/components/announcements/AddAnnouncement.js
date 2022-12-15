import React, { useState } from "react";

import "./AddAnnouncement.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

import axios from 'axios';

const AddAnnouncement = () => {

  const setInputHeight = (element, defaultHeight) => {
    if (element) {
      const target = element.target ? element.target : element;
      target.style.height = defaultHeight;
      target.style.height = `${target.scrollHeight}px`;
    }
  };


  const [ newAnnouncement, setNewAnnouncement ] = useState({
    credentials: {},
    announcement: {}
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setNewAnnouncement({
      "credentials": {"username": "morgoth",
                      "password": "simlaril"},
      "announcement": {"title": "RE: The Valar",
                     "message": "Lets eat their cool lights",
                     "company": "Orodruin", author: "Melkor"}
    });

    axios.post("https://httpbin.org/post", newAnnouncement)
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
      <p class="poster">Posting user</p>
      <div>
        <textarea
          class="announcement-text"
          placeholder="Enter announcement"
          name="announcement-input"
          onChange={(event) => setInputHeight(event, "10px")}
          maxlength="285"
        />
      </div>
      <button class="submit" onClick= {handleSubmit}>Submit</button>
    </form>
  );
};

export default AddAnnouncement;
