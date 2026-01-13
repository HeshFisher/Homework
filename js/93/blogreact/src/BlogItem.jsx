import React, { useState } from "react";
import { loadComments } from "./FetchData";
import CommentList from "./CommentList";
import './blogItem.css';

export default function BlogItem(props) {
  const { post } = props;


  const [comments, setComments] = useState([]);
  const [isShowing, setIsShowing] = useState(false);

  async function handleCommentsClick() {
    if (!isShowing) {
      const data = await loadComments(post.id);
      setComments(data);
    }


    setIsShowing(!isShowing);
  }

  const show = isShowing ? 'hide comments' : 'show comments';
  const commentsList = isShowing && <CommentList comments={comments} />;
  return (
    <>
      <div className="blog-item" id="blog-{post.id}">
        <h3>Title: {post.title}</h3> <p>{post.body}</p>
        <button className="comment-button" onClick={handleCommentsClick}>
          {show}
        </button>

        {commentsList}
      </div>
    </>
  );
}
