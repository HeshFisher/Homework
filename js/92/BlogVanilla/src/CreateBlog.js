import attachBlogClickHandler from "./BlogClick";
import { loadBlogs } from "./fetchData";


export async function createBlogList(userId, user, onBack) {
  const blogs = await loadBlogs(userId);

  document.querySelector(".user-list")?.remove();

  document.querySelector(".blog-list")?.remove();

  const blogContainer = document.createElement("div");
  blogContainer.className = "blog-list";

  const blogsHTML = blogs
    .map(
      (b) =>
        `<div class="blog-item" id="blog-${b.id}"><h3>Title: ${b.title}</h3> <p>${b.body}</p><button class="comment-button" data-id="${b.id}">Show Comments</button><div class="comments-container"></div></div>`
    )
    .join("");

  const header = `<div class="blog-header"><button id="back-button">Back</button><h2>Name: ${user.name}</h2><h3>Company: ${user.company.name}</h3><h4>Website: ${user.website}</h4></div>`;

  blogContainer.innerHTML = header + blogsHTML;

  document.body.appendChild(blogContainer);
  attachBlogClickHandler(blogContainer,onBack);
}
