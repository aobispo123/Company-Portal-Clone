import Card from "./Card";
import classes from "./Teams.module.css";

function TeamItem(props) {
  return (
    <Card>
      <div className={classes.cardLayout}>
        <div className={classes.teamInfo}>
          <p>{props.teamName}</p>
          <p>Projects: {props.numberOfProjects}</p>
        </div>
        <div className={classes.teamMembers}>
          {props.members.map((member) => (
            <button> {member}</button>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default TeamItem;
