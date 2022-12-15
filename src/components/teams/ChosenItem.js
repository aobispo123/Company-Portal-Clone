import classes from "./CreateTeam.css";

function ChosenItem(props) {

  function removeMember(idVal) {
    let index;
    for (let i = 0; i < props.chosenMembers.length; i++) {
      if (props.chosenMembers[i].id == idVal) {
        let newMember = props.chosenMembers[i];
        index = i;
        props.availableMembers.push(newMember);
        break;
      }
    }
    props.chosenMembers.splice(index, 1);

    props.setAvailableMembers(props.availableMembers);
    props.setChosenMembers(props.chosenMembers);
    console.log(`ChosenItem.js: end of for: chosenMembers: ${JSON.stringify(props.chosenMembers)}`)
  }

  return (
    <div  >
      <span className="name-pills">{props.memberName}</span>
      <button type="button" value={props.id} onClick={removeMember.bind(this, props.id)}>
        {" "}
        {/*without bind, only one member will be chosen at a time.*/}
        remove
      </button>
    </div>
  );
}

export default ChosenItem;
