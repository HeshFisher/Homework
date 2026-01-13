import React from "react";
import "./userItem.css";

export default function UserItem(props) {
  const { user, onUserClick } = props;
  return (
    <div className="user-item" onClick={() => onUserClick(user)}>
      <h2>Name: {user.name}</h2>
      <h3>Company: {user.company.name}</h3>
      <h4>Website: {user.website}</h4>
    </div>
  );
}
