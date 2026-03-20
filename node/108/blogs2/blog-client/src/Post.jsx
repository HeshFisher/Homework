import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default function Post(props) {
  const { title, author, date, body } = props.post;

  dayjs.extend(relativeTime);
  return (
    <article>
      <h2>{title}</h2>
      <h3>
        by: {author},  {dayjs(date).fromNow()}
      </h3>
      <p> {body}</p>
    </article>
  );
}
