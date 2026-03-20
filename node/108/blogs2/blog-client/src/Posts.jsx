import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./Post";
import io from "socket.io-client";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:8080/posts");
        if (!response.ok) {
          throw new Error(`${response.status} - ${response.statusText}`);
        }
        const posts = await response.json();
        setPosts(posts);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);


  const socketIo = io("http://localhost:8080");
 //   socketIo.on("post", (post) => setPosts([...posts, post]));
  useEffect(() => {
    function addPost(post) {
      setPosts([...posts, post]);
    }
    socketIo.on("post", addPost);
    return () => {
      socketIo.off("post", addPost);
    };
  }, [posts, socketIo]);

  return (
    <div>
      {posts?.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </div>
  );
}
