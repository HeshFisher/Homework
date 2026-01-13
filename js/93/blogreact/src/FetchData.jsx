export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
    return response.json();
  } catch (e) {
    console.error("Fetch data failed", e);
    throw e;
  }
}
export async function loadUsers() {
  return fetchData("https://jsonplaceholder.typicode.com/users");
}

export async function loadBlogs(userId) {

  const data = await fetchData(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}x`
  );
  if (data.length === 0) {
    throw new Error(`User ID ${userId} not found (No posts)`);
  }
  return data;
}

export async function loadComments(postId) {
  return fetchData(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
}
