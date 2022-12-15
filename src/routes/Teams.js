import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Popup from "../components/popup/Popup";
import CreateTeam from "../components/teams/CreateTeam";
import TeamList from "../components/teams/TeamList";
import classes from "../components/announcements/Announcements.module.css";
import useAxios from "../services/useAxios";

const Teams = () => {

  // const loadedTeams = [
  //   {
  //     teamName: "Mavericks",
  //     numberOfProjects: 1,
  //     members: ["Andre", "Michael", "Guy", "Anthony"]
  //   },
  //   {
  //     teamName: "Rockets",
  //     numberOfProjects: 1,
  //     members: ["Andre", "Michael", "Guy", "Anthony"]
  //   },
  //   {
  //     teamName: "Bears",
  //     numberOfProjects: 1,
  //     members: ["Andre", "Michael", "Guy", "Anthony"]
  //   },
  //   {
  //     teamName: "Hornets",
  //     numberOfProjects: 1,
  //     members: ["Andre", "Michael", "Guy", "Anthony"]
  //   },
  //]


  const loadedMembers = [
    { id: 9871, name: "Guy" },
    { id: 9872, name: "Jeremy" },
    { id: 9873, name: "Anthony" },
    { id: 9874, name: "Andre" },
    { id: 9875, name: "Ryan" },
    { id: 9876, name: "Michael" },

  ];

  const { response, loading, error } = useAxios({

    method: 'get',
    url: '/teams'
  })



  const [buttonPopup, setButtonPopup] = useState(false);

  const [chosenMembers, setChosenMembers] = useState([]);
  const [availableMembers, setAvailableMembers] = useState([]);

  function clickNew() {
    setButtonPopup(true);
    // setAvailableMembers(loadedMembers); => empty array
    // setAvailableMembers(availableMembers.push(loadedMembers)); => array inside array [[{},{}]]
    for (let member of loadedMembers) {
      availableMembers.push(member);
    }
    setAvailableMembers(availableMembers); //=> looks good thanks to for loop!
    console.log(
      `inside clickNew on Team.js. availableMembers: ${JSON.stringify(
        availableMembers
      )}`
    );
    console.log(
      `inside clickNew on Team.js. chosenMembers: ${JSON.stringify(
        chosenMembers
      )}`
    );
  }

  return (
    <section>
      <Navbar />
      <h1 className={classes.h1}>Teams</h1>
      {/* <div className={classes.actions}>
        <button onClick={clickNew}>New Team</button>
      </div> */}

      {loading ? ( <p>loading...</p>) : 
      (
        <div>
          {error && (
            <div>
              <p>{error.message}</p>
            </div>
           )}
          <div>                
            <TeamList teams={response} />
            {console.log(response)}
          </div>
        </div>
      )}
      

      {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Overlay Template Title</h3>
        <p>Michael was here...</p>
      </Popup>{" "} */}
      <div className={classes.actions}>
        <button onClick={clickNew}>New Team</button>
      </div>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <CreateTeam
          availableMembers={availableMembers}
          chosenMembers={chosenMembers}
          setAvailableMembers={setAvailableMembers}
          setChosenMembers={setChosenMembers}
        />
      </Popup>
    </section>
  );
};

export default Teams;
