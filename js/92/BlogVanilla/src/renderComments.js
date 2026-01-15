import { loadComments } from "./fetchData";

export default async function renderComments(blogId, commentContainer, button) {
  const comments = await loadComments(blogId);
  commentContainer.innerHTML = comments
    .map(
      (c) =>
        `<div class="comment-item"><h4>Name: ${c.name}</h4><h5>Email: ${c.email}</h5><p>${c.body}</p></div>`
    )
    .join("");
  button.innerText = "Hide Comments";
}
