import "../users/UsersStyle.css";

function UserRow(props) {
  return (
    <tr class="user-table-divider">
      <td class="user-info">{props.name}</td>
      <td class="user-info">{props.email}</td>
      <td class="user-info">{props.team}</td>
      <td class="user-info user-status">{props.active.toString()}</td>
      <td class="user-info user-status">{props.admin.toString()}</td>
      <td class="user-info">{props.status}</td>
    </tr>
  );
}

export default UserRow;
