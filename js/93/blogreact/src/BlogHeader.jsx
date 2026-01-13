import React from 'react'
import './blogHeader.css';

export default function BlogHeader(props) {
  const {user, backClick} = props
  return (
    <>
      <div className="blog-header">
        <button id="back-button" onClick={backClick}>Back</button>
        <h2>Name: {user.name}</h2>
        <h3>Company: {user.company.name}</h3>
        <h4>Website: {user.website}</h4>
      </div>
    </>
  );
}
