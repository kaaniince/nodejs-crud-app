//PRIVADE

const userService = require("../services/user");

const userController = {
  updateUser: async (req, res) => {
    try {
      const response = await userService.updateUser(req.body);
      res.status(200).send({ response });
    } catch (error) {
      res.status(500).send({ error: "An error occurred during login" });
    }
  },
  deleteUser: async (req, res) => {
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

module.exports = userController;
