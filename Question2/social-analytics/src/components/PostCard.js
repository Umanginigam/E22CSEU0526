import React from "react";

const PostCard = ({ post }) => (
  <div className="bg-white p-4 rounded-xl shadow-md">
    <img
      src={`https://source.unsplash.com/600x300/?social,post,${post.id}`}
      alt="Post visual"
      className="rounded mb-3"
    />
    <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
    <p>{post.body}</p>
  </div>
);

export default PostCard;