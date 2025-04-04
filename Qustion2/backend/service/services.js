const axios = require('axios');
const BASE_URL = 'http://20.244.56.144/evaluation-services';

const fetchUsers = async () => {
  const res = await axios.get(`${BASE_URL}/users`);
  return res.data.users;
};

const fetchPostsByUser = async (userId) => {
  const res = await axios.get(`${BASE_URL}/posts?userid=${userId}`);
  return res.data.posts;
};

const fetchCommentsByPost = async (postId) => {
  const res = await axios.get(`${BASE_URL}/comments?postid=${postId}`);
  return res.data.comments;
};

module.exports = {
  fetchUsers,
  fetchPostsByUser,
  fetchCommentsByPost,
};
