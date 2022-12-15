import classes from "./Card.module.css";

function Card(props) {
  return (
    <div className={classes.card}>
      {props.children}
      {/* <div className={classes.teamMembers}></div> */}
    </div>
  );
}

export default Card;
