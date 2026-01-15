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
export async function loadUsers() {
  return fetchData("https://jsonplaceholder.typicode.com/users");
}

export async function loadBlogs(userId) {
  return fetchData(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
}

export async function loadComments(postId) {
  return fetchData(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
}
