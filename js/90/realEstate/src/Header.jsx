import React from 'react';
import './header.css';
import { NavLink } from 'react-router';

export default function Header() {
  return (
    <>
      <header>
       <NavLink to="/" className="logo" ><h1>Real Estate</h1></NavLink> 
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/sellHome">Sell With Us</NavLink>
          <NavLink to="/buyHome">Buy with Us</NavLink>
        </nav>
      </header>
    </>
  );
}
