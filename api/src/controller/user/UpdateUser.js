const { User } = require("../../db");

async function updateUser(req, res) {
  let { id, name, last_name, email, userName, password, date_of_birth, genre } =
    req.body;

  try {
    let userUpdate = await User.update(
      {
        name,
        last_name,
        email,
        userName,
        password,
        date_of_birth,
        genre,
      },
      { where: { id } }
    );

    return res.status(200).send(userUpdate);
  } catch (error) {
    return res.send(error);
  }
}

module.exports = {
  updateUser,
};
