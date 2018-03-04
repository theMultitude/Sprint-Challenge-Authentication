const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const user = new User(req.user)
    user.save().then(neu => {
      res.json(neu)
    )}
      .catch(err => {
        res.send(err)
      });
  // there should be a user object set on req
  // use that req.user object to create a user and save it to our Mongo instance.
};

module.exports = {
  createUser
};
