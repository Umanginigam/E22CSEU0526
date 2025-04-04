import React, { useEffect, useState } from 'react';
import { fetchTrendingPosts } from './api';

const TrendingPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchTrendingPosts().then(setPosts);
    }, []);

    return (
        <div>
            <h2>Trending Posts</h2>
            <ul>
                {posts.map(post => <li key={post.id}>{post.content}</li>)}
            </ul>
        </div>
    );
};

export default TrendingPosts;
