const express = require("express");

const userController = require("../controllers/user");

const router = express.Router();

router.put("/update", userController.updateUser);
router.delete("/delete", userController.deleteUser);

module.exports = router;
