import React from 'react'
import { NavLink } from 'react-router';
import './Header.css'

export default function Header() {
  return (
    <header>
      <h1>PCS React MongoDB SocketIO Express Blog</h1>
      <NavLink to="/">Posts</NavLink> |
      <NavLink to="/addPost">Add Post</NavLink>
    </header>
  );
}
