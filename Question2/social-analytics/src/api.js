
import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const getTopUsers = async () => {
  const res = await axios.get(`${BASE_URL}/users`);
  return res.data;
};

export const getTrendingPosts = async () => {
  const res = await axios.get(`${BASE_URL}/posts?type=popular`);
  return res.data;
};

export const getFeedPosts = async () => {
  const res = await axios.get(`${BASE_URL}/posts`);
  return res.data;
};