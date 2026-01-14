import React, { useEffect, useState } from "react";
import { loadUsers } from "./FetchData";
import UserItem from "./UserItem";
import './userList.css';
import ErrorMessage from "./ErrorMessage";


export default function UserList(props) {
  const { handleUserClick } = props;
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await loadUsers();
        setUsers(data);
        setError(null);
      } catch (e) {
        setError(e.message);
      }
    }

    fetchUsers();
  }, []);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="user-list">
      <h2>Profiles</h2>
      {users.map((u) => (
        <UserItem key={u.id} user={u} onUserClick={handleUserClick} />
      ))}
    </div>
  );
}

