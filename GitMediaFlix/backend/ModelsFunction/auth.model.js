const { default: mongoose } = require("mongoose");

const { User } = require("../schemaModels/User");
const bcrypt = require("bcryptjs");
const { createToken } = require("../Controllers/AuthenticatedOrNotUser");

exports.createNewUser = (firstName, lastName, email, password) => {
  return new Promise((resolve, reject) => {
    User.findOne({ email: email })
      .then((user) => {
        if (user) {
          // mongoose.disconnect();
          reject("email is used");
        } else {
          return bcrypt.hash(password, 10);
        }
      })
      .then((hashedPassword) => {
        let user = new User({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hashedPassword,
        });
        return user.save();
      })
      .then(() => {
        // mongoose.disconnect();
        resolve();
      })
      .catch((err) => {
        // mongoose.disconnect();
        reject(err);
      });
  });
};

exports.login = (email, password) => {
  return new Promise((resolve, reject) => {
    User.findOne({ email: email })
      .then((user) => {
        if (!user) {
          reject("email not found");
        } else {
          return bcrypt.compare(password, user.password).then((same) => {
            if (!same) {
              reject("password isn't correct");
            } else {
              const token = createToken(user);
              console.log(token);
              resolve(token);
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
