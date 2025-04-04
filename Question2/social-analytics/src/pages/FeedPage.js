import React, { useEffect, useState } from "react";
import { getFeedPosts } from "../api";
import PostCard from "../components/PostCard";

const FeedPage = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const newPosts = await getFeedPosts();
    setPosts(newPosts);
  };

  useEffect(() => {
    fetchPosts();
    const interval = setInterval(fetchPosts, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Live Feed</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default FeedPage;