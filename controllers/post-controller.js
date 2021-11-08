const db = require("../models/index");
const Post = db.posts;
const createPath = require('../helpers/create-path');

const handleError = (res, error) => {
  console.log(error);
  res.render(createPath('error'), { title: 'Error' });
};

const getPost = (req, res) => {
  const title = 'Post';
  Post
    .findOne({ where: { id: req.params.id } })
    .then(post => res.render(createPath('post'), { post, title }))
    .catch((error) => handleError(res, error));
}

const deletePost = (req, res) => {
  Post
    .destroy({ where: { id: req.params.id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => handleError(res, error));
}

const getEditPost = (req, res) => {
  const title = 'Edit post';
  Post
    .findOne({ where: { id: req.params.id } })
    .then(post => res.render(createPath('edit-post'), { post, title }))
    .catch((error) => handleError(res, error));
}

const editPost = (req, res) => {
  const { title, author, text } = req.body;
  const { id } = req.params;
  Post
    .update({ title, author, text }, { where: { id: req.params.id } })
    .then(() => res.redirect(`/posts/${id}`))
    .catch((error) => handleError(res, error));
}

const getPosts = (req, res) => {
  const title = 'Posts';
  Post
    .findAll()
    .then(posts => res.render(createPath('posts'), { posts, title }))
    .catch((error) => handleError(res, error));
}

const getAddPost = (req, res) => {
  const title = 'Add Post';
  res.render(createPath('add-post'), { title });
}

const addPost = (req, res) => {
  const { title, author, text } = req.body;
  const post = new Post({ title, author, text });
  post
    .save()
    .then(() => res.redirect('/posts'))
    .catch((error) => handleError(res, error));
}

module.exports = {
  getPost,
  deletePost,
  getEditPost,
  editPost,
  getPosts,
  getAddPost,
  addPost,
};
