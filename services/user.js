const bcrypt = require("bcrypt");
const mongooseUser = require("../models/user");
const user = require("../models/user");

async function createUser(userParams) {
  const { username, email, password } = userParams;
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await mongooseUser.create({
      username,
      email,
      password: hashedPassword,
    });
    newUser.save();
    return true;
  } catch (error) {
    console.error("An error occurred while creating the user:", error);
    return false;
  }
}

async function updateUser(userParams) {
  const { id } = userParams;
  const email = userParams.email;

  try {
    const updatedUser = await mongooseUser.findById(id);
    updatedUser.email = email;
    await updatedUser.save();

    return updatedUser;
  } catch (error) {
    console.error("An error occurred while updating the user:", error);
    return false;
  }
}

async function deleteUser(userParams) {
  const { id } = userParams;
  try {
    const deletedUser = await mongooseUser.findByIdAndDelete(id);
    console.log(deletedUser);
    return true;
  } catch (error) {
    console.error("An error occurred while deleting the user:", error);
    return false;
  }
}
module.exports = { createUser, updateUser, deleteUser };
