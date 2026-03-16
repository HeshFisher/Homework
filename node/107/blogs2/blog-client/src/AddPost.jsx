import React from "react";
import "./addPost.css";
import { useState } from "react";
import Posts from "./Posts";
import { useNavigate } from "react-router";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const post = {
      title,
      body,
    };
    try {
      await fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (e) {
      console.error(e);
    }
    navigate("/");
  }

  return (
    <form id="addPost" onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Content:
        <textarea
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </label>

      <button>Add Post</button>
    </form>
  );
}
