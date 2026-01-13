import React from "react";
import CommentsItem from "./CommentsItem";

export default function CommentList(props) {
  const { comments } = props;

  return (
    <div className="comment-list">
      {comments.map((c) => (
        <CommentsItem key={c.id} comments={c} />
      ))}
    </div>
  );
}
