(async function () {
  'use strict';

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      return response.json();
    } catch (e) {
      console.error(e);
    }
  }
  async function loadUsers() {
    return fetchData('https://jsonplaceholder.typicode.com/users');
  }

  async function loadBlogs(userId) {
    return fetchData(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
  }

  async function loadComments(postId) {
    return fetchData(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
  }

  async function createUsersList() {
    const users = await loadUsers();

    const container = document.createElement('div');
    container.className = 'user-list';
    const userHTML = users
      .map(
        (u) =>
          `<div class="user-item" id="user-${u.id}"><h2>Name: ${u.name}</h2><h3>Company: ${u.company.name}</h3><h4>Website: ${u.website}</h4></div>`
      )
      .join('');
    container.innerHTML = userHTML;
    document.body.appendChild(container);
    attachUserClickHandler(container,users);
  }

  async function attachUserClickHandler(container,users) {
    container.addEventListener('click', async (e) => {
      const userItem = e.target.closest('.user-item');
      const Id = userItem.id;
      const userId = Id.replace('user-', '');
      const user = users.find(u => u.id === +userId);
      createBlogList(userId,user);
    });
  }

  async function createBlogList(userId,user) {
    const blogs = await loadBlogs(userId);

    document.querySelector('.user-list')?.remove();

    document.querySelector('.blog-list')?.remove();

    const blogContainer = document.createElement('div');
    blogContainer.className = 'blog-list';

    const blogsHTML = blogs
      .map(
        (b) =>
          `<div class="blog-item" id="blog-${b.id}"><h3>Title: ${b.title}</h3> <p>${b.body}</p><button class="comment-button" data-id="${b.id}">Show Comments</button><div class="comments-container"></div></div>`
      )
      .join('');

    const header = `<div class="blog-header"><button id="back-button">Back</button><h2>Name: ${user.name}</h2><h3>Company: ${user.company.name}</h3><h4>Website: ${user.website}</h4></div>`;

    blogContainer.innerHTML = header + blogsHTML;

    document.body.appendChild(blogContainer);
    attachBlogClickHandler(blogContainer);
  }

  function attachBlogClickHandler(blogContainer) {
    blogContainer.addEventListener('click', async (e) => {
      if (e.target.id === 'back-button') {
        blogContainer.remove();
        createUsersList();
      }

      if (e.target.classList.contains('comment-button')) {
        const button = e.target;
        const blogId = button.dataset.id;
        const blogItem = document.getElementById(`blog-${blogId}`);
        const commentContainer = blogItem.querySelector('.comments-container');

        if (commentContainer.innerHTML !== '') {
          commentContainer.innerHTML = '';
          button.innerText = 'Show Comments';
          return;
        }

        const comments = await loadComments(blogId);
        commentContainer.innerHTML = comments
          .map(
            (c) =>
              `<div class="comment-item"><h4>Name: ${c.name}</h4><h5>Email: ${c.email}</h5><p>${c.body}</p></div>`
          )
          .join('');
        button.innerText = 'Hide Comments';
      }
    });
  }

  createUsersList();
}());
