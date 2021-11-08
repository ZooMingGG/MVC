module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("post", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    text: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  });

  return Post;
};