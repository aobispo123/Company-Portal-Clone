import React, { useState } from "react";

import "./CreateProject.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

import axios from "axios";

const CreateProject = () => {

  const setInputHeight = (element, defaultHeight) => {
    if (element) {
      const target = element.target ? element.target : element;
      target.style.height = defaultHeight;
      target.style.height = `${target.scrollHeight}px`;
    }
  };

  const [ newProject, setNewProject ] = useState({
    credentials: {},
    project: {}
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setNewProject({
      "credentials": {"username": "king_bradley",
                      "password": "armstrong4life"},
          "project": {"name": "Philosopher's Stone",
                      "description": "Definitely not transmuting a nation into a magic rock",
                      "active": true,
                      "team": "Hohenheim's Homunculi"
                      }
    });

    axios.post("https://httpbin.org/post", newProject)
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
      <div class="inputs">
        
        <input class="project-name" placeholder="Enter project name"></input>

        <textarea class="project-info" placeholder="Enter description" onChange={(event) => setInputHeight(event, "10px")}></textarea>

      </div>
      <button class="submit-btn" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default CreateProject;