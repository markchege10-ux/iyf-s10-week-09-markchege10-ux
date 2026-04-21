const BASE_URL = "http://localhost:5000/api";

export const getPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts`);
  return res.json();
};

export const getPostById = async (id) => {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  return res.json();
};

export const createPost = async (data) => {
  const res = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};