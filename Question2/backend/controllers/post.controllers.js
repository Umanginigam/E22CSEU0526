// Description: This file contains the controller for handling post-related requests.
const { fetchFromAPI } = require('../service/services');

async function getPosts(req, res) {
  const type = req.query.type;

  if (!['latest', 'popular'].includes(type)) {
    return res.status(400).json({ error: 'Invalid type param' });
  }

  const posts = await fetchFromAPI('/posts');

  if (type === 'latest') {
    const sorted = posts.sort((a, b) => b.id - a.id).slice(0, 5);
    return res.json(sorted);
  }

  if (type === 'popular') {
    const commentCounts = {};

    await Promise.all(
      posts.map(async (post) => {
        const comments = await fetchFromAPI(`/comments?postId=${post.id}`);
        commentCounts[post.id] = comments.length;
      })
    );

    const maxCount = Math.max(...Object.values(commentCounts));
    const topPosts = posts.filter(p => commentCounts[p.id] === maxCount);

    return res.json(topPosts);
  }
}

module.exports = { getPosts };
