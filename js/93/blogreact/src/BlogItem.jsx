import React, { useState } from "react";
import { loadComments } from "./FetchData";
import CommentList from "./CommentList";
import "./blogItem.css";
import ErrorMessage from "./ErrorMessage";

export default function BlogItem(props) {
  const { post } = props;

  const [comments, setComments] = useState([]);
  const [isShowing, setIsShowing] = useState(false);
  const [onError, setOnError] = useState(null);

  async function handleCommentsClick() {
    if (!isShowing) {
      try {
        const data = await loadComments(post.id);
        setComments(data);
        setOnError(null);
      } catch (e) {
        setOnError(e.message);
        return;
      }
    }





    setIsShowing(!isShowing);
  }

  const show = isShowing ? "hide comments" : "show comments";
  let commentsContent = null;


  if (isShowing) {
    if (comments.length === 0) {
      commentsContent = <h4>No comments found for this post.</h4>;
    }
    else {
      commentsContent = <CommentList comments={comments} />;
    }
  }
  return (
    <>
      <div className="blog-item" id="blog-{post.id}">
        <h3>Title: {post.title}</h3> <p>{post.body}</p>
        {onError && <ErrorMessage message={onError} />}
        <button className="comment-button" onClick={handleCommentsClick}>
          {show}
        </button>
        {commentsContent}
      </div>
    </>
  );
}
