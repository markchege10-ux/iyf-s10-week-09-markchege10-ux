const BASE_URL = "http://localhost:5000/api";

export const getPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export const getPostById = async (id) => {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
};

export const createPost = async (data) => {
  const res = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create post");
  return res.json();
};