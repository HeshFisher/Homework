

export default function CommentsItem(props) {
const {comments} = props;


  return (
        <div className="comment-item">
          <h4>Name: {comments.name}</h4>
          <h5>Email: {comments.email}</h5>
          <p>{comments.body}</p>
    </div>
  );
}
