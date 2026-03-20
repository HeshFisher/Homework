import React from "react";

export default function Logout(props) {
  const { userName, setUserName } = props;

  async function logout(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/logout", {
        method: "POST",
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      setUserName(null);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      logged in as {userName}
      <button onClick={logout}>Logout</button>
    </div>
  );
}
