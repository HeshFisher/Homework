import React from "react";

export default function Post(props) {
  const { post } = props;
  return (
    <>
      <h2>{post.title}</h2>
      <h3>{post.author}</h3>
      <h4>{post.date}</h4>
      <p>{post.body}</p>
    </>
  );
}
