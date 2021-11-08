module.exports = (sequelize, Sequelize) => {
  const Contact = sequelize.define("contact", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    link: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Contact;
};
