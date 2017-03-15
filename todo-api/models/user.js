module.exports = function(sequelize, DateTypes) {
  return sequelize.define('user', {
    email: {
      type: DateTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DateTypes.STRING,
      allowNull: false,
      validate: {
        len: [7,100]
      }
    }
  }, {
    hooks: {
      beforeValidate: function(user, options) {
        var email = user.email;
        if (typeof email === 'string') {
          user.email = email.toLowerCase();
        }
      }
    }
  });
}
