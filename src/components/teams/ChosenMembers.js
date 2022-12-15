import { useEffect } from "react";
import ChosenItem from "./ChosenItem";
import classes from "./CreateTeam.css";

function ChosenMembers(props) {
 
    console.log(
      `ChosenMember.js: props.chosenMembers: ${JSON.stringify(
        props.chosenMembers
      )}`
    );
    return (
      <ul>
        {props.chosenMembers.map((member) => (
          <li key={member.id}>
            <ChosenItem
              key={member.id}
              id={member.id}
              memberName={member.name}
              chosenMembers={props.chosenMembers}
              availableMembers={props.availableMembers}
              setAvailableMembers={props.setAvailableMembers}
              setChosenMembers={props.setChosenMembers}
            />
          </li>
        ))}
      </ul>
    );
 
}

export default ChosenMembers;
