import React, { useState } from "react";
import classes from "./Projects.module.css";
import Popup from "../popup/Popup";
import EditProject from "./EditProject";
import moment from "moment"

function ProjectItem(props) {
  const [buttonPopup, setButtonPopup] = useState(false);

  function clickEdit() {
    setButtonPopup(true);
  }
  return (
    <li className={classes.li}>
      <hr className={classes.hr}></hr>
      <div className={classes.title}>
        <h4>{props.name}</h4>
        <p>{moment(props.date).fromNow()}</p>
      </div>
      <p className={classes.description}>{props.description}</p>
      <div className={classes.editActions}>
        <button onClick={clickEdit}>Edit</button>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <EditProject />
      </Popup>
    </li>
  );
}

export default ProjectItem;
