import React from "react";
import { useEffect } from "react";
import Post from "./Post";
import { useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:8080/posts");
        if (!response.ok) {
          throw new Error(`${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setPosts(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return (
    <>
      {posts.map((p) => (
          <Post key={p._id} post={p} />
      ))}
    </>
  );
}
