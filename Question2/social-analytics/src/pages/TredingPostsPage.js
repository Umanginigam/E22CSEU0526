import React, { useEffect, useState } from "react";
import { getTrendingPosts } from "../api";
import PostCard from "../components/PostCard";

const TrendingPostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getTrendingPosts().then(setPosts);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Trending Posts</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default TrendingPostsPage;