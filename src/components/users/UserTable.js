import UserRow from "./UserRow";

function UserTable(props){
    return(
        props.users.map((user) => (
            <UserRow
              key={user.id}
              id={user.id}
              name={user.first + " " + user.last}
              email={user.email}
              team={user.team}
              active={user.active}
              admin={user.admin}
              status={user.status}
            />
            ))
    )
}

export default UserTable;