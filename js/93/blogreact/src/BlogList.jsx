import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import { loadBlogs } from "./FetchData";
import BlogHeader from "./BlogHeader";
import ErrorMessage from "./ErrorMessage";
import "./blogList.css";

export default function BlogList(props) {
  const { user, onBackClick } = props;
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {

        const data = await loadBlogs(user.id);

        setPosts(data);
        setError(null);
      } catch (e) {
        setError(e.message);
        return;
      }
    }

    fetchBlogs();
  }, [user.id]);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if(posts.length === 0) {
    return <div className="blog-list">
      <BlogHeader user={user} backClick={onBackClick} />
      <h3>No blogs found for this user.</h3>
    </div>
  }

  return (
    <div>
      <BlogHeader user={user} backClick={onBackClick} />
      {posts.map((p) => (
        <BlogItem key={p.id} post={p} />
      ))}
    </div>
  );
}
