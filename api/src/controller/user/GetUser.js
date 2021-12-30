const { User } = require("../../db");

async function getUserDb(req, res, next) {
  try {
    let userDataBase = await User.findAll({
      attributes: [
        "id",
        "name",
        "last_name",
        "email",
        "userName",
        "password",
        "date_of_birth",
        "genre",
      ],
    });

    return res.status(200).json(userDataBase);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getUserDb,
};
