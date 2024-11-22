//PUBLIC

const userService = require("../services/user");

const authController = {
  login: async (req, res) => {
    try {
      //const response = await userService.createUser(req.body);
      res.status(200).send({ response: "Login successful" });
    } catch (error) {
      res.status(500).send({ error: "An error occurred during login" });
    }
  },
  register: async (req, res) => {
    try {
      const response = await userService.createUser(req.body);
      if (response) {
        res.status(200).send({ response: "User registered successfully" });
      } else {
        res.status(500).send({ error: "User registration failed" });
      }
    } catch (error) {
      res.status(500).send({ error: "An error occurred during register" });
    }
  },
};

module.exports = authController;
