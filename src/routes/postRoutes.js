const express = require('express');
const Post = require('../models/post');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

// GET /api/posts
// Retrieve all posts and if author query parameter is provided, retrieve posts by author
router.get('/', async (req, res, next) => {
  try {
    const { author } = req.query;
    let query = {};
    if (author) {
      query.authorId = author;
    }

    const posts = await Post.find(query).populate('authorId').sort({ createdAt: -1 });

    const postsData = posts.map(post => {
      return {
        id: post._id,
        title: post.title,
        content: post.content,
        createdAt: post.createdAt,
        username: post.authorId.username,
      }
    });

    res.json(postsData);
  } catch (error) {
    next(error);
  }
});

// GET /api/posts/:postId
// Retrieve a specific post by ID
router.get('/:postId', async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId).populate('authorId');
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const postData = {
      id: post._id,
      title: post.title,
      content: post.content,
      createdAt: post.createdAt,
      username: post.authorId.username,
    };

    res.json(postData);
  } catch (error) {
    next(error);
  }
});

// POST /api/posts
// Create a new post
router.post('/', authenticateToken, async (req, res, next) => {
  try {
    const { title, content } = req.body;
    
    if(title.length < 10 || content.length < 50) {
      throw new Error('Title must be at least 10 characters long and content must be at least 50 characters long');
    }

    const authorId = req.userId;
    const newPost = new Post({ title, content, authorId });
    await newPost.save();
    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
