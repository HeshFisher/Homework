import { loadUsers } from "./fetchData";
import { createBlogList } from "./CreateBlog";
import onClick from "./Utils";

export async function createUsersList() {
  const users = await loadUsers();

  const container = document.createElement("div");
  container.className = "user-list";
  const userHTML = users
    .map(
      (u) =>
        `<div class="user-item" id="user-${u.id}"><h2>Name: ${u.name}</h2><h3>Company: ${u.company.name}</h3><h4>Website: ${u.website}</h4></div>`
    )
    .join("");
  container.innerHTML = userHTML;
  document.body.appendChild(container);

  onClick(container, ".user-item", (e, userItem) => {
    const userId = userItem.id.replace("user-", "");
    const user = users.find((u) => u.id === +userId);
    createBlogList(userId, user, createUsersList);
  });
}


