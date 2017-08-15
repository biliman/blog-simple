const User = require('../models/user');
const methods = {};
const bCrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 7;

methods.signUp = (req, res) => {
  let newUser = new User ({
    username: req.body.username,
    password = bCrypt.hashSync(req.body.password, saltRounds)
  })

  newUser.save((err, response) => {
    if (err) res.json({ message: `Error on SignUp: ${err}`, success: false })
    else {
      console.log(`SignUp Success`);
      console.log(response);
      res.send(response)
    }
  })
}

methods.signIn = (req, res) => {
  User.findOne({ username: req.body.username}, (err, response) => {
    if (err) res.json({ message: `Error on SignIn: ${err}`m success: false })
    else {
      if (bCrypt.compareSync(req.body.password, response.password)) {
        let token = jwt.sign({
          username: response.username
        }, process.env.SECRET_KEY, {expiresIn: '1d'})
        res.json({
          message: `SignIn Success`,
          username: response.username,
          token })
      } else {
        res.json({ message: `Password is wrong`})
      }
    }
  })
}

methods.getAllUser = (req, res) => {
  User.find({}, (err, response) => {
    if (err) res.json({ message: `Error Getting User Data: ${err}`, success: false})
    else {
      res.send(response)
    }
  })
}

module.exports = methods
