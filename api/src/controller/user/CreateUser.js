const { Operations } = require("../../models");
const { v4: uuidv4 } = require("uuid");

async function createUser(req, res) {
  let { name, last_name, email, date_of_birth,sexo } = req.body;

  try {
    let userCreate = await Operations.create({
      id: uuidv4(),
      name,
      last_name,
      email,
      date_of_birth,
      sexo
    });

    return res.status(200).send(userCreate);
  } catch (error) {
    return res.send(error);
  }
}

module.exports = {
    createUser,
};
