const { User } = require("../../db");

async function deleteUser(req, res, next) {
  const id = req.params.id;

  try {
    const UserId = await User.destroy({
      where: { id },
    });

    return res.sendStatus(200);
  } catch (error) {
    return res.status(404).send("The User Has Been Removed Successfully!");
  }
}

module.exports = {
  deleteUser,
};
