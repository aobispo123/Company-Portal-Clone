import TeamItem from "./TeamItem";
import classes from "./Teams.module.css";

function TeamList(props) {
  return (
    <div className={classes.teams}>
      {props.teams.map((team) => (
        <TeamItem
          //   key={team.id}
          //   id={team.id}
          teamName={team.teamName}
          numberOfProjects={team.numberOfProjects}
          members={team.members}
        />
      ))}
    </div>
  );
}

export default TeamList;
