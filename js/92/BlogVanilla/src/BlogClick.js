import renderComments from "./renderComments";
import onClick from "./Utils";

export default function attachBlogClickHandler(blogContainer,onBack) {
  onClick(blogContainer, "#back-button", () => {
    blogContainer.remove();
    if (onBack) {
      onBack();
    }
  });

  onClick(blogContainer, ".comment-button", (e, button) => {
    const blogId = button.dataset.id;
    const blogItem = document.getElementById(`blog-${blogId}`);
    const commentContainer = blogItem.querySelector(".comments-container");

    if (commentContainer.innerHTML !== "") {
      commentContainer.innerHTML = "";
      button.innerText = "Show Comments";
      return;
    }
    renderComments(blogId, commentContainer, button);
  });
}
