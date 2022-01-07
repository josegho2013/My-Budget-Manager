const { Users } = require("../../db");
const { v4: uuidv4 } = require("uuid");

async function createUser(req, res) {
  let {
    name,
    last_name,
    email,
    userName,
    password,
    confirm_password,
    date_of_birth,
    genre,
  } = req.body;

  try {
    let userCreate = await Users.create({
      id: uuidv4(),
      name,
      last_name,
      email,
      userName,
      password,
      confirm_password,
      date_of_birth,
      genre,
    });

    return res.status(200).send(userCreate);
  } catch (error) {
    return res.send(error);
  }
}

module.exports = {
  createUser,
};
