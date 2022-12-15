import React, { useState } from "react";
import "./CreateTeam.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ChosenMembers from "./ChosenMembers";

const CreateTeam = (props) => {
  const [selectedMember, setSelectedMember] = useState("");

  function addMember(idVal) {
    setSelectedMember(idVal);

    let index;
    for (let i = 0; i < props.availableMembers.length; i++) {
      if (props.availableMembers[i].id == idVal) {
        let newMember = props.availableMembers[i];
        index = i;
        props.chosenMembers.push(newMember);
        break;
      }
    }
    props.availableMembers.splice(index, 1);

    props.setAvailableMembers(props.availableMembers);
    props.setChosenMembers(props.chosenMembers);

    console.log(
      `CreateTeam: Select Members: chosenMembers: ${JSON.stringify(
        props.chosenMembers
      )}`
    );
  }

  return (
    
      // <div className="form">
      <form>
        <button class="close-btn">
          <AiOutlineCloseCircle />
        </button>
        <div>
          <textarea
            class="announcement-input"
            placeholder="Enter team name"
            name="announcement-input"
          ></textarea>
          <br />
          <textarea
            class="announcement-input"
            placeholder="Enter description"
            name="announcement-input"
          ></textarea>

          <h2>Select Members</h2>
          <select
            value={selectedMember}
            // onChange={(event) => setSelectedMember(event.target.value)}
            onChange={(event) => addMember(event.target.value)}
          >
            <option value="" />

            {props.availableMembers.map((member) => (
              <option key={member.id} value={member.id}>
                {member.name}
              </option>
            ))}
          </select>
          <ChosenMembers
            availableMembers={props.availableMembers}
            chosenMembers={props.chosenMembers}
            setAvailableMembers={props.setAvailableMembers}
            setChosenMembers={props.setChosenMembers}
          />
        </div>
        <button class="submit-btn">Submit</button>
      {/* </div>      */}
      </form>
    
  );
};

export default CreateTeam;
