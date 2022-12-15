import React, { useState } from "react";

import "./EditProject.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

import axios from "axios";

const EditProject = () => {

const [ editedProject, setEditedProject ] = useState({
    credentials: {},
    project: {}
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setEditedProject({
      "credentials": {"username": "fullmetal_hero",
                      "password": "love4alphonse"},
          "project": {"name": "Otherworldly Retrieval",
                      "description": "Definitely didn't lose my bros body while transmuting",
                      "active": true,
                      "team": "Fullmetal Alchemist"
                      }
    });

    axios.patch("https://httpbin.org/patch", editedProject)
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
        {/* <p class="announcement">project name</p> */}
        <textarea class="announcement-input" placeholder="Enter project name" name="announcement-input"></textarea>
        </div>
        <div>
        {/* <p class="announcement">description</p> */}
        <textarea class="announcement-input" placeholder="Enter announcement" name="announcement-input"></textarea>
      </div>
      <button class="submit-btn" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default EditProject;